"use client";

export default function Guidance() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Guidance & Support</h1>
      <p className="text-gray-600">
        Premium human help for serious applicants — CV review, motivation letters, interview prep, and application guidance.
      </p>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          "CV Review",
          "Motivation Letter Help",
          "Interview Preparation",
          "Application Guidance",
        ].map((s) => (
          <div key={s} className="rounded-3xl border p-6">
            <p className="text-lg font-bold">{s}</p>
            <p className="mt-2 text-sm text-gray-600">
              Clear feedback + practical improvements based on Germany expectations.
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border p-6">
        <p className="text-sm font-semibold">Transparency</p>
        <p className="mt-2 text-sm text-gray-700">
          We guide and prepare. We do not promise visas or guaranteed jobs.
        </p>

        <button
          className="mt-4 rounded-2xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
          onClick={() => alert("Booking + payment will be added next.")}
        >
          Book Guidance
        </button>
      </section>
    </div>
  );
}
