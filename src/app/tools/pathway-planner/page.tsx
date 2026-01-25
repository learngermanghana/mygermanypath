"use client";

import { useMemo, useState } from "react";

type Goal = "Ausbildung" | "Study" | "Work";

export default function Planner() {
  const [age, setAge] = useState<number>(22);
  const [education, setEducation] = useState<string>("SHS / WASSCE");
  const [germanLevel, setGermanLevel] = useState<string>("A1");
  const [goal, setGoal] = useState<Goal>("Ausbildung");

  const result = useMemo(() => {
    let recommended = goal;
    let minGerman = "B1";

    if (goal === "Study") minGerman = "B2";
    if (goal === "Work") minGerman = "B1";

    const notes: string[] = [];
    if (age < 18) notes.push("Age is low â€” you may need extra preparation time.");
    if (germanLevel === "A0") notes.push("Start German immediately (A1 is your first goal).");

    return { recommended, minGerman, notes };
  }, [age, education, germanLevel, goal]);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Germany Pathway Planner</h1>
        <p className="mt-2 text-gray-600">
          Get clarity in minutes. Free basic result â†’ Paid detailed plan.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border p-6 space-y-4">
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
              onChange={(e) => setEducation(e.target.value)}
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
              onChange={(e) => setGermanLevel(e.target.value)}
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
          <p className="text-sm text-gray-500">FREE BASIC RESULT</p>
          <h2 className="text-xl font-bold">Recommended Path: {result.recommended}</h2>
          <p className="text-gray-700">
            Minimum German Level you should target:{" "}
            <span className="font-bold">{result.minGerman}</span>
          </p>

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
