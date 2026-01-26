import { NextResponse } from "next/server";
import { saveAccountDocument } from "@/lib/firebaseRest";

function sanitizeDocId(value: string) {
  return value.toLowerCase().trim().replace(/\//g, "_");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required." },
        { status: 400 },
      );
    }

    const docId = sanitizeDocId(email);
    const payload = {
      email,
      fullName: typeof body?.fullName === "string" ? body.fullName.trim() : "",
      phone: typeof body?.phone === "string" ? body.phone.trim() : "",
      nationality: typeof body?.nationality === "string" ? body.nationality.trim() : "",
      city: typeof body?.city === "string" ? body.city.trim() : "",
      source: typeof body?.source === "string" ? body.source.trim() : "",
      formData: typeof body?.formData === "object" ? body.formData : {},
    };

    await saveAccountDocument(docId, payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
