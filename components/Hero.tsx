"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1120px] mx-auto px-6 grid gap-12 md:grid-cols-[1.15fr_0.85fr] items-center">

        {/* LEFT SIDE */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-flame uppercase tracking-[0.14em] text-xs font-mono mb-4">
            <span className="w-[22px] h-[1px] bg-flame"></span>
            🔥 discord botok · minecraft · fordítások
          </div>

          {/* Title */}
          <h1 className="font-display text-[clamp(3.2rem,8vw,5.6rem)] leading-[0.92] bg-gradient-to-b from-text to-gold bg-clip-text text-transparent">
            DANIYT_TH
          </h1>

          {/* Lead paragraph */}
          <p className="mt-5 max-w-[480px] text-text-muted text-[1.08rem] font-body">
            Fejlesztő vagyok, aki <strong className="text-text font-bold">Discord botokat</strong> épít,
            <strong className="text-text font-bold"> Minecraft szerver-infrastruktúrát</strong> tart karban,
            és fordítói munkával viszi át a kedvenc eszközeit magyar nyelvre.
            Millie a rezidens démon kabalám — ő vigyáz a projektjeimre.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius-card)] font-mono text-sm font-semibold
                         bg-gradient-to-br from-crimson-bright to-crimson-deep text-white
                         shadow-[0_6px_24px_-8px_rgba(214,69,60,0.7)]
                         hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-8px_rgba(255,122,46,0.6)]
                         transition"
            >
              <Play className="w-4 h-4" />
              Projektek Megtekintése
            </a>

            <a
              href="https://github.com/daniytth"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius-card)] font-mono text-sm font-semibold
                         border border-line text-text-muted hover:text-gold hover:border-gold-dim transition"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – Portrait */}
        <div className="relative flex items-center justify-center">
          {/* Glow */}
          <div
            className="absolute w-[340px] h-[340px] rounded-full
                       bg-[radial-gradient(circle,rgba(255,122,46,0.55),rgba(214,69,60,0.25)_45%,transparent_72%)]
                       blur-[10px] animate-flicker"
          ></div>

          {/* Portrait */}
          <Image
            src="https://cdn.discordapp.com/avatars/1288129332455149619/e5978936b5dfcd8437aa90529007bdab.webp?size=1024"
            alt="Portrait"
            width={290}
            height={290}
            loading="eager"
            className="relative z-10 w-[290px] h-[290px] object-cover rounded-[26px]
                       border-[2px] border-[rgba(243,206,91,0.35)]
                       shadow-[0_20px_60px_-14px_rgba(0,0,0,0.7),0_0_0_8px_rgba(23,16,14,0.6)]"
          />

          {/* Tag */}
          <div className="absolute bottom-[-14px] right-[14px] z-20 bg-surface-2 border border-line
                          text-gold font-mono text-[0.72rem] px-3 py-1.5 rounded-pill flex items-center gap-2">
            👹 Millie
          </div>
        </div>
      </div>
    </section>
  );
}
