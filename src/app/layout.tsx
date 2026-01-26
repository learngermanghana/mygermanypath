import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import { LocaleProvider } from "@/components/LocaleProvider";
import { getLocaleFromHeader, getMessages } from "@/lib/i18n";

export async function generateMetadata() {
  const locale = getLocaleFromHeader(headers().get("accept-language"));
  const { metadata } = getMessages(locale);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocaleFromHeader(headers().get("accept-language"));

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900"
        suppressHydrationWarning
      >
        <LocaleProvider initialLocale={locale}>
          <Nav />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
