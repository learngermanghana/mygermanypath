import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;
    const amountPesewas = body?.amountPesewas; // GHS * 100

    if (!email || !amountPesewas) {
      return NextResponse.json(
        { ok: false, message: "Missing email or amountPesewas" },
        { status: 400 }
      );
    }

    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { ok: false, message: "PAYSTACK_SECRET_KEY not set" },
        { status: 500 }
      );
    }

    // Use current site origin so it works on localhost:3000 or 3001 automatically
    const origin = req.headers.get("origin") || "http://localhost:3000";
    const callback_url = `${origin}/tools/cv-builder`;

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: Number(amountPesewas),
        currency: "GHS",
        callback_url,
        metadata: {
          product: "cv_builder_pdf_download",
        },
      }),
    });

    const data = await res.json();

    if (!data?.status) {
      return NextResponse.json(
        { ok: false, message: data?.message || "Paystack init failed", raw: data },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
