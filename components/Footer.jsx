"use client";

import { personalInfo } from "@/data/portfolioData";
import { Code2, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-[var(--bg-primary)] py-10 relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span className="font-bold text-base text-slate-900">
              &lt;{personalInfo.name} <span className="text-slate-900 font-extrabold">.dev</span> /&gt;
            </span>
          </div>

          {/* Copyright & Tech Stack badge */}
          <div className="text-xs text-slate-500 text-center flex flex-col sm:flex-row items-center gap-2">
            <span suppressHydrationWarning>© {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 font-mono">
              Conçu avec <Heart size={12} className="text-slate-900 fill-slate-900 inline" /> Next.js 14 & React
            </span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-card border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100 transition-all shadow-sm"
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
