import Link from "next/link";

export default function Tools() {
  const tools = [
    {
      title: "Germany Pathway Planner",
      desc: "Free → Paid detailed plan. Find your best route fast.",
      valuePromise: "Takes 5 min to get your first route.",
      price: "Starting at $9",
      href: "/tools/pathway-planner",
      cta: "Start planning →",
    },
    {
      title: "Readiness Test",
      desc: "Are you actually ready for Ausbildung / Study?",
      valuePromise: "Answer 12 questions to see your score.",
      price: "Starting at $5",
      href: "/tools/readiness-test",
      cta: "Take the test →",
    },
    {
      title: "CV & Motivation Builder",
      desc: "Guided tool to build your CV and motivation letter.",
      valuePromise: "Instant PDF-ready draft in one session.",
      price: "Starting at $12",
      href: "/tools/cv-builder",
      cta: "Build your CV →",
    },
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Tools</h1>
      <p className="text-gray-600">
        Pay-per-use tools that give you clarity and preparation steps (no app install).
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {tools.map((t) => (
          <Link
            key={t.title}
            href={t.href}
            className="rounded-3xl border p-6 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-lg font-bold">{t.title}</p>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                {t.price}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            <p className="mt-2 text-sm text-gray-500">{t.valuePromise}</p>
            <p className="mt-4 text-sm font-semibold text-blue-600">{t.cta}</p>
          </Link>
        ))}
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Save your progress
          </p>
          <h2 className="mt-2 text-2xl font-bold">Create an account to return anytime.</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your Pathway Planner history, Readiness Test scores, and CV drafts stay available so
            you can pick up where you left off on any device.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-2xl bg-black px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Create free account
            </button>
            <button
              type="button"
              className="rounded-2xl border px-5 py-2 text-sm font-semibold hover:bg-gray-50"
            >
              Log in
            </button>
          </div>
        </div>

        <div className="rounded-3xl border bg-gray-50 p-6">
          <h3 className="text-lg font-bold">What returning users can do</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            {[
              "Re-open past planners with saved document lists.",
              "Compare Readiness Test scores over time.",
              "Export CV drafts or motivation letters again.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
