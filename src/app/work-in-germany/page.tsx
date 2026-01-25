import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Work in Germany</h1>
        <p className="text-gray-600">
          Clear requirements, timeline, common mistakes, and the next step you should take.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Who qualifies", "Basic eligibility explained in simple terms."],
          ["German level needed", "What level you must reach (A2/B1/B2 depending)."],
          ["Timeline", "What happens first, what takes time, and what to prepare early."],
          ["Common mistakes", "Avoid delays, scams, and unrealistic expectations."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-3xl border p-6">
            <p className="text-lg font-bold">{t}</p>
            <p className="mt-2 text-sm text-gray-600">{d}</p>
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
