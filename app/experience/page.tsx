import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pluginCategories = [
  {
    name: "Adminisztráció & Jogosultságok",
    items: [
      "AdminGUI",
      "AdvancedBans",
      "Essentials",
      "EssentialsChat",
      "EssentialsDiscord",
      "EssentialsDiscordLink",
      "EssentialsSpawn",
      "LiteBans",
      "LibertyBans",
      "LuckPerms",
      "SuperVanish",
      "PlugManX",
      "Themis",
      "Vulcan",
      "ProAntiTab",
    ],
  },

  {
    name: "Világkezelés",
    items: [
      "WorldEdit",
      "FastAsyncWorldEdit",
      "WorldGuard",
      "Multiverse-Core",
      "FancyWorlds",
      "PlotSquared",
      "OldCombatMechanics",
    ],
  },

  {
    name: "NPC-k, Hologramok & GUI",
    items: [
      "Citizens",
      "FancyNPCs",
      "DecentHolograms",
      "FancyHolograms",
      "DeluxeMenus",
      "DeluxeHub",
      "UltraBar",
      "SimpleScore",
      "FeatherBoard",
      "TAB",
      "PlaceholderAPI",
      "Head-Database",
    ],
  },

  {
    name: "Piac & Gazdaság",
    items: [
      "AuctionHouse",
      "AxAuctionHouse",
      "AxTrade",
      "CraftingStore",
      "ShopKeepers",
      "PlayerKits2",
      "GangsPlus",
    ],
  },

  {
    name: "Crates & Jutalmazás",
    items: [
      "AdvancedCrates",
      "CoreCrates",
      "CrazyCrates",
      "ExcellentCrates",
      "PhoenixCrates",
      "PhoenixCratesLite",
      "AxRewards",
      "UltimateAirdrops",
    ],
  },

  {
    name: "Prison & Survival",
    items: [
      "AxMines",
      "CataMines",
      "AxGens",
      "AxBoosters",
      "AxVaults",
      "AxEnvoy",
      "AxKoth",
      "AxAfkZone",
      "AxInventoryRestore",
      "UltimateStatsReset",
      "KingdomsX",
    ],
  },

  {
    name: "Chat & Közösség",
    items: [
      "AdvancedChat",
      "CustomChat",
      "ChatGames",
      "ChatGames-Premium",
      "EzColors",
      "EpicRename",
      "CombatLogX",
      "Skulls",
    ],
  },

  {
    name: "Enchant & Egyéb",
    items: [
      "AdvancedEnchantments",
      "enchant3x3",
      "Plugin Hide Pro",
      "Plugin Hide Free",
      "UPM",
      "ViaVersion",
      "ViaBackwards",
      "SkinsRestorer",
      "Haven",
      "Haven Simplified",
      "ajLeaderboards",
    ],
  },

  {
    name: "Skript Ökoszisztéma",
    items: [
      "Skript",
      "SkBee",
      "skript-placeholders",
      "skript-reflect",
      "DiSky",
    ],
  },

  {
    name: "Phoenix Suite",
    items: [
      "PhoenixCrates",
      "PhoenixCratesLite",
      "PhoenixDuels",
      "PhoenixDuelsLite",
    ],
  },
];

const clients = [
  {
    name: "CurseForge",
    description: "Modpackok és modok kezelése.",
  },
  {
    name: "Lunar Client",
    description: "PvP és általános használat.",
  },
  {
    name: "Feather Client (Dawn Client)",
    description: "Több éves használat.",
  },
  {
    name: "Modrinth App",
    description: "Modern modkezelő alkalmazás.",
  },
  {
    name: "SKLauncher",
    description: "Nemrég kezdtem használni.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Hero */}
          <div className="mb-16">
            <div className="text-flame uppercase tracking-[0.14em] text-xs font-mono mb-4">
              🔥 tapasztalatok
            </div>

            <h1 className="section-title">
              Tapasztalatok
            </h1>

            <p className="max-w-3xl text-textMuted">
              Több év tapasztalatom van Minecraft szerverek
              konfigurálásában, fordításában, hibakeresésében és
              üzemeltetésében. Az évek során rengeteg népszerű plugin,
              kliens és szerveres eszköz használatával dolgoztam.
            </p>
          </div>

          {/* Statisztika */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            <div className="bg-surface border border-line rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold">80+</div>
              <div className="text-textMuted mt-2">
                Használt plugin
              </div>
            </div>

            <div className="bg-surface border border-line rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold">5</div>
              <div className="text-textMuted mt-2">
                Minecraft kliens
              </div>
            </div>

            <div className="bg-surface border border-line rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold">Több év</div>
              <div className="text-textMuted mt-2">
                Szerveres tapasztalat
              </div>
            </div>
          </div>

          {/* Pluginok */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              🎮 Minecraft Pluginok
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {pluginCategories.map((category) => (
                <div
                  key={category.name}
                  className="bg-surface border border-line rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gold mb-4">
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((plugin) => (
                      <span
                        key={plugin}
                        className="px-3 py-1 rounded-full border border-line text-sm text-textMuted"
                      >
                        {plugin}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kliensek */}
          <section>
            <h2 className="text-3xl font-bold mb-8">
              🖥️ Minecraft Kliensek
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="bg-surface border border-line rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {client.name}
                  </h3>

                  <p className="text-textMuted">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
