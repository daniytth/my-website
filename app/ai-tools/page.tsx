import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="wrap">

          {/* Section Head */}
          <div className="section-head">
            <div className="eyebrow">🔥 ai eszközök</div>
            <h1 className="section-title">AI Eszközök</h1>
            <p className="section-desc">
              Az általam használt mesterséges intelligencia modellek és eszközök.
              Mindegyik másban erős: kódolás, fordítás, ötletelés vagy gyors válaszok.
            </p>
          </div>

          {/* AI LIST */}
          <div className="translation-list">

            {/* ChatGPT */}
            <div className="t-row">
              <div>
                <span className="t-name">ChatGPT</span>
                <span className="t-sub">Gyors kérdések, alkalmi beszélgetések, ritkán kódolás</span>
              </div>
              <span className="status-pill done">
                <span className="dot"></span>
                Aktív
              </span>
            </div>

            {/* Mistral (Vibe) */}
            <div className="t-row">
              <div>
                <span className="t-name">Mistral (Vibe)</span>
                <span className="t-sub">Kérdések, néha kódolás, segítségkérés</span>
              </div>
              <span className="status-pill done">
                <span className="dot"></span>
                Aktív
              </span>
            </div>

            {/* Gemini */}
            <div className="t-row">
              <div>
                <span className="t-name">Gemini</span>
                <span className="t-sub">Kérdések, kódolás, ötletelés, válaszok</span>
              </div>
              <span className="status-pill done">
                <span className="dot"></span>
                Aktív
              </span>
            </div>

            {/* DeepSeek */}
            <div className="t-row">
              <div>
                <span className="t-name">DeepSeek</span>
                <span className="t-sub">Fordítás, néha kódolás</span>
              </div>
              <span className="status-pill done">
                <span className="dot"></span>
                Aktív
              </span>
            </div>

            {/* Qwen */}
            <div className="t-row">
              <div>
                <span className="t-name">Qwen</span>
                <span className="t-sub">Nagyon ritka használat</span>
              </div>
              <span className="status-pill stopped">
                <span className="dot"></span>
                Ritka
              </span>
            </div>

            {/* Claude */}
            <div className="t-row">
              <div>
                <span className="t-name">Claude</span>
                <span className="t-sub">Kódolás, a weboldal fejlesztése, ritkán kérdések</span>
              </div>
              <span className="status-pill done">
                <span className="dot"></span>
                Aktív
              </span>
            </div>

            {/* Microsoft Copilot */}
            <div className="t-row">
              <div>
                <span className="t-name">Microsoft Copilot</span>
                <span className="t-sub">Kódolás, kérdések — ritkábban, mint régen</span>
              </div>
              <span className="status-pill done">
                <span className="dot"></span>
                Aktív
              </span>
            </div>

            {/* GitHub Copilot */}
            <div className="t-row">
              <div>
                <span className="t-name">GitHub Copilot</span>
                <span className="t-sub">Kódolás — VS Code, Insiders, Zed</span>
              </div>
              <span className="status-pill done">
                <span className="dot"></span>
                Aktív
              </span>
            </div>

            {/* Cursor AI */}
            <div className="t-row">
              <div>
                <span className="t-name">Cursor AI</span>
                <span className="t-sub">Kódolás — nagyon ritkán</span>
              </div>
              <span className="status-pill stopped">
                <span className="dot"></span>
                Ritka
              </span>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
