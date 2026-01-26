import Link from "next/link";

export default function Page() {
  const guidance = [
    {
      title: "Who qualifies",
      points: [
        "If your school certificate is not a direct university entrance qualification in Germany, Studienkolleg is required.",
        "You must apply to a German university first and receive an invitation to the Studienkolleg entrance exam.",
        "Admission is limited and competitive; places are allocated by test score and subject track.",
      ],
    },
    {
      title: "German level needed",
      points: [
        "Most Studienkolleg programs require at least B1, often B2, before you can sit the entrance exam.",
        "Technical tracks (T/M/W/G/S) also expect strong math or subject knowledge alongside German.",
        "Plan for an intensive language course before applying if you are below the required level.",
      ],
    },
    {
      title: "Timeline",
      points: [
        "9–12 months: confirm HZB status, pick a track, and book language exams.",
        "6–3 months: apply to universities/Studienkollegs and prepare for the Aufnahmeprüfung.",
        "1–2 semesters: complete the program and pass the Feststellungsprüfung to start university.",
      ],
    },
    {
      title: "Common mistakes",
      points: [
        "Treating Studienkolleg as a general language school instead of a subject-heavy prep program.",
        "Skipping math/subject prep and failing the entrance exam due to weak core knowledge.",
        "Missing application windows, which often open far earlier than university intake deadlines.",
      ],
    },
  ];
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Studienkolleg (Explained Simply)</h1>
        <p className="text-gray-600">
          Clear requirements, timeline, common mistakes, and the next step you should take.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {guidance.map((item) => (
          <div key={item.title} className="rounded-3xl border p-6">
            <p className="text-lg font-bold">{item.title}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border p-8">
        <h2 className="text-xl font-bold">Next Step</h2>
        <p className="mt-2 text-sm text-gray-600">
          Use the Planner to check if this pathway fits your profile.
        </p>
        <Link
          href="/tools/pathway-planner"
          className="mt-4 inline-block rounded-2xl bg-black px-6 py-3 text-white font-semibold hover:opacity-90"
        >
          Check if this path fits you
        </Link>
      </section>
    </div>
  );
}
