"use client";

import { useMemo, useState } from "react";

type Goal = "Ausbildung" | "Study" | "Work";
type CareerGoal =
  | "Healthcare"
  | "Engineering & Tech"
  | "Business & Administration"
  | "Hospitality & Logistics"
  | "Education & Social";
type EducationLevel = "JHS / BECE" | "SHS / WASSCE" | "Diploma" | "Bachelor" | "Masters";
type GermanLevel = "A0" | "A1" | "A2" | "B1" | "B2" | "C1";

type Plan = {
  route: Goal;
  title: string;
  summary: string;
  minGerman: GermanLevel;
  timeline: string[];
  steps: string[];
  documents: string[];
  notes: string[];
};

export default function Planner() {
  const [age, setAge] = useState<number>(22);
  const [education, setEducation] = useState<EducationLevel>("SHS / WASSCE");
  const [germanLevel, setGermanLevel] = useState<GermanLevel>("A1");
  const [goal, setGoal] = useState<Goal>("Ausbildung");
  const [careerGoal, setCareerGoal] = useState<CareerGoal>("Healthcare");

  const result = useMemo<Plan>(() => {
    const notes: string[] = [];
    let minGerman: GermanLevel = "B1";
    let route: Goal = goal;
    let title = "";
    let summary = "";
    let steps: string[] = [];
    let documents: string[] = [];
    let timeline: string[] = [];

    if (goal === "Study") minGerman = "B2";
    if (goal === "Work") minGerman = "B1";
    if (goal === "Ausbildung") minGerman = "B1";

    if (age < 18) {
      notes.push("You are under 18. Plan extra preparation time and guardian consent for applications.");
    }
    if (germanLevel === "A0") {
      notes.push("Start German immediately. A1 is the first milestone before applying.");
    }

    if (goal === "Study") {
      route = education === "JHS / BECE" ? "Ausbildung" : "Study";
      minGerman = route === "Study" ? "B2" : "B1";
      title =
        route === "Study"
          ? "Study Route (University or Studienkolleg)"
          : "Ausbildung Route (early education profile)";
      summary =
        route === "Study"
          ? "Best for applicants with SHS, diploma, or higher who want a degree in Germany."
          : "Current education level is below typical university entry; focus on Ausbildung first.";
      steps = [
        "Confirm if your certificate qualifies for direct university entry or requires Studienkolleg.",
        "Achieve German level B2 (or higher for competitive courses).",
        "Prepare academic CV, motivation letter, and translated certificates.",
        "Apply via uni-assist or directly to universities.",
        "Secure admission, then apply for a student visa and blocked account.",
      ];
      documents = [
        "Passport",
        "Academic transcripts & certificates",
        "German language certificate (B2/C1)",
        "Motivation letter + CV",
        "Proof of funds (blocked account)",
      ];
      timeline = ["0–6 months: German studies + document preparation", "6–9 months: Applications", "9–12 months: Visa + travel"];
    }

    if (goal === "Ausbildung") {
      route = "Ausbildung";
      minGerman = "B1";
      title = "Ausbildung Route (Vocational Training)";
      summary = "Great for hands-on careers with paid training and a clear pathway to work in Germany.";
      steps = [
        "Choose a vocational track aligned to your career goal.",
        "Reach at least German level B1 (B2 preferred for healthcare roles).",
        "Build a German-style CV and motivation letter.",
        "Apply to Ausbildung employers or agencies.",
        "Secure training contract and apply for visa.",
      ];
      documents = [
        "Passport",
        "Education certificates (SHS/WASSCE or higher)",
        "German language certificate (B1/B2)",
        "CV + motivation letter",
        "Training contract (Ausbildungsvertrag)",
      ];
      timeline = ["0–4 months: German B1 + documents", "4–8 months: Applications + interviews", "8–12 months: Contract + visa"];
    }

    if (goal === "Work") {
      route = education === "Bachelor" || education === "Masters" ? "Work" : "Ausbildung";
      minGerman = route === "Work" ? "B1" : "B1";
      title =
        route === "Work"
          ? "Skilled Work Route (Job-Seeker or Employer-Sponsored)"
          : "Ausbildung Route (build credentials first)";
      summary =
        route === "Work"
          ? "Best for degree holders with experience who want direct employment."
          : "Current education level aligns better with vocational training first.";
      steps = [
        "Identify roles in shortage occupations and verify recognition requirements.",
        "Reach German level B1 (B2 preferred for client-facing roles).",
        "Prepare a German CV, reference letters, and certifications.",
        "Apply to employers and secure an offer.",
        "Apply for work visa with contract and proof of qualifications.",
      ];
      documents = [
        "Passport",
        "Degree certificate & transcripts",
        "Proof of work experience",
        "German language certificate (B1/B2)",
        "Job offer / contract",
      ];
      timeline = ["0–3 months: Recognition + German prep", "3–6 months: Applications", "6–9 months: Visa + relocation"];
    }

    if (careerGoal === "Healthcare") {
      notes.push("Healthcare roles often need B2 German and professional recognition.");
    }
    if (careerGoal === "Engineering & Tech" && goal === "Work") {
      notes.push("English-friendly roles exist, but German B1 improves success rate.");
    }

    return { route, title, summary, minGerman, steps, documents, timeline, notes };
  }, [age, careerGoal, education, germanLevel, goal]);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Germany Pathway Planner</h1>
        <p className="mt-2 text-gray-600">
          Get clarity in minutes. Free basic result → Paid detailed plan.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border p-6 space-y-4">
          <div>
            <label className="text-sm font-semibold">Career Goal</label>
            <select
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value as CareerGoal)}
              className="mt-2 w-full rounded-xl border px-3 py-2"
            >
              <option>Healthcare</option>
              <option>Engineering & Tech</option>
              <option>Business & Administration</option>
              <option>Hospitality & Logistics</option>
              <option>Education & Social</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border px-3 py-2"
              min={14}
              max={60}
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Education</label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value as EducationLevel)}
              className="mt-2 w-full rounded-xl border px-3 py-2"
            >
              <option>JHS / BECE</option>
              <option>SHS / WASSCE</option>
              <option>Diploma</option>
              <option>Bachelor</option>
              <option>Masters</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">German Level</label>
            <select
              value={germanLevel}
              onChange={(e) => setGermanLevel(e.target.value as GermanLevel)}
              className="mt-2 w-full rounded-xl border px-3 py-2"
            >
              <option>A0</option>
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value as Goal)}
              className="mt-2 w-full rounded-xl border px-3 py-2"
            >
              <option>Ausbildung</option>
              <option>Study</option>
              <option>Work</option>
            </select>
          </div>
        </section>

        <section className="rounded-3xl border p-6 space-y-4">
          <p className="text-sm text-gray-500">PERSONALIZED RESULT</p>
          <h2 className="text-xl font-bold">{result.title}</h2>
          <p className="text-gray-700">{result.summary}</p>
          <p className="text-gray-700">
            Minimum German Level you should target:{" "}
            <span className="font-bold">{result.minGerman}</span>
          </p>

          <div className="rounded-2xl border bg-white p-4">
            <p className="text-sm font-semibold">Recommended Steps</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-gray-700">
              {result.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border bg-white p-4">
            <p className="text-sm font-semibold">Required Documents</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
              {result.documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-4">
            <p className="text-sm font-semibold">Timeline (Typical)</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
              {result.timeline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {result.notes.length > 0 && (
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-sm font-semibold">Notes</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                {result.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-2xl bg-black p-5 text-white">
            <p className="font-semibold">Unlock the detailed plan (PAID)</p>
            <p className="mt-1 text-sm text-white/80">
              Step-by-step checklist, timeline, and document plan for your profile.
            </p>
            <button
              className="mt-4 w-full rounded-xl bg-white px-4 py-2 font-semibold text-black hover:opacity-90"
              onClick={() => alert("Payment integration will be added next (Mobile Money/Card).")}
            >
              Get Detailed Plan
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
