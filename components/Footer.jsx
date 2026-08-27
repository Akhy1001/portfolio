"use client";

import { personalInfo } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-transparent py-8 relative z-10">
      <div className="container relative flex flex-col sm:flex-row items-center justify-center min-h-[50px]">
        
        {/* Centered Copyright */}
        <div className="text-xs text-zinc-400 text-center flex items-center justify-center">
          <span suppressHydrationWarning>© {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.</span>
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
