import Link from "next/link";

export default function Page() {
  const categories = [
    {
      title: "Healthcare & Social Care",
      emoji: "🏥",
      roles: [
        "Pflegefachmann / Pflegefachfrau (Nursing)",
        "Medizinische/r Fachangestellte/r (MFA) (Medical assistant)",
        "Zahnmedizinische/r Fachangestellte/r (ZFA) (Dental assistant)",
        "Pharmazeutisch-kaufmännische/r Angestellte/r (PKA) (Pharmacy assistant)",
        "Notfallsanitäter/in (Paramedic)",
        "Erzieher/in (Educator / kindergarten teacher)",
        "Heilerziehungspfleger/in (Care for people with disabilities)",
      ],
    },
    {
      title: "IT & Technology",
      emoji: "💻",
      roles: [
        "Fachinformatiker/in – Anwendungsentwicklung (Software development)",
        "Fachinformatiker/in – Systemintegration (IT systems & networks)",
        "Fachinformatiker/in – Daten- und Prozessanalyse (Data/process analysis)",
        "IT-System-Elektroniker/in (IT electronics technician)",
        "Elektroniker/in für Betriebstechnik (Industrial electrician)",
        "Mechatroniker/in (Mechatronics technician)",
      ],
    },
    {
      title: "Engineering & Industry",
      emoji: "🏭",
      roles: [
        "Industriemechaniker/in (Industrial mechanic)",
        "Zerspanungsmechaniker/in (CNC machining)",
        "Konstruktionsmechaniker/in (Construction mechanic)",
        "Werkzeugmechaniker/in (Tool mechanic)",
        "Verfahrensmechaniker/in (Process mechanic)",
        "Technische/r Produktdesigner/in (Technical product designer)",
      ],
    },
    {
      title: "Automotive & Transport",
      emoji: "🚗",
      roles: [
        "Kfz-Mechatroniker/in (Car mechanic & electronics)",
        "Berufskraftfahrer/in (Truck/Bus driver)",
        "Fachkraft für Lagerlogistik (Warehouse logistics)",
        "Speditionskaufmann/-frau (Freight forwarding clerk)",
        "Eisenbahner/in im Betriebsdienst (Railway operations)",
      ],
    },
    {
      title: "Construction & Skilled Trades",
      emoji: "🧱",
      roles: [
        "Anlagenmechaniker/in SHK (Plumber/heating/air systems)",
        "Elektroniker/in für Energie- und Gebäudetechnik (Building electrical)",
        "Maler/in & Lackierer/in (Painter & varnisher)",
        "Tischler/in (Carpenter)",
        "Maurer/in (Bricklayer)",
        "Dachdecker/in (Roofer)",
        "Metallbauer/in (Metal construction)",
        "Fliesenleger/in (Tiler)",
      ],
    },
    {
      title: "Food & Hospitality",
      emoji: "🍞",
      roles: [
        "Koch/Köchin (Chef)",
        "Hotelfachmann/-frau (Hotel specialist)",
        "Restaurantfachmann/-frau (Restaurant specialist)",
        "Bäcker/in (Baker)",
        "Konditor/in (Pastry chef)",
        "Fleischer/in (Butcher)",
      ],
    },
    {
      title: "Business, Office & Finance",
      emoji: "💼",
      roles: [
        "Kaufmann/-frau für Büromanagement (Office management)",
        "Industriekaufmann/-frau (Industrial management)",
        "Einzelhandelskaufmann/-frau (Retail sales)",
        "Verkäufer/in (Sales assistant)",
        "Bankkaufmann/-frau (Bank clerk)",
        "Kaufmann/-frau im E-Commerce (E-commerce management)",
        "Versicherungskaufmann/-frau (Insurance clerk)",
      ],
    },
    {
      title: "Public Service & Safety",
      emoji: "👮",
      roles: [
        "Polizei (Ausbildung / duales Studium varies by state) (Police)",
        "Feuerwehr (varies by city/state) (Fire service)",
        "Fachangestellte/r für Bäderbetriebe (Lifeguard/pool operations)",
        "Justizfachangestellte/r (Court clerk)",
      ],
    },
    {
      title: "Environment & Nature",
      emoji: "🌿",
      roles: [
        "Gärtner/in (Gardener)",
        "Forstwirt/in (Forestry worker)",
        "Landwirt/in (Farmer)",
        "Tierpfleger/in (Animal caretaker)",
        "Fachkraft für Kreislauf- und Abfallwirtschaft (Waste & recycling)",
      ],
    },
    {
      title: "Media & Design",
      emoji: "🎨",
      roles: [
        "Mediengestalter/in Digital und Print (Media designer)",
        "Fotograf/in (Photographer)",
        "Gestalter/in für visuelles Marketing (Visual marketing designer)",
        "Veranstaltungskaufmann/-frau (Event management)",
      ],
    },
  ];
  const guidance = [
    {
      title: "Who qualifies",
      points: [
        "You need a school-leaving certificate equivalent to German secondary education and a signed training contract.",
        "The visa focuses on training fit: motivation, realistic career plan, and ability to finance living costs.",
        "Some occupations are regulated or require health checks, especially in healthcare or childcare.",
      ],
    },
    {
      title: "German level needed",
      points: [
        "Most employers expect at least B1; competitive or customer-facing roles often require B2.",
        "Healthcare and childcare typically demand B2 for safety and communication standards.",
        "Bring a recognized certificate (Goethe/telc/ÖSD) because employers and embassies ask for proof.",
      ],
    },
    {
      title: "Timeline",
      points: [
        "6–12 months: language preparation, CV/cover letter in German, and shortlist companies.",
        "3–6 months: apply, interview, and sign the training contract (Ausbildungsvertrag).",
        "2–3 months: visa processing, arrange housing, and arrive before the August/September start.",
      ],
    },
    {
      title: "Common mistakes",
      points: [
        "Applying without enough German or with an incomplete contract (missing salary/start date).",
        "Paying agencies for “guaranteed” contracts—legitimate employers never sell placements.",
        "Underestimating living costs: training salaries can be low, so plan a realistic budget.",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Ausbildung in Germany</h1>
        <p className="text-gray-600">
          Clear requirements, timeline, common mistakes, and the next step you should take.
        </p>
      </header>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">Popular Ausbildung Fields</h2>
          <p className="mt-1 text-sm text-gray-600">
            Explore high-demand roles across healthcare, technology, skilled trades, and more.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="rounded-3xl border p-6">
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
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {guidance.map((item) => (
          <div key={item.title} className="rounded-3xl border p-6">
            <p className="text-lg font-bold">{item.title}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border p-8">
        <h2 className="text-xl font-bold">Next Step</h2>
        <p className="mt-2 text-sm text-gray-600">
          Use the Planner to check if this pathway fits your profile.
        </p>
        <Link
          href="/tools/pathway-planner"
          className="mt-4 inline-block rounded-2xl bg-black px-6 py-3 text-white font-semibold hover:opacity-90"
        >
          Check if this path fits you
        </Link>
      </section>
    </div>
  );
}
