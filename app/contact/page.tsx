import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoMail } from "react-icons/io5";

const contacts = [
  {
    title: "Gmail",
    email: "viragdanielaszlo@gmail.com",
    href: "mailto:viragdanielaszlo@gmail.com",
  },
  {
    title: "Proton Mail",
    email: "viragdaniellaszlo@protonmail.com",
    href: "mailto:viragdaniellaszlo@protonmail.com",
  },
  {
    title: "Outlook",
    email: "viragdaniel@outlook.com",
    href: "mailto:viragdaniel@outlook.com",
  },
  {
    title: "Ghosty Support",
    email: "support@ghostybot.hu",
    href: "mailto:support@ghostybot.hu",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Section Head */}
          <div className="mb-14">
            <div className="text-flame uppercase tracking-[0.14em] text-xs font-mono mb-4">
              🔥 kapcsolat
            </div>

            <h1 className="section-title">
              Elérhetőségek
            </h1>

            <p className="max-w-2xl text-textMuted">
              Ha kérdésed van, segítségre van szükséged vagy egy projekttel
              kapcsolatban szeretnél megkeresni, az alábbi címeken elérsz.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {contacts.map((contact) => (
              <a
                key={contact.email}
                href={contact.href}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-bgCard border border-border hover:border-flame/50 transition-all duration-300 hover:shadow-lg hover:shadow-flame/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crimsonBright/15 text-crimsonBright group-hover:bg-crimsonBright/25 transition-colors">
                  <IoMail />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-semibold text-text group-hover:text-flame transition-colors">
                    {contact.title}
                  </h3>

                  <p className="text-sm text-textMuted break-all">
                    {contact.email}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
