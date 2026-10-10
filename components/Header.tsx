"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(15,10,9,0.72)] border-b border-line">
      <nav className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND */}
        <div className="flex items-center gap-3 text-text font-display tracking-wide">
          <Flame className="w-6 h-6 text-crimson-bright" />
          <span className="text-xl">DANIYT_TH</span>
        </div>

        {/* NAV LINKS (DESKTOP) */}
        <div className="hidden md:flex gap-8 text-sm font-semibold font-body">
          <Link href="/projects" className="text-text-muted hover:text-gold transition">Projektek</Link>
          <Link href="/servers" className="text-text-muted hover:text-gold transition">Szerverek</Link>
          <Link href="/translations" className="text-text-muted hover:text-gold transition">Fordítások</Link>
          <Link href="/tools" className="text-text-muted hover:text-gold transition">Eszköztár</Link>
          <Link href="/ai-tools" className="text-text-muted hover:text-gold transition">AI-k</Link>
          <Link href="/social" className="text-text-muted hover:text-gold transition">Közösség</Link>
          <Link href="/contact" className="text-text-muted hover:text-gold transition">Kapcsolat</Link>
          <Link href="/experience" className="text-text-muted hover:text-gold transition">Tapasztalatok</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-text-muted hover:text-gold transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-bg-alt border-t border-line px-6 py-4 flex flex-col gap-4 text-sm font-semibold font-body">
          <Link href="/projects" className="text-text-muted hover:text-gold transition">Projektek</Link>
          <Link href="/servers" className="text-text-muted hover:text-gold transition">Szerverek</Link>
          <Link href="/translations" className="text-text-muted hover:text-gold transition">Fordítások</Link>
          <Link href="/tools" className="text-text-muted hover:text-gold transition">Eszköztár</Link>
          <Link href="/ai-tools" className="text-text-muted hover:text-gold transition">AI-k</Link>
          <Link href="/social" className="text-text-muted hover:text-gold transition">Közösség</Link>
          <Link href="/contact" className="text-text-muted hover:text-gold transition">Kapcsolat</Link>
          <Link href="/experience" className="text-text-muted hover:text-gold transition">Tapasztalatok</Link>
        </div>
      )}
    </header>
  );
}
