"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { getMessages, Locale } from "@/lib/i18n";

export default function Nav() {
  const { locale, setLocale } = useLocale();
  const messages = getMessages(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-slate-900">
          MyGermanyPath
        </Link>

        <nav className="hidden gap-5 md:flex">
          {messages.nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <label className="sr-only" htmlFor="locale-select">
            {messages.nav.languageLabel}
          </label>
          <select
            id="locale-select"
            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm text-slate-700 shadow-sm"
            value={locale}
            onChange={(event) => setLocale(event.target.value as Locale)}
          >
            {messages.nav.languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Link
            href="/tools/pathway-planner"
            className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            {messages.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
