import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-10">
      <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            About & Founder
          </p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Guidance shaped by real experience and transparent support.
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            MyGermanyPath exists to give Africans clear, honest guidance for Germany — with
            preparation support, German learning, and step-by-step planning. We focus on
            education-led pathways and consistent communication so every client knows what to
            do next.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/WhatsApp Image 2026-01-29 at 19.52.04.jpeg"
            alt="Founder of MyGermanyPath"
            width={640}
            height={720}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
          <p className="text-sm text-slate-700">
            We help students, professionals, and families align their education and career
            goals with realistic Germany pathways. Our approach blends practical requirements
            with personalized roadmaps and honest timelines.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Transparency</h3>
              <p className="mt-2 text-sm text-slate-700">
                No fake promises, no visa guarantees — just clear steps and realistic
                expectations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Preparation</h3>
              <p className="mt-2 text-sm text-slate-700">
                Document checklists, study plans, and interview practice to help you stay
                ready.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Founder Profile</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              10+ years supporting education pathways, consular work, and policy guidance.
            </li>
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              Roles have included consular officer, education advisor, and policy analyst.
            </li>
            <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              Focused on practical steps, strong documentation, and consistent client
              communication.
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">How We Work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Structure</h3>
              <p className="mt-2 text-sm text-slate-700">
                Organized checklists, document plans, and clear timelines for each pathway.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Guidance</h3>
              <p className="mt-2 text-sm text-slate-700">
                Step-by-step support for study, Ausbildung, and work pathways.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Communication</h3>
              <p className="mt-2 text-sm text-slate-700">
                Consistent updates so you always know what to do next.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            Our goal is to help you make confident decisions and submit strong, complete
            applications with clarity at every stage.
          </p>
        </div>
      </section>
    </div>
  );
}
