import { NextResponse } from "next/server";

const OPENAI_URL = "https://api.openai.com/v1/responses";

type MotivationPayload = {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  city: string;
  path: string;
  targetProgram: string;
  germanLevel: string;
  whyGermany: string;
  whyThisPath: string;
  experience: string;
  strengths: string;
  timeline: string;
};

function buildPrompt(payload: MotivationPayload) {
  return `You are an expert study-abroad admissions advisor. Write a professional motivation letter for Germany.

Details:
- Full name: ${payload.fullName}
- Nationality: ${payload.nationality}
- City: ${payload.city}
- Email: ${payload.email}
- Phone: ${payload.phone}
- Path: ${payload.path}
- Target program/job: ${payload.targetProgram}
- German level: ${payload.germanLevel}
- Why Germany: ${payload.whyGermany}
- Why this path: ${payload.whyThisPath}
- Experience: ${payload.experience}
- Strengths: ${payload.strengths}
- Timeline: ${payload.timeline}

Requirements:
- 4 to 6 short paragraphs.
- Use a formal, respectful tone.
- Include a clear opening, motivation, experience/strengths, timeline, and polite closing.
- Do not include placeholders or brackets.
- Output plain text only.`;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Missing OPENAI_API_KEY on server." },
      { status: 500 },
    );
  }

  const payload = (await request.json()) as MotivationPayload;
  const prompt = buildPrompt(payload);

  const openAiResponse = await fetch(OPENAI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      input: prompt,
      temperature: 0.7,
      max_output_tokens: 700,
    }),
  });

  if (!openAiResponse.ok) {
    const errorText = await openAiResponse.text();
    return NextResponse.json(
      { ok: false, error: errorText || "OpenAI request failed." },
      { status: 500 },
    );
  }

  const data = await openAiResponse.json();
  const outputText = data?.output?.[0]?.content?.[0]?.text ?? "";

  if (!outputText) {
    return NextResponse.json(
      { ok: false, error: "OpenAI did not return any text." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, letter: outputText.trim() });
}
