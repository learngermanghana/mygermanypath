import Link from "next/link";

export default function Page() {
  const guidance = [
    {
      title: "Who qualifies",
      points: [
        "You need a recognized higher education entrance qualification (HZB) for your target program; some applicants must first attend Studienkolleg.",
        "A formal admission letter (or conditional admission) from a German university is the core requirement for a student visa.",
        "Proof of finances (blocked account, scholarship, or guarantor) and valid health insurance are mandatory for the visa.",
      ],
    },
    {
      title: "German level needed",
      points: [
        "German-taught degrees usually require B2 to C1 (proved by TestDaF, DSH, Goethe, or telc certificates).",
        "English-taught degrees often accept IELTS/TOEFL, but day-to-day life still needs at least A2/B1 for housing, bureaucracy, and work.",
        "If your admission is conditional on language prep, expect to show a clear plan and timeline for reaching the required level.",
      ],
    },
    {
      title: "Timeline",
      points: [
        "12–6 months before start: shortlist programs, confirm HZB recognition, and check uni-assist/APS requirements.",
        "6–3 months: apply, gather translations, secure blocked account funds, and book embassy appointments early.",
        "3–1 months: receive admission, buy insurance, submit visa, then prepare for arrival (housing + registration).",
      ],
    },
    {
      title: "Common mistakes",
      points: [
        "Missing uni-assist or university deadlines, or submitting incomplete document translations.",
        "Underestimating proof-of-funds requirements or using invalid blocked account providers.",
        "Booking visa appointments late and assuming decisions are instant; processing often takes 8–12 weeks.",
      ],
    },
  ];
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Study in Germany</h1>
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
