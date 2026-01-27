import Link from "next/link";
import FeatureCard from "@/components/cards/FeatureCard";
import homeContent from "@/content/homepage.json";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="rounded-3xl border p-8 md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">
          From Africa to Europe — choose the right path
          <span className="block text-gray-600 text-lg md:text-xl mt-3">
            Germany • Netherlands • Belgium • Austria — Study • Ausbildung •
            Work with clear requirements, real timelines, honest guidance.
          </span>
        </h1>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/tools/pathway-planner"
            className="rounded-2xl bg-black px-6 py-3 text-center text-white font-semibold hover:opacity-90"
          >
            Check Your Germany Path
          </Link>
          <Link
            href="/learn-german"
            className="rounded-2xl border px-6 py-3 text-center font-semibold hover:bg-gray-50"
          >
            Learn German (Falowen)
          </Link>
        </div>
      </section>

      {/* 3 CARDS WITH IMAGES */}
      <section className="grid gap-4 md:grid-cols-3">
        {homeContent.featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} priority />
        ))}
      </section>

      {/* CREDENTIALS ASSESSMENT */}
      <section className="rounded-3xl border p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Credentials Evaluation &amp; Assessment
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Credentials Evaluation &amp; Assessment (Recommended Start)
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Credentials Evaluation &amp; Assessment so we choose the right path before you apply.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-semibold">Visa options analysis:</span> Compare relevant
                visa categories against your background and goals
              </li>
              <li>
                <span className="font-semibold">Approval strategy:</span> Identify gaps and quick
                ways to strengthen your case
              </li>
              <li>
                <span className="font-semibold">Step-by-step roadmap:</span> Clear stages,
                timelines, and requirements
              </li>
              <li>
                <span className="font-semibold">Transparent costs:</span> Breakdown of
                professional fees and government charges
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              This assessment gives you clarity and a strong foundation to move forward
              successfully.
            </p>
            <Link
              href="/assessment"
              className="mt-6 inline-flex rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Book Assessment
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border bg-gray-50">
            <img
              src="/images/pexels-tima-miroshnichenko-7010095.jpg"
              alt="Consultant reviewing documents with a client"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROGRESS & ACCOUNTS */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Save your progress
          </p>
          <h2 className="mt-2 text-2xl font-bold">Return to planners, tests, and CV drafts.</h2>
          <p className="mt-2 text-sm text-gray-600">
            Create a free account to keep your readiness scores, saved document lists, and CV
            drafts in one place.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-2xl bg-black px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Create account
            </button>
            <Link
              href="/tools"
              className="rounded-2xl border px-5 py-2 text-sm font-semibold hover:bg-gray-50"
            >
              Explore tools
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border bg-gray-50 p-8">
          <h3 className="text-lg font-bold">Stay motivated with visual progress</h3>
          <p className="mt-2 text-sm text-gray-600">
            Track your readiness and language milestones in simple progress bars.
          </p>
          <div className="mt-5 space-y-4">
            {[
              { label: "Readiness score", value: 72 },
              { label: "German level goal", value: 45 },
              { label: "Document checklist", value: 60 },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white">
                  <div
                    className="h-2 rounded-full bg-sky-500"
                    style={{ width: `${item.value}%` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="rounded-3xl border p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Success stories in progress</h2>
            <p className="text-sm text-gray-600">
              Real people moving from A2 to B2, securing internships, and finalizing documents.
            </p>
          </div>
          <Link href="/success" className="text-sm font-semibold text-sky-600">
            See all stories →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Ama — A2 to B1", note: "Now ready for Ausbildung interviews.", value: 70 },
            { title: "Kwame — B1 to B2", note: "Booked TestDaF for next quarter.", value: 55 },
            { title: "Esi — Work pathway", note: "CV + documents submitted.", value: 85 },
          ].map((story) => (
            <div key={story.title} className="rounded-2xl border bg-gray-50 p-5">
              <p className="font-semibold">{story.title}</p>
              <p className="mt-1 text-xs text-gray-600">{story.note}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Progress</span>
                  <span>{story.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white">
                  <div
                    className="h-2 rounded-full bg-emerald-500"
                    style={{ width: `${story.value}%` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HELP */}
      <section className="rounded-3xl border bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-bold">Need quick answers?</h2>
        <p className="mt-2 text-sm text-white/80">
          Visit the Help & FAQ hub for visa procedures, cost of living, and official resource
          links.
        </p>
        <Link
          href="/help"
          className="mt-5 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 hover:opacity-90"
        >
          Go to Help & FAQ
        </Link>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-black p-8 text-white">
        <h2 className="text-2xl font-bold">Start your Germany journey</h2>
        <p className="mt-2 text-sm text-white/80">
          Get a clear plan based on your age, education, and German level.
        </p>
        <Link
          href="/tools/pathway-planner"
          className="mt-5 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-black hover:opacity-90"
        >
          Start the Planner
        </Link>
      </section>
    </div>
  );
}
