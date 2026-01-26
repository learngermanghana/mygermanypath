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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-slate-900">
          MyGermanyPath
        </Link>

        <nav className="hidden gap-5 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tools/pathway-planner"
          className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
        >
          Check Your Path
        </Link>
      </div>
    </header>
  );
}
