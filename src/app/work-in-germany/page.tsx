import Link from "next/link";

export default function Page() {
  const guidance = [
    {
      title: "Who qualifies",
      points: [
        "Skilled workers need a recognized degree or vocational qualification and a job offer that matches it.",
        "EU Blue Card applicants must meet salary thresholds and have a recognized university degree (or an equivalent in-demand IT path).",
        "Regulated professions (healthcare, teaching, engineering) require formal recognition before a visa is issued.",
      ],
    },
    {
      title: "German level needed",
      points: [
        "English-speaking tech roles can be possible, but most employers still expect at least B1 for daily work.",
        "Regulated professions usually require B2 or higher German for licensing and patient/client communication.",
        "For long-term integration, plan for B1/B2 even if the job ad is in English.",
      ],
    },
    {
      title: "Timeline",
      points: [
        "4–8 months: get qualification recognition (ZAB or the relevant chamber) and collect work experience proofs.",
        "3–6 months: job search, interviews, and contract negotiation; ensure salary meets visa requirements.",
        "2–3 months: visa appointment and processing, then prepare relocation (housing, Anmeldung, insurance).",
      ],
    },
    {
      title: "Common mistakes",
      points: [
        "Applying without recognition documents or with a job offer that does not match the qualification.",
        "Assuming any salary qualifies for a Blue Card—thresholds change yearly and vary by shortage occupations.",
        "Skipping language planning and later struggling with probation periods, paperwork, or client contact.",
      ],
    },
  ];
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Work in Germany</h1>
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
