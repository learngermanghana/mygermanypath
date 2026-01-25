import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/ausbildung-germany", label: "Ausbildung" },
  { href: "/study-germany", label: "Study" },
  { href: "/studienkolleg", label: "Studienkolleg" },
  { href: "/work-in-germany", label: "Work" },
  { href: "/tools", label: "Tools" },
  { href: "/learn-german", label: "Learn German" },
  { href: "/guidance", label: "Guidance" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          MyGermanyPath
        </Link>

        <nav className="hidden gap-5 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tools/pathway-planner"
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Check Your Path
        </Link>
      </div>
    </header>
  );
}
