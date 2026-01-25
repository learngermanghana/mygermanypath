"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CVPdf from "./pdf";

type Education = { school: string; program: string; period: string };
type Experience = { company: string; role: string; period: string; bullets: string[] };

type CVData = {
  fullName: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
  skills: string[];
  languages: string[];
  education: Education[];
  experience: Experience[];
  certificates: string[];
};

const PRICE_GHS = 50; // 🔥 change your price here

export default function CVBuilderPage() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const [paid, setPaid] = useState(false);
  const [checking, setChecking] = useState(false);
  const [paying, setPaying] = useState(false);
  const [message, setMessage] = useState<string>("");

  const [data, setData] = useState<CVData>({
    fullName: "Felix Asadu",
    title: "German Teacher / Applicant (Germany)",
    location: "Accra, Ghana",
    phone: "+233 XXX XXX XXX",
    email: "yourmail@example.com",
    linkedin: "",
    summary:
      "Motivated and disciplined applicant with strong communication skills and experience in teaching and customer support. Currently preparing for opportunities in Germany and improving German language level.",
    skills: ["Communication", "Teamwork", "Customer Service", "Time Management"],
    languages: ["English", "German (A2/B1)"],
    education: [{ school: "Senior High School", program: "WASSCE", period: "2011" }],
    experience: [
      {
        company: "Learn Language Education Academy",
        role: "German Teacher",
        period: "2020 – Present",
        bullets: [
          "Taught German language classes and guided learners through A1–B1.",
          "Prepared students for exams and created structured lesson plans.",
        ],
      },
    ],
    certificates: ["German Language Certificate (A1/A2/B1)"],
  });

  const safeFilename = useMemo(() => {
    const base = data.fullName?.trim() || "CV";
    return base.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  }, [data.fullName]);

  // ✅ If Paystack redirected back with a reference, verify it
  useEffect(() => {
    const verify = async () => {
      if (!reference) return;

      setChecking(true);
      setMessage("Verifying payment…");

      const res = await fetch(`/api/paystack/verify?reference=${reference}`);
      const json = await res.json();

      if (json?.ok && json?.paid) {
        setPaid(true);
        setMessage("✅ Payment verified! Download is unlocked.");
      } else {
        setPaid(false);
        setMessage("❌ Payment not verified. Please try again.");
      }

      setChecking(false);
    };

    verify();
  }, [reference]);

  async function payNow() {
    if (!data.email?.includes("@")) {
      setMessage("⚠️ Please enter a valid email before paying.");
      return;
    }

    setPaying(true);
    setMessage("Redirecting to Paystack…");

    const amountPesewas = PRICE_GHS * 100; // Paystack uses lowest currency unit (pesewas for GHS)
    const res = await fetch("/api/paystack/initialize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email, amountPesewas }),
    });

    const json = await res.json();

    if (!json?.ok) {
      setMessage("❌ Paystack init failed. Check your secret key / internet.");
      setPaying(false);
      return;
    }

    // Redirect to Paystack authorization URL
    window.location.href = json.authorization_url;
  }

  function update<K extends keyof CVData>(key: K, value: CVData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">CV Builder (Germany Format)</h1>
        <p className="text-gray-600">
          Fill your details → Pay with Paystack → Download PDF.
        </p>
      </header>

      {!!message && (
        <div className="rounded-2xl border bg-gray-50 p-4 text-sm">
          {message}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT: BASIC FORM (short MVP) */}
        <section className="rounded-3xl border p-6 space-y-4">
          <Input label="Full Name" value={data.fullName} onChange={(v) => update("fullName", v)} />
          <Input label="Title (Headline)" value={data.title} onChange={(v) => update("title", v)} />
          <Input label="Location" value={data.location} onChange={(v) => update("location", v)} />
          <Input label="Phone" value={data.phone} onChange={(v) => update("phone", v)} />
          <Input label="Email (required for Paystack)" value={data.email} onChange={(v) => update("email", v)} />
          <Input label="LinkedIn (optional)" value={data.linkedin} onChange={(v) => update("linkedin", v)} />
          <Textarea label="Professional Summary" value={data.summary} onChange={(v) => update("summary", v)} />

          <div className="rounded-2xl bg-black p-5 text-white">
            <p className="font-semibold">Download PDF requires payment</p>
            <p className="mt-1 text-sm text-white/80">Price: GHS {PRICE_GHS}</p>

            {!paid ? (
              <button
                onClick={payNow}
                disabled={paying || checking}
                className="mt-4 w-full rounded-xl bg-white px-4 py-2 font-semibold text-black hover:opacity-90 disabled:opacity-60"
              >
                {paying ? "Redirecting..." : "Pay with Paystack"}
              </button>
            ) : (
              <div className="mt-4">
                <PDFDownloadLink
                  document={<CVPdf data={data} />}
                  fileName={`${safeFilename}_cv.pdf`}
                  className="block w-full rounded-xl bg-white px-4 py-2 text-center font-semibold text-black hover:opacity-90"
                >
                  Download PDF ✅
                </PDFDownloadLink>
              </div>
            )}
          </div>
        </section>

        {/* RIGHT: PREVIEW */}
        <section className="rounded-3xl border p-6 space-y-4">
          <h2 className="text-lg font-bold">Preview</h2>

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <p className="text-xl font-bold">{data.fullName}</p>
            <p className="text-sm text-gray-600">{data.title}</p>
            <p className="mt-2 text-xs text-gray-700">
              {data.location} • {data.phone} • {data.email}
              {data.linkedin ? ` • ${data.linkedin}` : ""}
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold">Summary</p>
              <p className="mt-1 text-sm text-gray-700">{data.summary}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-3 py-2" />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-3 py-2" rows={4} />
    </div>
  );
}
