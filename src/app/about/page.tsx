export default function About() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
          About Pirus Consultancy
        </p>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Clear pathways for Africans pursuing life and study in Germany.
        </h1>
        <p className="max-w-2xl text-base text-gray-600">
          We help you plan with clarity, build strong applications, and learn German with confidence. Every
          conversation is rooted in reality, not empty promises.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Our mission",
            text: "Demystify the Germany journey with honest guidance, practical preparation, and long-term support.",
          },
          {
            title: "Our promise",
            text: "No visa guarantees. No shortcuts. We focus on preparation, credibility, and real outcomes.",
          },
          {
            title: "Our impact",
            text: "We equip students, professionals, and founders with the knowledge and tools to make informed decisions.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold text-gray-900">What we do</h2>
          <p className="mt-3 text-sm text-gray-600">
            From first questions to final submissions, we provide a structured roadmap across education, work, and
            business routes. We coach applicants on document preparation, career positioning, and cultural readiness.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            {[
              "Study & admission planning",
              "German language learning support",
              "CV and motivation letter reviews",
              "Visa documentation readiness",
              "Relocation preparation",
              "Founder and business visa guidance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">Who we serve</h2>
          <p className="mt-3 text-sm text-gray-600">
            Students, skilled professionals, and entrepreneurs across Africa who want a transparent, supportive path to
            Germany.
          </p>
          <div className="mt-5 space-y-3 text-sm text-gray-700">
            <div className="rounded-2xl border bg-white p-4">
              <p className="font-semibold">Students</p>
              <p className="text-gray-600">Admission guidance, Studienkolleg readiness, and language prep.</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <p className="font-semibold">Professionals</p>
              <p className="text-gray-600">CV optimization, job search strategy, and visa planning.</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <p className="font-semibold">Founders</p>
              <p className="text-gray-600">Business visa strategy, documentation, and market research support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border p-6">
        <h2 className="text-xl font-bold text-gray-900">Ethics & transparency</h2>
        <p className="mt-3 text-sm text-gray-600">
          We say no when something is unrealistic and yes when the plan is strong. That honesty keeps our clients safe
          and focused on what truly works.
        </p>
      </section>

      <section className="rounded-3xl border bg-teal-600 p-6 text-white">
        <h2 className="text-xl font-bold">Ready to begin your Germany journey?</h2>
        <p className="mt-2 text-sm text-teal-100">
          Start with a consultation and let’s build a plan that fits your goals, timeline, and budget.
        </p>
      </section>
    </div>
  );
}
