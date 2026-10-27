import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pluginCategories = [
  {
    name: "Ax-os Pluginok:",
    items: [
      "AxRewards",
      "AxKoth",
      "AxAuctions",
      "AxAfkZone",
      "AxInventoryRestore",
      "AxEnvoy",
      "AxBoosters",
      "AxVaults",
      "AxSumo",
      "AxMines",
    ],
  },
  {
    name: "AdvancedPlugin-os PLuginok:",
    items: [
      "AdvancedEnchantments",
      "BattlePass",
      "AdvancedChat",
      "AdvancedCrates",
      "AdvancedHeads",
    ],
  },
  {
    name: "Vanish-es Pluginok:",
    items: ["AdvancedVanish", "PremiumVanish", "SuperVanish"],
  },
  {
    name: "AntiCrash Pluginok:",
    items: ["CoreProtect", "AntiCrash"],
  },
  {
    name: "Anticheat/Exploitfixer-es Pluginok:",
    items: [
      "ExploitFixer",
      "LPX AntiPacketExploit",
      "Vulcan",
      "Grim",
      "Vacan (Spartan)",
      "LightAntiCheat",
      "Themis",
      "Shard",
      "IllegalStacker",
    ],
  },
  {
    name: "PhoenixPlugins-os Pluginok:",
    items: [
      "PhoenixCrates",
      "PhoenixDuels",
      "PhoenixCratesLite",
      "PhoenixDuelsLite",
    ],
  },
  {
    name: "Ládás Pluginok:",
    items: ["CoreCrates", "ExcellentCrates", "CrazyCrates"],
  },
  {
    name: "Chat Pluginok:",
    items: ["CustomChat", "EzColors", "ChatSentinel"],
  },
  {
    name: "Esssentials Pluginok",
    items: [
      "EssentialsX",
      "EssentialsXChat",
      "EssentialsXDiscord",
      "EssentialsXDiscordLink",
      "EssentialsXSpawn",
      "EssentialsXGeoIP",
    ],
  },
  {
    name: "Szerver Kezeléses Pluginok:",
    items: [
      "Plugin Hide Pro",
      "Plugin Hide Free",
      "ProAntiTab",
      "CraftingStore",
      "UltraBar",
      "Head-Database",
      "Skulls",
      "Haven",
      "Haven Simplified",
      "Maintenance",
      "Luckperms",
      "PowerRanks",
      "OldCombatMechanics",
      "PlugmanX",
      "UPM",
      "PluginManager",
      "PlaceholderAPI",
      "EpicRename",
      "DeluxeHub",
    ],
  },
  {
    name: "Hologramos Pluginok:",
    items: ["FancyHolograms", "DecentHolograms", "ajLeaderBoards"],
  },
  {
    name: "ScoreBoard-os / TAB-os Pluginok:",
    items: ["SimpleScore", "FeatherBoard", "TAB"],
  },
  {
    name: "Via-s Pluginok:",
    items: [
      "ViaVersion",
      "ViaBackwards",
      "ViaRewind",
      "ViaAprilFools",
      "ViaVersionStatus",
    ],
  },
  {
    name: "NPC-s Pluginok:",
    items: ["ShopKeepers", "FancyNpcs", "Citizens", "Znpcs"],
  },
  {
    name: "GUI-s Pluginok:",
    items: ["DeluxeMenus", "AdminGUI", "BossShopPro", "zMenus"],
  },
  {
    name: "Játékos Pluginok:",
    items: [
      "ChatGames",
      "ChatGames Premium",
      "KingdomsX",
      "UltimateAirDrops",
      "PlayerKits2",
      "Gangs+",
    ],
  },
  {
    name: "Combat-os Pluginok:",
    items: ["CombatLogX", "DeluxeCombat", "PvPManager", "EternalComabat"],
  },
  {
    name: "Shop-os Pluginok",
    items: [
      "AuctionsHouse (Ingyenes)",
      "AuctionsHouse (Fizetős)",
      "zAuctionsHouse",
      "AzAuctions",
    ],
  },
  {
    name: "Világ Kezeléses Pluginok:",
    items: [
      "WorldEdit",
      "FancyWorlds",
      "MultiverseCore",
      "FastAsncyWorldEdit",
      "PlotSquared",
      "WorldGuard",
    ],
  },
  {
    name: "Skript-es Dolgok:",
    items: [
      "Skript",
      "SkBee",
      "skript-placeholders",
      "skript-reflect",
      "DiSky",
    ],
  },
  {
    name: "Moderációs Pluginok:",
    items: [" Litebans", "LibertyBans", "AdvancedBans", "StaffModeX"],
  },
  {
    name: "Texturás Pluginok (Nincsen Annyi Tapasztalatom Velük):",
    items: ["ItemsAdder", "Oraxen", "Nexo", "ResourceManager", "ImageEmojis"],
  },
  {
    name: "Discord-os Pluginok:",
    items: ["DiscordSRV", "DiscordSRVUtils"],
  },
];

const clients = [
  {
    name: "Lunar Client",
    description:
      "PvP és általános használat. Támogatja a Modrinth és a Curseforge-os modokat és modpackeket.",
  },
  {
    name: "Dawn Client (Feather Client)",
    description: "Több éves használat. Csak a Modrinth-ot támogatja.",
  },
  {
    name: "CurseForge",
    description: "Modpackek és modok kezelése.",
  },
  {
    name: "Modrinth App",
    description:
      "Szintén modpackek és modok kezelése, de valamennyivel jobb moderációja van.",
  },
  {
    name: "SKLauncher",
    description: "Nemrég kezdtem használni.",
  },
  {
    name: "TLauncher",
    description:
      "Mindig ez szokott lenni nekem az altok használatára, de annyit nem használom ezt.",
  },
  {
    name: "ATLauncher",
    description:
      "Egyszer használtam, ez támogatja a Curseforge és Modrinth modokat és modpackeket is, de ennek is van saját oldala.",
  },
  {
    name: "GDLauncher",
    description:
      "Egyszer használtam. Támogatja a Modrinth és a Curseforge modokat és modpackeket.",
  },
  {
    name: "MutliMC (Prism Launcher)",
    description:
      "Ezt is egyszer használtam, azért van itt a Prism is mert kompleten ugyan olyan a kinézete.",
  },
  {
    name: "NoRisk",
    description:
      "Egyszer használtam, de támogatja tudtommal a Modrinth-es modokat.",
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

            <h1 className="section-title">Tapasztalatok</h1>

            <p className="max-w-3xl text-textMuted">
              Több év tapasztalatom van Minecraft szerverek konfigurálásában,
              fordításában, hibakeresésében és üzemeltetésében. Az évek során
              rengeteg népszerű plugin, kliens és szerveres eszköz használatával
              dolgoztam.
            </p>
          </div>

          {/* Statisztika */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            <div className="bg-surface border border-line rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold">80+</div>
              <div className="text-textMuted mt-2">Használt plugin</div>
            </div>

            <div className="bg-surface border border-line rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold">5</div>
              <div className="text-textMuted mt-2">Minecraft kliens</div>
            </div>

            <div className="bg-surface border border-line rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold">Több év</div>
              <div className="text-textMuted mt-2">Szerveres tapasztalat</div>
            </div>
          </div>

          {/* Pluginok */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">🎮 Minecraft Pluginok</h2>

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
            <h2 className="text-3xl font-bold mb-8">🖥️ Minecraft Kliensek</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="bg-surface border border-line rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{client.name}</h3>

                  <p className="text-textMuted">{client.description}</p>
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
