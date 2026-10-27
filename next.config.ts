import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@ThViragDaniel",
        permanent: true,
      },
      {
        source: "/second-youtube",
        destination: "https://www.youtube.com/@undertale-player11",
        permanent: true,
      },
      {
        source: "/third-youtube",
        destination: "https://www.youtube.com/@undertalemusic10",
        permanent: true,
      },
      {
        source: "/fourth-youtube",
        destination: "https://www.youtube.com/@9AndDaniGaming",
        permanent: true,
      },
      {
        source: "/dantix",
        destination: "https://blackdaniel.eu",
        permanent: true,
      },
      {
        source: "/nine",
        destination: "https://ninetails.page",
        permanent: true,
      },
      {
        source: "/ghosty",
        destination: "https://ghostybot.hu",
        permanent: true,
      },
      {
        source: "/eclipse",
        destination: "https://projecteclipse.me",
        permanent: true,
      },
      {
        source: "/mrmonkey",
        destination: "https://mrmonkeybot.hu",
        permanent: true,
      },
      {
        source: "/zortexia",
        destination: "https://zortexia.hu",
        permanent: true,
      },
      {
        source: "/cubanetwork",
        destination: "https://cubanetwork.hu",
        permanent: true,
      },
      {
        source: "/zortexia-dc",
        destination: "https://discord.gg/dBfX7HaprW",
        permanent: true,
      },
      {
        source: "/zortexia-discord",
        destination: "https://discord.gg/dBfX7HaprW",
        permanent: true,
      },
      {
        source: "/cubanetwork-dc",
        destination: "https://discord.gg/UTFNT745tS",
        permanent: true,
      },
      {
        source: "/cubanetwork-discord",
        destination: "https://discord.gg/UTFNT745tS",
        permanent: true,
      },
      {
        source: "/ghosty-dc",
        destination: "https://discord.gg/NAGYPxpSe8",
        permanent: true,
      },
      {
        source: "/ghosty-discord",
        destination: "https://discord.gg/NAGYPxpSe8",
        permanent: true,
      },
      {
        source: "/mrmonkey-dc",
        destination: "https://discord.gg/fkMmXNCD7x",
        permanent: true,
      },
      {
        source: "/mrmonkey-discord",
        destination: "https://discord.gg/fkMmXNCD7x",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
