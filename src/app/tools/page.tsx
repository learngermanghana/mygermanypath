import Link from "next/link";

export default function Tools() {
  const tools = [
    {
      title: "Germany Pathway Planner",
      desc: "Free → Paid detailed plan. Find your best route fast.",
      price: "Starting at $9",
      href: "/tools/pathway-planner",
    },
    {
      title: "Readiness Test",
      desc: "Are you actually ready for Ausbildung / Study?",
      price: "Starting at $5",
      href: "/tools/readiness-test",
    },
    {
      title: "CV & Motivation Builder",
      desc: "Guided tool to build your CV and motivation letter.",
      price: "Starting at $12",
      href: "/tools/cv-builder",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tools</h1>
      <p className="text-gray-600">
        Pay-per-use tools that give you clarity and preparation steps (no app install).
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {tools.map((t) => (
          <Link key={t.title} href={t.href} className="rounded-3xl border p-6 hover:bg-gray-50">
            <div className="flex items-start justify-between gap-3">
              <p className="text-lg font-bold">{t.title}</p>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                {t.price}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            <p className="mt-4 text-sm font-semibold">Open →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
