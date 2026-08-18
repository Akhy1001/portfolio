"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Code2, Menu, X, Sparkles, Send } from "lucide-react";

export default function Navbar({ currentTheme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Formation", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const themeOptions = [
    { id: "monochrome", color: "#FFFFFF", label: "Blanc Épuré" },
    { id: "silver", color: "#E4E4E7", label: "Argent Métal" },
    { id: "charcoal", color: "#71717A", label: "Gris Anthracite" },
    { id: "minimal", color: "#27272A", label: "Noir Profond" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-2xl" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo with GitHub Avatar */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[var(--theme-primary)] shadow-lg shadow-[var(--theme-glow)] transition-transform group-hover:scale-110 shrink-0">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg tracking-tight group-hover:text-[var(--theme-primary)] transition-colors">
              &lt;{personalInfo.name} <span className="text-[var(--theme-primary)]">.dev</span> /&gt;
            </span>
            <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline-block">Web & Mobile React</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-2 rounded-full border border-white/15">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side items: Theme Switcher + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Color Picker */}
          <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full border border-white/15" title="Changer la couleur d'accent">
            <Sparkles size={14} className="text-zinc-400 mr-1" />
            {themeOptions.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`w-5 h-5 rounded-full transition-transform hover:scale-125 ${
                  currentTheme === t.id ? "ring-2 ring-white scale-110" : "opacity-60"
                }`}
                style={{ backgroundColor: t.color }}
                title={t.label}
              />
            ))}
          </div>

          {/* Contact Button */}
          <a href="#contact" className="btn-primary py-2 px-5 text-sm">
            <span>Me Contacter</span>
            <Send size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl glass-card text-gray-200 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-6 py-6 mt-3 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-200 hover:text-[var(--theme-primary)] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-400 font-mono">Accent couleur:</span>
            <div className="flex items-center gap-2">
              {themeOptions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-6 h-6 rounded-full ${
                    currentTheme === t.id ? "ring-2 ring-white" : "opacity-70"
                  }`}
                  style={{ backgroundColor: t.color }}
                />
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-center justify-center py-3 mt-2 w-full"
          >
            <span>Me Contacter</span>
            <Send size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
