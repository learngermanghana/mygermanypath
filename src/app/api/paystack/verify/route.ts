import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const reference = url.searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        { ok: false, message: "Missing reference" },
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

    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${secret}`,
        },
      }
    );

    const data = await res.json();

    // Paystack returns data.data.status = "success" when paid
    const paid = data?.data?.status === "success";

    return NextResponse.json({
      ok: true,
      paid,
      status: data?.data?.status || null,
      amount: data?.data?.amount || null,
      currency: data?.data?.currency || null,
      reference,
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
