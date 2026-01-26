import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MyGermanyPath",
  description:
    "Study, Ausbildung, and Work guidance for Germany — with real steps, not false promises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900"
        suppressHydrationWarning
      >
        <Nav />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
