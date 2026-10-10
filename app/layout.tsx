import type { Metadata } from "next";
import { Bebas_Neue, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// 1. Betűtípusok példányosítása és CSS változókhoz rendelése
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400", // A Bebas Neue alapértelmezetten csak 400-as súlyban érhető el
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  // weight: ["400", "500", "600", "700"], // Opcionális: konkrét súlyok megadása a gyorsabb betöltésért
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"], // Opcionális
});

export const metadata: Metadata = {
  title: "Daniyt_th - Fejlesztő/Moderátor",
  description: "Fejlesztő vagyok, aki Discord botokat épít, Minecraft szerver-infrastruktúrát tart karban, és fordítói munkával viszi át a kedvenc eszközeit magyar nyelvre. Millie a rezidens démon kabalám — ő vigyáz a projektjeimre.",
  icons: "https://cdn.discordapp.com/avatars/1288129332455149619/e5978936b5dfcd8437aa90529007bdab.webp?size=1024"
};

// 2. A children típusa alapértelmezetten React.ReactNode (a LayoutProps helyett, hacsak nincs saját importod rá)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="hu"
      className={`${bebasNeue.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      {/* 3. Alapértelmezett betűtípus beállítása a body-n (pl. manrope) */}
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
