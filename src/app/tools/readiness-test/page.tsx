"use client";

import { useMemo, useState } from "react";

type Pathway = "Ausbildung" | "Study" | "Work";

const QUESTIONS = [
  "Do you already have a valid passport (or can you obtain one within 1 month)?",
  "Have you completed at least SHS/WASSCE or equivalent?",
  "Do you have proof of funds or a sponsor for visa requirements?",
  "Are you prepared to study German at least 6–10 hours per week?",
  "Do you have a clear career field in mind (e.g., healthcare, tech, business)?",
  "Have you gathered your academic certificates and transcripts?",
  "Do you have a professional CV ready in German-style format?",
  "Can you obtain recommendation or reference letters if needed?",
  "Are you comfortable with interviews conducted in German or English?",
  "Do you understand the visa process for your pathway?",
  "Can you commit to a 6–12 month preparation timeline?",
  "Are you willing to relocate and adapt to German work culture?",
];

export default function Readiness() {
  const [pathway, setPathway] = useState<Pathway>("Ausbildung");
  const [answers, setAnswers] = useState<boolean[]>(Array(QUESTIONS.length).fill(false));

  const score = useMemo(() => answers.filter(Boolean).length, [answers]);
  const readiness = useMemo(() => {
    if (score >= 10) return "Ready to apply";
    if (score >= 7) return "Nearly ready";
    if (score >= 4) return "Needs preparation";
    return "Early stage";
  }, [score]);

  const recommendation = useMemo(() => {
    if (pathway === "Study") {
      return "Focus on B2 German, academic documents, and university shortlist.";
    }
    if (pathway === "Work") {
      return "Prioritize recognition of qualifications and employer outreach.";
    }
    return "Strengthen German B1 and prepare for Ausbildung interviews.";
  }, [pathway]);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Readiness Test</h1>
        <p className="text-gray-600">
          Answer 12 quick questions to see how prepared you are for your chosen pathway.
        </p>
      </header>

      <section className="rounded-3xl border p-6 space-y-4">
        <div>
          <label className="text-sm font-semibold">Chosen Pathway</label>
          <select
            value={pathway}
            onChange={(e) => setPathway(e.target.value as Pathway)}
            className="mt-2 w-full rounded-xl border px-3 py-2"
          >
            <option>Ausbildung</option>
            <option>Study</option>
            <option>Work</option>
          </select>
        </div>

        <div className="space-y-3">
          {QUESTIONS.map((question, index) => (
            <label key={question} className="flex items-start gap-3 rounded-2xl border p-4 text-sm">
              <input
                type="checkbox"
                checked={answers[index]}
                onChange={(e) =>
                  setAnswers((prev) => {
                    const next = [...prev];
                    next[index] = e.target.checked;
                    return next;
                  })
                }
                className="mt-1 h-4 w-4"
              />
              <span>{question}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border p-6 space-y-2">
          <p className="text-sm text-gray-500">YOUR SCORE</p>
          <p className="text-3xl font-bold">
            {score} / {QUESTIONS.length}
          </p>
          <p className="text-gray-700">{readiness}</p>
          <p className="text-sm text-gray-600">
            Recommendation: <span className="font-semibold">{recommendation}</span>
          </p>
        </div>
        <div className="rounded-3xl border bg-gray-50 p-6 space-y-2 text-sm text-gray-700">
          <p className="font-semibold text-gray-900">Next steps</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Share your score with a counselor for a personalized plan.</li>
            <li>Use the Pathway Planner to build your timeline and document list.</li>
            <li>Return once you achieve at least 9/12 for faster approvals.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
