"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Code2,
  Terminal,
  Copy,
  Check,
  ArrowRight,
  Download,
  Smartphone,
  Globe,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("anas.config.ts");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    "anas.config.ts": `const developerProfile = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  specialties: [
    "Web Applications (Next.js 14, React)",
    "Mobile Native Cross-Platform (React Native, Expo)",
    "API & Cloud Architecture (Node.js, PostgreSQL)"
  ],
  passion: "Créer des interfaces fluides & des apps scalables",
  location: "${personalInfo.location}",
  status: "Available for freelance & full-time"
};`,
    "stack.json": `{
  "core": ["React 18", "Next.js 14 App Router", "React Native"],
  "languages": ["TypeScript", "JavaScript ES2024"],
  "styling": ["Tailwind CSS", "CSS Modules", "Framer Motion"],
  "backend": ["Node.js", "Express", "Prisma", "Supabase"],
  "architecture": ["Serverless", "Microservices", "REST & GraphQL"]
}`,
    "bio.md": `# Bonjour ! Je suis ${personalInfo.name} 👋

${personalInfo.bio}

- ⚡ Réactivité maximale et code propre
- 📱 Applications mobiles iOS & Android publiées
- 🚀 Optimisation SEO & performances Lighthouse 100/100`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mainTechs = [
    { name: "React 18", icon: "⚛️" },
    { name: "Next.js 14", icon: "▲" },
    { name: "Swift", icon: "🍎" },
    { name: "TypeScript", icon: "📘" },
    { name: "C++ / Qt", icon: "⚙️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Avatar & Status pill */}
            <div className="flex items-center gap-4">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-12 h-12 rounded-full border-2 border-[var(--theme-primary)] shadow-lg shadow-[var(--theme-glow)] object-cover"
              />
              <div className="status-badge inline-flex items-center gap-2">
                <span className="status-dot"></span>
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Développeur <br />
              <span className="text-gradient">Web & Applications</span> <br />
              React & Next.js
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Floating Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {mainTechs.map((tech) => (
                <span key={tech.name} className="glass-pill">
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects" className="btn-primary text-base py-3.5 px-7">
                <span>Explorer les Projets</span>
                <ArrowRight size={18} />
              </a>
              
              <a href="#simulator" className="btn-secondary text-base py-3.5 px-7">
                <Smartphone size={18} className="text-[var(--theme-primary)]" />
                <span>Tester la Démo Live</span>
              </a>
            </div>

            {/* Quick Status Pill */}
            <div className="pt-6 border-t border-white/10 mt-2">
              <div className="glass-pill border border-white/15 px-4 py-2 text-sm text-gray-300 font-mono inline-flex items-center gap-2">
                <span>🎓</span>
                <span>Formation : <strong className="text-white">{personalInfo.yearsExperience}</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal */}
          <div className="lg:col-span-5">
            <div className="glass-card overflow-hidden shadow-2xl border border-white/15 rounded-2xl relative group">
              
              {/* Terminal Window Bar */}
              <div className="bg-[#0B0F19] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Terminal size={13} className="text-[var(--theme-primary)]" />
                    anas-dev-cli ~ v2.4
                  </span>
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopyCode}
                  className="text-gray-400 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-mono"
                  title="Copier le code"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-400" />
                      <span className="text-green-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Tabs */}
              <div className="bg-[#0F1626] px-3 pt-2 flex items-center gap-1 border-b border-white/5 font-mono text-xs overflow-x-auto">
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === tab
                        ? "bg-[#090D16] text-[var(--theme-primary)] border-t border-x border-white/10 font-semibold"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }`}
                  >
                    <Code2 size={13} />
                    <span>{tab}</span>
                  </button>
                ))}
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-xs sm:text-sm bg-[#090D16] text-gray-200 overflow-x-auto min-h-[260px] max-h-[340px] leading-relaxed">
                <pre className="text-gray-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="bg-[#0B0F19] px-4 py-2 text-[11px] font-mono text-gray-400 flex items-center justify-between border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to compile & ship
                </span>
                <span className="text-gray-500">UTF-8 | TypeScript</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
