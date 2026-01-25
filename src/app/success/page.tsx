export default function Success() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Success Stories</h1>
      <p className="text-gray-600">
        Real journeys â€” including progress stories (still learning, still preparing, still applying).
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Started A1 → now A2",
          "Preparing documents for Ausbildung",
          "Booked guidance + improved motivation letter",
        ].map((s) => (
          <div key={s} className="rounded-3xl border p-6">
            <p className="font-bold">{s}</p>
            <p className="mt-2 text-sm text-gray-600">Story content will be added here.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
