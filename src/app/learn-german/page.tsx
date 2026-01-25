import Link from "next/link";

export default function LearnGerman() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Learn German (Falowen)</h1>
      <p className="text-gray-600">
        German is not optional â€” we help you reach the level you need for your Germany goal.
      </p>

      <section className="rounded-3xl border p-6 space-y-3">
        <h2 className="text-xl font-bold">Pricing</h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm">
          <li>A1 = 2800</li>
          <li>A2â€“C1 = 3000</li>
          <li>B2/C1 self-learning plan (6 months)</li>
        </ul>

        <div className="pt-3">
          <Link
            href="#"
            className="inline-block rounded-2xl bg-black px-6 py-3 text-white font-semibold hover:opacity-90"
          >
            Download Falowen (Play Store)
          </Link>
        </div>
      </section>
    </div>
  );
}
