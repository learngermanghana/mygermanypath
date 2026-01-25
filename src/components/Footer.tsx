import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="text-sm text-gray-600">{site.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <Link href="/about">About</Link>
            <Link href="/success">Success</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/germany-partner">Germany Partner</Link>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          âš ï¸ Transparency: We provide guidance & preparation support. We do not promise visas or guaranteed jobs.
        </div>
      </div>
    </footer>
  );
}
