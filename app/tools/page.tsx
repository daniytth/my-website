import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="wrap">
          {/* Section Head */}
          <div className="section-head">
            <div className="eyebrow">🔥 eszköztár</div>
            <h1 className="section-title">Eszköztár</h1>
            <p className="section-desc">
              Az általam használt fejlesztői eszközök, nyelvek, környezetek és
              platformok. Ezek alkotják a mindennapi munkám alapját.
            </p>
          </div>

          {/* TOOL GRID */}
          <div className="tool-grid">
            {/* COLUMN 1 */}
            <div>
              <div className="tool-col-title">Fejlesztés</div>
              <div className="lang-tags">
                <span className="lang-tag">TypeScript</span>
                <span className="lang-tag">JavaScript</span>
                <span className="lang-tag">React</span>
                <span className="lang-tag">Next.js</span>
                <span className="lang-tag">Vite</span>
                <span className="lang-tag">Go</span>
                <span className="lang-tag">Python</span>
                <span className="lang-tag">Node.js</span>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div>
              <div className="tool-col-title">Szerverek & Infra</div>
              <div className="lang-tags">
                <span className="lang-tag">Linux</span>
                <span className="lang-tag">Docker</span>
                <span className="lang-tag">Nginx</span>
                <span className="lang-tag">PM2</span>
                <span className="lang-tag">MySQL</span>
                <span className="lang-tag">MongoDB</span>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div>
              <div className="tool-col-title">Discord Fejlesztés</div>
              <div className="lang-tags">
                <span className="lang-tag">Discord.js</span>
                <span className="lang-tag">Discord.py</span>
                <span className="lang-tag">Slash Commands</span>
                <span className="lang-tag">Presence API</span>
              </div>
            </div>

            {/* COLUMN 4 */}
            <div>
              <div className="tool-col-title">Fordítás & Lokalizáció</div>
              <div className="lang-tags">
                <span className="lang-tag">JSON</span>
                <span className="lang-tag">YAML</span>
                <span className="lang-tag">Properties</span>
                <span className="lang-tag">Lang (Skript)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
