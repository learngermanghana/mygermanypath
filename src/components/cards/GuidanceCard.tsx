export type GuidanceItem = {
  title: string;
  points: string[];
};

type GuidanceCardProps = {
  item: GuidanceItem;
};

export default function GuidanceCard({ item }: GuidanceCardProps) {
  return (
    <div className="rounded-3xl border p-6">
      <p className="text-lg font-bold">{item.title}</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
