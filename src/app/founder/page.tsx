import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder | MyGermanyPath",
  description:
    "Meet the founder of MyGermanyPath—10+ years supporting education pathways, consular work, and policy guidance.",
  openGraph: {
    title: "Founder | MyGermanyPath",
    description:
      "Meet the founder of MyGermanyPath—10+ years supporting education pathways, consular work, and policy guidance.",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Founder | MyGermanyPath",
    description:
      "Meet the founder of MyGermanyPath—10+ years supporting education pathways, consular work, and policy guidance.",
  },
};

export default function FounderPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Founder
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Education-led guidance, grounded in real-world experience.
        </h1>
        <p className="max-w-3xl text-base text-slate-600">
          I help clients navigate study and career pathways with clarity, structure, and
          transparent expectations. MyGermanyPath is built on a decade of government,
          embassy-related, and nonprofit work supporting international applicants.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Education</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              Master of Arts (MA), Canadian Studies – Carleton University (Ottawa, Canada)
            </li>
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              Bachelor of Arts (Honours), International Relations – Carleton University (Canada)
            </li>
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              Bachelor of Arts (Honours), Political Science – University of Toronto (Canada)
            </li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Professional Experience</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              10+ years of experience across government, embassy-related work, and
              nonprofit organizations.
            </li>
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              Roles have included consular officer, education advisor, and policy analyst.
            </li>
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              Experience includes advising clients on educational pathways and supporting
              strong, well-structured application documentation.
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">How I Work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Transparency</h3>
              <p className="mt-2 text-sm text-slate-700">
                Clear guidance on requirements, risks, and realistic timelines.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Structure</h3>
              <p className="mt-2 text-sm text-slate-700">
                Organized checklists, document plans, and step-by-step roadmaps.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Communication</h3>
              <p className="mt-2 text-sm text-slate-700">
                Consistent updates and straightforward explanations so clients always know
                what to do next.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            My goal is simple: to help clients make confident decisions and submit strong,
            complete applications with clarity at every stage.
          </p>
        </div>
      </section>
    </div>
  );
}
