export type RoleCategory = {
  title: string;
  emoji: string;
  roles: string[];
};

type RoleCategoryCardProps = {
  category: RoleCategory;
};

export default function RoleCategoryCard({ category }: RoleCategoryCardProps) {
  return (
    <article className="rounded-3xl border p-6">
      <h3 className="text-lg font-semibold">
        <span className="mr-2" aria-hidden="true">
          {category.emoji}
        </span>
        {category.title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {category.roles.map((role) => (
          <li key={role} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-black/70" aria-hidden="true" />
            <span>{role}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
