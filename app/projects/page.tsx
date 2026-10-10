import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    name: "Ghosty",
    status: "active",
    description: "Discord.js-en futó bot, elsősorban biztonsági fókusszal — anti-alt rendszerrel, invite-cache-eléssel — plusz több más hasznos funkcióval. Jelenleg a válaszrendszer Components V2-re migrál — a régi embedek helyett natív konténer-alapú komponensekre áll át.",
  },
  {
    name: "Mr. Monkey",
    status: "active",
    description: "A Digifan által fejlesztett bot, amelyben én a Components V2 részben segítek be.",
  },
  {
    name: "Eclipse",
    status: "active",
    description: "Nine-nal közösen készülő bot, amely angol, magyar, spanyol és német nyelven is elérhető lesz.",
  },
  {
    name: "Plugin-Translations",
    status: "semi",
    description: "Nem hivatalos plugin fordítások — config és forráskód szinten is.",
  },
  {
    name: "Vinni",
    status: "active",
    description: "Alex232345 által fejlesztett. És a 14v részében bele segítettem",
  },
  {
    name: "Discord-bot-Translations",
    status: "semi",
    description: "Discord botok forráskódjának lefordítása magyar nyelvre.",
  },
  {
    name: "OmniConnect",
    status: "semi",
    description: "Kísérleti összekötő és integrációs projekt.",
  },
  {
    name: "OmniDiscord",
    status: "semi",
    description: "Omni ökoszisztémához kapcsolódó Discord projekt.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-14">
            <div className="text-flame uppercase tracking-[0.14em] text-xs font-mono mb-4">
              🔥 projektek
            </div>

            <h1 className="section-title">
              Projektek
            </h1>

            <p className="max-w-2xl text-textMuted">
              Az általam fejlesztett, karbantartott vagy fordított
              projektek gyűjteménye.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="
                  bg-surface
                  border
                  border-line
                  rounded-2xl
                  p-6
                  transition-all
                  hover:border-goldDim
                  hover:-translate-y-1
                "
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold">
                    {project.name}
                  </h2>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.status === "active"
                        ? "bg-green-500/15 text-green-400"
                        : "bg-yellow-500/15 text-yellow-400"
                    }`}
                  >
                    {project.status === "active"
                      ? "Aktív"
                      : "Nem annyira aktív"}
                  </span>
                </div>

                <p className="text-textMuted text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
