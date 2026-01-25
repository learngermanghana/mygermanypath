import Link from "next/link";

export default function Tools() {
  const tools = [
    {
      title: "Germany Pathway Planner",
      desc: "Free â†’ Paid detailed plan. Find your best route fast.",
      href: "/tools/pathway-planner",
    },
    {
      title: "Readiness Test",
      desc: "Are you actually ready for Ausbildung / Study?",
      href: "/tools/readiness-test",
    },
    {
      title: "CV & Motivation Builder",
      desc: "Guided tool to build your CV and motivation letter.",
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
            <p className="text-lg font-bold">{t.title}</p>
            <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            <p className="mt-4 text-sm font-semibold">Open â†’</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
