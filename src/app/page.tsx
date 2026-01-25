import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="rounded-3xl border p-8 md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">
          From Ghana & Africa to Germany — choose the right path
          <span className="block text-gray-600 text-lg md:text-xl mt-3">
            Study • Ausbildung • Work — clear requirements, real timelines,
            honest guidance.
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
        {[
          {
            title: "Ausbildung",
            desc: "Learn a skill + work in Germany with structured training.",
            href: "/ausbildung-germany",
            img: "/images/ausbildung.jpg",
          },
          {
            title: "Study / Studienkolleg",
            desc: "University path including preparation programs.",
            href: "/study-germany",
            img: "/images/study.jpg",
          },
          {
            title: "Jobs in Germany",
            desc: "Work routes, requirements, and realistic expectations.",
            href: "/work-in-germany",
            img: "/images/jobs.jpg",
          },
        ].map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group overflow-hidden rounded-3xl border hover:bg-gray-50"
          >
            {/* Image */}
            <div className="relative h-44 w-full">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <p className="text-lg font-bold">{c.title}</p>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <p className="mt-4 text-sm font-semibold">Explore →</p>
            </div>
          </Link>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="rounded-3xl border p-8">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            "Check your path",
            "See requirements",
            "Prepare (German + documents)",
            "Apply with confidence",
          ].map((s, i) => (
            <li key={s} className="rounded-2xl bg-gray-50 p-4">
              <p className="text-sm font-semibold">Step {i + 1}</p>
              <p className="mt-2 text-sm text-gray-700">{s}</p>
            </li>
          ))}
        </ol>
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
