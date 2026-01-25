"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import MotivationPdf from "./pdf";

const PRICE_GHS = 60;

export const dynamic = "force-dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false },
);

type PathType = "Ausbildung" | "Study" | "Work";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  city: string;

  path: PathType;
  targetProgram: string;
  germanLevel: string;

  whyGermany: string;
  whyThisPath: string;
  experience: string;
  strengths: string;
  timeline: string;
};

export default function MotivationBuilderPage() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const [paid, setPaid] = useState(false);
  const [checking, setChecking] = useState(false);
  const [paying, setPaying] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState<FormData>({
    fullName: "Felix Asadu",
    email: "yourmail@example.com",
    phone: "+233 XXX XXX XXX",
    nationality: "Ghanaian",
    city: "Accra",

    path: "Ausbildung",
    targetProgram: "Nursing / Care Assistant",
    germanLevel: "A2/B1",

    whyGermany:
      "Germany offers structured training, career growth, and a strong professional environment.",
    whyThisPath:
      "I chose this path because I want practical skills, stable work, and a recognized qualification.",
    experience:
      "I have experience teaching and supporting learners, and I am disciplined in learning new skills.",
    strengths:
      "Hard-working, reliable, fast learner, good communication, respectful, team player.",
    timeline:
      "Ready within 6–12 months after completing required documents and German level.",
  });

  const letterText = useMemo(() => generateLetter(form), [form]);

  // ✅ Verify Paystack after redirect
  useEffect(() => {
    const verify = async () => {
      if (!reference) return;

      setChecking(true);
      setMessage("Verifying payment…");

      const res = await fetch(`/api/paystack/verify?reference=${reference}`);
      const json = await res.json();

      if (json?.ok && json?.paid) {
        setPaid(true);
        setMessage("✅ Payment verified! PDF download unlocked.");
      } else {
        setPaid(false);
        setMessage("❌ Payment not verified. Please try again.");
      }

      setChecking(false);
    };

    verify();
  }, [reference]);

  async function payNow() {
    if (!form.email.includes("@")) {
      setMessage("⚠️ Please enter a valid email before paying.");
      return;
    }

    setPaying(true);
    setMessage("Redirecting to Paystack…");

    const amountPesewas = PRICE_GHS * 100;

    const res = await fetch("/api/paystack/initialize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, amountPesewas }),
    });

    const json = await res.json();

    if (!json?.ok) {
      setMessage("❌ Paystack init failed. Check your secret key / internet.");
      setPaying(false);
      return;
    }

    window.location.href = json.authorization_url;
  }

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  const safeFilename = useMemo(() => {
    const base = form.fullName?.trim() || "Motivation_Letter";
    return base.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  }, [form.fullName]);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Motivation Letter Builder</h1>
        <p className="text-gray-600">
          Fill your story → Pay with Paystack → Download PDF.
        </p>
      </header>

      {!!message && (
        <div className="rounded-2xl border bg-gray-50 p-4 text-sm">
          {message}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* FORM */}
        <section className="rounded-3xl border p-6 space-y-5">
          <h2 className="text-lg font-bold">Your Details</h2>

          <Input label="Full Name" value={form.fullName} onChange={(v) => update("fullName", v)} />
          <Input label="Email (required for Paystack)" value={form.email} onChange={(v) => update("email", v)} />
          <Input label="Phone" value={form.phone} onChange={(v) => update("phone", v)} />
          <Input label="Nationality" value={form.nationality} onChange={(v) => update("nationality", v)} />
          <Input label="City" value={form.city} onChange={(v) => update("city", v)} />

          <div className="grid gap-3 md:grid-cols-2">
            <Select
              label="Path"
              value={form.path}
              onChange={(v) => update("path", v as PathType)}
              options={["Ausbildung", "Study", "Work"]}
            />
            <Input label="German Level" value={form.germanLevel} onChange={(v) => update("germanLevel", v)} />
          </div>

          <Input
            label="Target program / job"
            value={form.targetProgram}
            onChange={(v) => update("targetProgram", v)}
          />

          <Textarea label="Why Germany?" value={form.whyGermany} onChange={(v) => update("whyGermany", v)} />
          <Textarea label="Why this path?" value={form.whyThisPath} onChange={(v) => update("whyThisPath", v)} />
          <Textarea label="Your experience" value={form.experience} onChange={(v) => update("experience", v)} />
          <Textarea label="Your strengths" value={form.strengths} onChange={(v) => update("strengths", v)} />
          <Textarea label="Timeline" value={form.timeline} onChange={(v) => update("timeline", v)} />

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
              <PDFDownloadLink
                document={<MotivationPdf fullName={form.fullName} letter={letterText} />}
                fileName={`${safeFilename}_motivation_letter.pdf`}
                className="mt-4 block w-full rounded-xl bg-white px-4 py-2 text-center font-semibold text-black hover:opacity-90"
              >
                Download PDF ✅
              </PDFDownloadLink>
            )}
          </div>
        </section>

        {/* PREVIEW */}
        <section className="rounded-3xl border p-6 space-y-4">
          <h2 className="text-lg font-bold">Preview</h2>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-800">
{letterText}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}

function generateLetter(f: FormData) {
  const today = new Date().toLocaleDateString();
  return `${today}

Subject: Application for ${f.path} — ${f.targetProgram}

Dear Sir/Madam,

My name is ${f.fullName}, a ${f.nationality} based in ${f.city}. I am writing to express my strong interest in pursuing ${f.path} in Germany, specifically in the area of ${f.targetProgram}. I am currently improving my German level (${f.germanLevel}) and preparing all required documents.

Why Germany:
${f.whyGermany}

Why this pathway:
${f.whyThisPath}

Experience:
${f.experience}

Strengths:
${f.strengths}

Timeline:
${f.timeline}

Thank you for your time and consideration.

Yours faithfully,
${f.fullName}
Phone: ${f.phone}
Email: ${f.email}
`;
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-3 py-2" />
    </div>
  );
}

function Textarea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-3 py-2" rows={4} />
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-3 py-2 bg-white">
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
