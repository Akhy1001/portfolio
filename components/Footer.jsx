"use client";

import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-transparent py-8 relative z-10">
      <div className="container relative flex flex-col sm:flex-row items-center justify-center min-h-[50px]">
        
        {/* Centered Copyright & Tech Stack */}
        <div className="text-xs text-zinc-400 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
          <span suppressHydrationWarning>© {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.</span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="flex items-center gap-1 font-mono text-zinc-300">
            Conçu avec <Heart size={12} className="text-white fill-white inline" /> Next.js 14 & React
          </span>
        </div>

        {/* Scroll to Top Button on the right */}
        <div className="mt-4 sm:mt-0 sm:absolute sm:right-4">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-card border border-white/15 text-zinc-300 hover:text-white hover:border-white transition-all shadow-sm hover:scale-110"
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
