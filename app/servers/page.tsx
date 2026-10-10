import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServersPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="wrap">
          {/* Section Head */}
          <div className="section-head">
            <div className="eyebrow">🔥 szerverek</div>
            <h1 className="section-title">Szerverek</h1>
            <p className="section-desc">
              Itt találod az általam kezelt, konfigurált vagy fejlesztett Discord és Minecraft szervereket.
            </p>
          </div>

          {/* SERVER GRID */}
          <div className="server-grid">

            {/* SERVER CARD 1 */}
            <div className="server-card">
              <div className="server-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z" />
                </svg>
              </div>
              <div>
                <h3>Ghosty | Bot Support</h3>
                <p className="text-text-muted text-sm mt-1">
                  A Ghosty support szerverre, itt a frissítések és tesztelések folynak.
                </p>
              </div>
            </div>

            {/* SERVER CARD 2 */}
            <div className="server-card">
              <div className="server-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
                </svg>
              </div>
              <div>
                <h3>Mr. Moneky | Support</h3>
                <p className="text-text-muted text-sm mt-1">
                  A Mr. Monkey support szerverre, itt a bot frissítései, hírei és tesztelései folynak.
                </p>
              </div>
            </div>

            {/* SERVER CARD 3 */}
            <div className="server-card">
              <div className="server-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v6H3V3zm0 8h18v10H3V11z" />
                </svg>
              </div>
              <div>
                <h3>Minecraft Infrastruktúra</h3>
                <p className="text-text-muted text-sm mt-1">
                  Még Minecraft szerver fejlesztéssel is foglalkozok. A tapasztalat oldalon ott lesznek a pluginok. :D
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
