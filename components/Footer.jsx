"use client";

import { personalInfo } from "@/data/portfolioData";
import { Code2, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060911] py-10 relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--theme-primary)] to-[var(--theme-secondary)] flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span className="font-bold text-base text-white">
              &lt;{personalInfo.name} <span className="text-[var(--theme-primary)]">.dev</span> /&gt;
            </span>
          </div>

          {/* Copyright & Tech Stack badge */}
          <div className="text-xs text-gray-400 text-center flex flex-col sm:flex-row items-center gap-2">
            <span suppressHydrationWarning>© {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 font-mono">
              Conçu avec <Heart size={12} className="text-rose-500 fill-rose-500 inline" /> Next.js 14 & React
            </span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-card border border-white/10 text-gray-300 hover:text-white hover:border-[var(--theme-primary)] transition-all"
            aria-label="Retour en haut"
            title="Retour en haut de page"
          >
            <ArrowUp size={18} />
          </button>

        </div>
      </div>
    </footer>
  );
}
