import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
