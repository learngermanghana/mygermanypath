"use client";

import { useEffect, useMemo, useState } from "react";
import nextDynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import ChecklistPdf from "./pdf";

const PRICE_GHS = 40;

export const dynamic = "force-dynamic";

const PDFDownloadLink = nextDynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false },
);

type PathType = "Ausbildung" | "Study" | "Work";

type FormData = {
  fullName: string;
  email: string;
  phone: string;

  path: PathType;
  age: string;
  education: string;
  germanLevel: string;

  timelineMonths: string;
};

type ChecklistData = {
  title: string;
  items: string[];
  timeline: string;
  mistakes: string[];
  optionsTitle: string | null;
  optionsNote: string | null;
  options: string[];
};

export default function DocumentChecklistPage() {
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

    path: "Ausbildung",
    age: "24",
    education: "WASSCE / SHS",
    germanLevel: "A2/B1",
    timelineMonths: "6",
  });

  // ✅ checklist output
  const checklist = useMemo(() => buildChecklist(form), [form]);

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
    const base = form.fullName?.trim() || "Checklist";
    return base.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  }, [form.fullName]);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Document Checklist Generator</h1>
        <p className="text-gray-600">
          Choose your Germany path → get a full checklist + timeline → Paystack → download PDF.
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

          <div className="grid gap-3 md:grid-cols-2">
            <Select
              label="Path"
              value={form.path}
              onChange={(v) => update("path", v as PathType)}
              options={["Ausbildung", "Study", "Work"]}
            />
            <Input label="German Level" value={form.germanLevel} onChange={(v) => update("germanLevel", v)} />
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <Input label="Age" value={form.age} onChange={(v) => update("age", v)} />
            <Input label="Education" value={form.education} onChange={(v) => update("education", v)} />
          </div>

          <Input
            label="Timeline (months to prepare)"
            value={form.timelineMonths}
            onChange={(v) => update("timelineMonths", v)}
          />

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
                document={<ChecklistPdf fullName={form.fullName} data={checklist} />}
                fileName={`${safeFilename}_checklist.pdf`}
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

          <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-5">
            <Block title="Your Path">{checklist.title}</Block>

            <Block title="Checklist">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {checklist.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Block>

            {checklist.options.length > 0 && checklist.optionsTitle && (
              <Block title={checklist.optionsTitle}>
                {checklist.optionsNote && (
                  <p className="text-sm text-gray-600">{checklist.optionsNote}</p>
                )}
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {checklist.options.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Block>
            )}

            <Block title="Timeline">
              <p className="text-sm text-gray-700">{checklist.timeline}</p>
            </Block>

            <Block title="Common Mistakes">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {checklist.mistakes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Block>
          </div>
        </section>
      </div>
    </div>
  );
}

function buildChecklist(form: FormData): ChecklistData {
  const title = `${form.path} — Document Checklist`;

  const base = [
    "Valid passport",
    "Passport photo (biometric)",
    "Birth certificate (if required)",
    "Police clearance (when needed)",
    "CV (Germany format)",
    "Motivation letter",
    "German certificate (A2/B1/B2 depending on path)",
    "Proof of funds (if required for your path)",
  ];

  const ausbildung = [
    "WASSCE certificate + transcripts",
    "Recognition/translation (if needed)",
    "Training contract / offer letter",
    "Employer documents (if requested by embassy)",
  ];

  const study = [
    "WASSCE + transcripts",
    "University admission letter OR Studienkolleg acceptance",
    "APS (if applicable to your country)",
    "Blocked account / sponsor proof (as required)",
  ];

  const work = [
    "Work experience proof (letters/contracts)",
    "Certificates and references",
    "Job offer / contract",
    "Recognition for profession (if needed)",
  ];

  const pathDocs =
    form.path === "Ausbildung" ? ausbildung : form.path === "Study" ? study : work;

  const items = Array.from(new Set([...base, ...pathDocs]));

  const timeline = `Recommended preparation timeline: ${form.timelineMonths} month(s). Focus first on German level (${form.germanLevel}), then documents, then applications and interviews.`;

  const mistakes = [
    "Applying without required German level",
    "Fake documents or inconsistent dates",
    "Bad CV format (not Germany style)",
    "Wrong path for your age/education",
    "No clear plan for money + timeline",
  ];

  const ausbildungOptions = [
    "Healthcare & Social Care: Pflegefachmann / Pflegefachfrau (Nursing)",
    "Healthcare & Social Care: Medizinische/r Fachangestellte/r (MFA) (Medical assistant)",
    "Healthcare & Social Care: Zahnmedizinische/r Fachangestellte/r (ZFA) (Dental assistant)",
    "Healthcare & Social Care: Pharmazeutisch-kaufmännische/r Angestellte/r (PKA) (Pharmacy assistant)",
    "Healthcare & Social Care: Notfallsanitäter/in (Paramedic)",
    "Healthcare & Social Care: Erzieher/in (Educator / kindergarten teacher)",
    "Healthcare & Social Care: Heilerziehungspfleger/in (Care for people with disabilities)",
    "IT & Technology: Fachinformatiker/in – Anwendungsentwicklung (Software development)",
    "IT & Technology: Fachinformatiker/in – Systemintegration (IT systems & networks)",
    "IT & Technology: Fachinformatiker/in – Daten- und Prozessanalyse (Data/process analysis)",
    "IT & Technology: IT-System-Elektroniker/in (IT electronics technician)",
    "IT & Technology: Elektroniker/in für Betriebstechnik (Industrial electrician)",
    "IT & Technology: Mechatroniker/in (Mechatronics technician)",
    "Engineering & Industry: Industriemechaniker/in (Industrial mechanic)",
    "Engineering & Industry: Zerspanungsmechaniker/in (CNC machining)",
    "Engineering & Industry: Konstruktionsmechaniker/in (Construction mechanic)",
    "Engineering & Industry: Werkzeugmechaniker/in (Tool mechanic)",
    "Engineering & Industry: Verfahrensmechaniker/in (Process mechanic)",
    "Engineering & Industry: Technische/r Produktdesigner/in (Technical product designer)",
    "Automotive & Transport: Kfz-Mechatroniker/in (Car mechanic & electronics)",
    "Automotive & Transport: Berufskraftfahrer/in (Truck/Bus driver)",
    "Automotive & Transport: Fachkraft für Lagerlogistik (Warehouse logistics)",
    "Automotive & Transport: Speditionskaufmann/-frau (Freight forwarding clerk)",
    "Automotive & Transport: Eisenbahner/in im Betriebsdienst (Railway operations)",
    "Construction & Skilled Trades: Anlagenmechaniker/in SHK (Plumber/heating/air systems)",
    "Construction & Skilled Trades: Elektroniker/in für Energie- und Gebäudetechnik (Building electrical)",
    "Construction & Skilled Trades: Maler/in & Lackierer/in (Painter & varnisher)",
    "Construction & Skilled Trades: Tischler/in (Carpenter)",
    "Construction & Skilled Trades: Maurer/in (Bricklayer)",
    "Construction & Skilled Trades: Dachdecker/in (Roofer)",
    "Construction & Skilled Trades: Metallbauer/in (Metal construction)",
    "Construction & Skilled Trades: Fliesenleger/in (Tiler)",
    "Food & Hospitality: Koch/Köchin (Chef)",
    "Food & Hospitality: Hotelfachmann/-frau (Hotel specialist)",
    "Food & Hospitality: Restaurantfachmann/-frau (Restaurant specialist)",
    "Food & Hospitality: Bäcker/in (Baker)",
    "Food & Hospitality: Konditor/in (Pastry chef)",
    "Food & Hospitality: Fleischer/in (Butcher)",
    "Business, Office & Finance: Kaufmann/-frau für Büromanagement (Office management)",
    "Business, Office & Finance: Industriekaufmann/-frau (Industrial management)",
    "Business, Office & Finance: Einzelhandelskaufmann/-frau (Retail sales)",
    "Business, Office & Finance: Verkäufer/in (Sales assistant)",
    "Business, Office & Finance: Bankkaufmann/-frau (Bank clerk)",
    "Business, Office & Finance: Kaufmann/-frau im E-Commerce (E-commerce management)",
    "Business, Office & Finance: Versicherungskaufmann/-frau (Insurance clerk)",
    "Public Service & Safety: Polizei (Ausbildung / duales Studium varies by state)",
    "Public Service & Safety: Feuerwehr (varies by city/state)",
    "Public Service & Safety: Fachangestellte/r für Bäderbetriebe (Lifeguard/pool operations)",
    "Public Service & Safety: Justizfachangestellte/r (Court clerk)",
    "Environment & Nature: Gärtner/in (Gardener)",
    "Environment & Nature: Forstwirt/in (Forestry worker)",
    "Environment & Nature: Landwirt/in (Farmer)",
    "Environment & Nature: Tierpfleger/in (Animal caretaker)",
    "Environment & Nature: Fachkraft für Kreislauf- und Abfallwirtschaft (Waste & recycling)",
    "Media & Design: Mediengestalter/in Digital und Print (Media designer)",
    "Media & Design: Fotograf/in (Photographer)",
    "Media & Design: Gestalter/in für visuelles Marketing (Visual marketing designer)",
    "Media & Design: Veranstaltungskaufmann/-frau (Event management)",
    "High demand: Nursing (Pflege)",
    "High demand: Warehouse logistics (Lagerlogistik)",
    "High demand: Restaurant/Hotel (Koch, Hotelfach)",
    "High demand: Construction trades (SHK, Elektroniker, Dachdecker)",
    "High demand: Truck driver (Berufskraftfahrer)",
    "High demand: IT (Fachinformatiker)",
  ];

  const studyOptions = [
    "IT & Computer / Tech: Computer Science (Informatik)",
    "IT & Computer / Tech: Software Engineering",
    "IT & Computer / Tech: Data Science / Big Data",
    "IT & Computer / Tech: Artificial Intelligence (AI)",
    "IT & Computer / Tech: Cybersecurity / IT Security",
    "IT & Computer / Tech: Information Systems (Wirtschaftsinformatik)",
    "IT & Computer / Tech: Computer Engineering",
    "IT & Computer / Tech: Robotics",
    "IT & Computer / Tech: Cloud Computing",
    "IT & Computer / Tech: Game Development",
    "Engineering: Mechanical Engineering",
    "Engineering: Electrical Engineering",
    "Engineering: Civil Engineering",
    "Engineering: Automotive Engineering",
    "Engineering: Mechatronics",
    "Engineering: Industrial Engineering",
    "Engineering: Aerospace Engineering",
    "Engineering: Environmental Engineering",
    "Engineering: Chemical Engineering",
    "Engineering: Renewable Energy Engineering",
    "Science: Mathematics",
    "Science: Physics",
    "Science: Chemistry",
    "Science: Biology",
    "Science: Biotechnology",
    "Science: Microbiology",
    "Science: Geology / Earth Sciences",
    "Science: Materials Science",
    "Science: Environmental Science",
    "Health & Medical: Medicine (Humanmedizin) (competitive, German required)",
    "Health & Medical: Dentistry (Zahnmedizin) (competitive, German required)",
    "Health & Medical: Pharmacy (Pharmazie) (competitive, German required)",
    "Health & Medical: Public Health",
    "Health & Medical: Nursing Science",
    "Health & Medical: Biomedical Science",
    "Health & Medical: Medical Engineering (Medizintechnik)",
    "Business & Management: Business Administration (BWL)",
    "Business & Management: International Business",
    "Business & Management: Economics (VWL)",
    "Business & Management: Finance & Banking",
    "Business & Management: Accounting & Taxation",
    "Business & Management: Marketing",
    "Business & Management: Human Resource Management",
    "Business & Management: Entrepreneurship",
    "Business & Management: Supply Chain / Logistics Management",
    "Business & Management: Business Analytics",
    "Logistics & Transport: Logistics & Supply Chain Management",
    "Logistics & Transport: Transportation Systems",
    "Logistics & Transport: International Shipping / Freight Management",
    "Logistics & Transport: Industrial Logistics",
    "Law & Politics: Law (Rechtswissenschaft) (mostly German)",
    "Law & Politics: International Law (some English options)",
    "Law & Politics: Political Science",
    "Law & Politics: International Relations",
    "Law & Politics: Public Administration",
    "Education & Languages: Education / Teaching (Lehramt)",
    "Education & Languages: German Language & Literature (Germanistik)",
    "Education & Languages: English Studies",
    "Education & Languages: Translation & Interpretation",
    "Education & Languages: Linguistics",
    "Education & Languages: Special Education",
    "Creative / Media: Media Studies",
    "Creative / Media: Communication Studies",
    "Creative / Media: Journalism",
    "Creative / Media: Film & Television Studies",
    "Creative / Media: Graphic Design / Visual Communication",
    "Creative / Media: Animation / Multimedia Design",
    "Creative / Media: Music / Performing Arts (audition required)",
    "Architecture & Design: Architecture",
    "Architecture & Design: Urban Planning",
    "Architecture & Design: Interior Design",
    "Architecture & Design: Landscape Architecture",
    "Social Sciences & Humanities: Sociology",
    "Social Sciences & Humanities: Psychology (very competitive)",
    "Social Sciences & Humanities: Social Work",
    "Social Sciences & Humanities: History",
    "Social Sciences & Humanities: Philosophy",
    "Social Sciences & Humanities: Anthropology",
    "Social Sciences & Humanities: Geography",
    "Agriculture & Environment: Agriculture",
    "Agriculture & Environment: Forestry",
    "Agriculture & Environment: Food Science",
    "Agriculture & Environment: Environmental Management",
    "Agriculture & Environment: Sustainable Development",
    "Agriculture & Environment: Renewable Energy Studies",
    "Popular English-taught: Computer Science / Data Science / AI",
    "Popular English-taught: Engineering (Mechanical, Electrical, Mechatronics)",
    "Popular English-taught: International Business / Economics",
    "Popular English-taught: Renewable Energy / Sustainability",
    "Popular English-taught: Logistics & Supply Chain",
    "Popular English-taught: Public Health (some programs)",
  ];

  const options =
    form.path === "Ausbildung"
      ? ausbildungOptions
      : form.path === "Study"
        ? studyOptions
        : [];

  const optionsTitle =
    form.path === "Ausbildung"
      ? "Possible Ausbildung Options (for appointment booking)"
      : form.path === "Study"
        ? "Possible Study Courses (for appointment booking)"
        : null;

  const optionsNote =
    options.length > 0
      ? "No school or company website access is needed. Pick one option to mention when booking your appointment."
      : null;

  return { title, items, timeline, mistakes, optionsTitle, optionsNote, options };
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-3 py-2" />
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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-bold">{title}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}
