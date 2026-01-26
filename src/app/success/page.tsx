export default function Success() {
  const stories = [
    {
      name: "Ama",
      title: "A2 → B1 in 4 months",
      summary: "Focused on daily practice + mock interviews to unlock Ausbildung.",
      progress: 70,
    },
    {
      name: "Kwame",
      title: "B1 → B2 readiness",
      summary: "Built a study plan and booked TestDaF with counselor support.",
      progress: 55,
    },
    {
      name: "Esi",
      title: "Work pathway documents",
      summary: "Updated CV + recognition request and submitted applications.",
      progress: 85,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Success Stories</h1>
      <p className="text-gray-600">
        Real journeys — including progress stories (still learning, still preparing, still
        applying).
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {stories.map((story) => (
          <div key={story.name} className="rounded-3xl border p-6">
            <p className="text-sm font-semibold text-gray-500">{story.name}</p>
            <p className="mt-2 font-bold">{story.title}</p>
            <p className="mt-2 text-sm text-gray-600">{story.summary}</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Progress</span>
                <span>{story.progress}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-emerald-500"
                  style={{ width: `${story.progress}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
