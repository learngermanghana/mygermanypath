import Link from "next/link";
import FeatureCard from "@/components/cards/FeatureCard";
import homeContent from "@/content/homepage.json";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="rounded-3xl border p-8 md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">
          Global Mobility &amp; Education Advisory
          <span className="block text-gray-600 text-lg md:text-xl mt-3">
            Admissions and visa support for students and business travelers across multiple
            destinations.
          </span>
        </h1>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-2xl bg-black px-6 py-3 text-center text-white font-semibold hover:opacity-90"
          >
            Book a consultation
          </Link>
          <Link
            href="/help"
            className="rounded-2xl border px-6 py-3 text-center font-semibold hover:bg-gray-50"
          >
            Explore resources
          </Link>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {homeContent.featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} priority />
        ))}
      </section>

      {/* WHO WE HELP */}
      <section className="rounded-3xl border p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">Who we help</h2>
            <p className="mt-3 text-sm text-gray-600">
              We are a Germany-based Global Mobility Consultant and Education Advisor supporting
              students and professionals with admissions planning for destinations worldwide. We
              also provide visa application support specifically for Europe (Schengen) and
              Australia. Our work focuses on clear strategy, accurate documentation, and
              step-by-step guidance from the initial assessment to a submission-ready application
              file.
            </p>
          </div>
          <div className="rounded-2xl border bg-gray-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Primary audiences
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>Students &amp; Parents</li>
              <li>Graduates &amp; Young Professionals</li>
              <li>Business Owners &amp; Entrepreneurs</li>
            </ul>
          </div>
        </div>
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
          href="/contact"
          className="mt-5 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-black hover:opacity-90"
        >
          Contact us
        </Link>
      </section>
    </div>
  );
}
