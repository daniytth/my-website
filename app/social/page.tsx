import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  FaYoutube,
  FaTwitch,
  FaGithub,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function CommunityPage() {
  const links = [
    {
      title: "YouTube – ThVirágDani",
      description: "@ThViragDaniel",
      href: "https://www.youtube.com/@ThViragDaniel",
      icon: FaYoutube,
      color: "text-red-500",
    },
    {
      title: "YouTube – Undertale Music",
      description: "@undertalemusic10",
      href: "https://www.youtube.com/@undertalemusic10",
      icon: FaYoutube,
      color: "text-red-500",
    },
    {
      title: "YouTube – Undertale Player",
      description: "@undertale-player11",
      href: "https://www.youtube.com/@undertale-player11",
      icon: FaYoutube,
      color: "text-red-500",
    },
    {
      title: "YouTube – 9 & Dani Gaming",
      description: "@9AndDaniGaming",
      href: "https://www.youtube.com/@9AndDaniGaming",
      icon: FaYoutube,
      color: "text-red-500",
    },
    {
      title: "Twitch",
      description: "thviragdaniel",
      href: "https://twitch.tv/thviragdaniel",
      icon: FaTwitch,
      color: "text-purple-500",
    },
    {
      title: "GitHub",
      description: "daniytth",
      href: "https://github.com/daniytth",
      icon: FaGithub,
      color: "text-gray-400",
    },
    {
      title: "Instagram",
      description: "@daniyt_th",
      href: "https://www.instagram.com/daniyt_th/",
      icon: FaInstagram,
      color: "text-pink-500",
    },
    {
      title: "TikTok",
      description: "@.daniyt_th",
      href: "https://www.tiktok.com/@.daniyt_th",
      icon: FaTiktok,
      color: "text-white",
    },
    {
      title: "Fő osu!",
      description: "Profil #38252426",
      href: "https://osu.ppy.sh/users/38252426",
      icon: () => <span className="text-2xl">🎵</span>,
      color: "text-orange-500",
    },
    {
      title: "2. osu!",
      description: "Profil #40136516",
      href: "https://osu.ppy.sh/users/40136516",
      icon: () => <span className="text-2xl">🎮</span>,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-14">
            <div className="text-flame uppercase tracking-[0.14em] text-xs font-mono mb-4">
               közösség
            </div>

            <h1 className="section-title">
              Közösségi Platformok
            </h1>

            <p className="max-w-2xl text-textMuted">
              Itt találsz meg a különböző platformokon. YouTube csatornák,
              Twitch, GitHub, közösségi média és játékprofilok egy helyen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-bgCard border border-border hover:border-flame/50 transition-all duration-300 hover:shadow-lg hover:shadow-flame/5"
                >
                  <div
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      bg-white/5 group-hover:bg-white/10 transition-colors
                      ${link.color ?? "text-text"}
                    `}
                  >
                    <Icon />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-semibold text-base group-hover:text-flame transition-colors">
                      {link.title}
                    </h3>

                    <p className="text-sm text-textMuted mt-0.5">
                      {link.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
