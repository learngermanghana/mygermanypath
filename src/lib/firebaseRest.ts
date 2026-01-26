import crypto from "crypto";

const tokenEndpoint = "https://oauth2.googleapis.com/token";
const firestoreEndpoint = "https://firestore.googleapis.com/v1";

let cachedToken: { token: string; expiry: number } | null = null;

function getFirebaseConfig() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Missing Firebase admin environment variables.");
  }

  return { projectId, clientEmail, privateKey };
}

function base64Url(input: string | Buffer) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function createJwt(clientEmail: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(
    JSON.stringify({
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/datastore",
      aud: tokenEndpoint,
      iat: now,
      exp: now + 3600,
    }),
  );

  const signatureBase = `${header}.${payload}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signatureBase);
  const signature = base64Url(signer.sign(privateKey));

  return `${signatureBase}.${signature}`;
}

async function getAccessToken() {
  if (cachedToken && cachedToken.expiry > Date.now() + 60_000) {
    return cachedToken.token;
  }

  const { clientEmail, privateKey } = getFirebaseConfig();
  const assertion = createJwt(clientEmail, privateKey);

  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const res = await fetch(tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch access token: ${errorText}`);
  }

  const json = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    token: json.access_token,
    expiry: Date.now() + json.expires_in * 1000,
  };

  return json.access_token;
}

type FirestoreValue =
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: number }
  | { booleanValue: boolean }
  | { mapValue: { fields: Record<string, FirestoreValue> } }
  | { arrayValue: { values: FirestoreValue[] } }
  | { timestampValue: string }
  | { nullValue: null };

function toFirestoreValue(value: unknown): FirestoreValue {
  if (value === null || value === undefined) {
    return { nullValue: null };
  }

  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map((entry) => toFirestoreValue(entry)) } };
  }

  switch (typeof value) {
    case "string":
      return { stringValue: value };
    case "number":
      return Number.isInteger(value)
        ? { integerValue: value.toString() }
        : { doubleValue: value };
    case "boolean":
      return { booleanValue: value };
    case "object": {
      const fields: Record<string, FirestoreValue> = {};
      Object.entries(value as Record<string, unknown>).forEach(([key, entry]) => {
        fields[key] = toFirestoreValue(entry);
      });
      return { mapValue: { fields } };
    }
    default:
      return { stringValue: String(value) };
  }
}

function toFirestoreFields(data: Record<string, unknown>) {
  const fields: Record<string, FirestoreValue> = {};
  Object.entries(data).forEach(([key, value]) => {
    fields[key] = toFirestoreValue(value);
  });
  return fields;
}

export async function saveAccountDocument(docId: string, data: Record<string, unknown>) {
  const { projectId } = getFirebaseConfig();
  const token = await getAccessToken();
  const now = new Date().toISOString();

  const fields = toFirestoreFields({
    ...data,
    createdAt: data.createdAt ?? now,
    updatedAt: now,
  });

  const res = await fetch(`${firestoreEndpoint}/projects/${projectId}/databases/(default)/documents:commit`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      writes: [
        {
          update: {
            name: `projects/${projectId}/databases/(default)/documents/accounts/${docId}`,
            fields,
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to save Firestore document: ${errorText}`);
  }
}
