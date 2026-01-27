import Link from "next/link";
import GuidanceCard from "@/components/cards/GuidanceCard";
import RoleCategoryCard from "@/components/cards/RoleCategoryCard";
import ausbildungContent from "@/content/ausbildung.json";

export default function Page() {
  const { categories, guidance } = ausbildungContent;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Ausbildung in Germany</h1>
        <p className="text-gray-600">
          Clear requirements, timeline, common mistakes, and the next step you should take.
        </p>
      </header>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">Popular Ausbildung Fields</h2>
          <p className="mt-1 text-sm text-gray-600">
            Explore high-demand roles across healthcare, technology, skilled trades, and more.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {categories.map((category) => (
            <RoleCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {guidance.map((item) => (
          <GuidanceCard key={item.title} item={item} />
        ))}
      </section>

      <section className="rounded-3xl border p-8">
        <h2 className="text-xl font-bold">Next Step</h2>
        <p className="mt-2 text-sm text-gray-600">
          Want help confirming your match or preparing the right documents? We can review your case.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-2xl bg-black px-6 py-3 text-white font-semibold hover:opacity-90"
        >
          Contact us
        </Link>
      </section>
    </div>
  );
}
