import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TranslationsPage() {
  const translations = [
    {
      name: "Quark Logger",
      description: "Discord naplózó rendszer",
      status: "done",
      label: "Lefordítva",
    },
    {
      name: "ProBot",
      description: "Discord moderációs és közösségi bot",
      status: "done",
      label: "Lefordítva",
    },
    {
      name: "FlaviBot",
      description: "Discord bot fordítása folyamatban",
      status: "progress",
      label: "Fordítás alatt",
    },
    {
      name: "Giveaway Boat",
      description: "Giveaway kezelő bot",
      status: "done",
      label: "Lefordítva",
    },
    {
      name: "Atlas",
      description: "Discord szerverkezelő bot",
      status: "done",
      label: "Lefordítva",
    },
    {
      name: "PreMiD",
      description: "Rich Presence platform",
      status: "done",
      label: "Lefordítva",
    },
    {
      name: "Streamcord",
      description:
        "Volt fordítói projekt (a fejlesztők később az angol nyelvre korlátozták a botot)",
      status: "stopped",
      label: "Volt fordító",
    },
  ];
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="wrap">

          {/* Section Head */}
          <div className="section-head">
            <div className="eyebrow">🔥 fordítások</div>
            <h1 className="section-title">Fordítások</h1>
            <p className="section-desc">
              Magyar nyelvű fordítások különböző botokhoz, webes eszközökhöz és platformokhoz.
              A lista folyamatosan frissül, ahogy új projekteket készítek.
            </p>
          </div>

          <div className="space-y-4">
            {translations.map((translation) => (
              <div
                key={translation.name}
                className="flex items-center justify-between rounded-xl border border-line bg-surface p-5"
              >
                <div>
                  <h3 className="font-semibold text-text">
                    {translation.name}
                  </h3>

                  <p className="text-sm text-textMuted mt-1">
                    {translation.description}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
                    ${
                      translation.status === "done"
                        ? "bg-green-500/15 text-green-400"
                        : translation.status === "progress"
                        ? "bg-yellow-500/15 text-yellow-400"
                        : "bg-zinc-500/15 text-zinc-400"
                    }
                  `}
                >
                  {translation.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
