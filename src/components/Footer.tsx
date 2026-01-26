import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-900">{site.name}</p>
            <p className="text-sm text-slate-600">{site.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="/about" className="transition hover:text-slate-900">
              About
            </Link>
            <Link href="/success" className="transition hover:text-slate-900">
              Success
            </Link>
            <Link href="/contact" className="transition hover:text-slate-900">
              Contact
            </Link>
            <Link href="/germany-partner" className="transition hover:text-slate-900">
              Germany Partner
            </Link>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-500">
          âš ï¸ Transparency: We provide guidance & preparation support. We do not promise visas or guaranteed jobs.
        </div>
      </div>
    </footer>
  );
}
