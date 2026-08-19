"use client";

import { useState } from "react";
import { techStack } from "@/data/portfolioData";
import { Sparkles, Code2 } from "lucide-react";
import {
  TypeScriptIcon,
  NextjsIcon,
  ReactIcon,
  TailwindIcon,
  AngularIcon,
  SwiftIcon,
  ReactNativeIcon,
  CPlusPlusIcon,
  NodeJsIcon,
  SupabaseIcon,
  GitIcon,
  VercelIcon,
  NetworkIcon,
  TestFlaskIcon,
  MobileUXIcon,
} from "./TechIcons";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = ["Tous", ...techStack.map((item) => item.category)];

  const getSkillIcon = (skillName) => {
    switch (skillName) {
      case "TypeScript":
        return <TypeScriptIcon className="w-6 h-6" />;
      case "Next.js 14":
      case "Next.js":
        return <NextjsIcon className="w-6 h-6" />;
      case "React.js":
      case "React":
        return <ReactIcon className="w-6 h-6" />;
      case "Tailwind CSS & Vite":
      case "Tailwind CSS":
        return <TailwindIcon className="w-6 h-6" />;
      case "Angular":
        return <AngularIcon className="w-6 h-6" />;
      case "Swift & SwiftUI":
      case "Swift":
        return <SwiftIcon className="w-6 h-6" />;
      case "React Native & Expo":
        return <ReactNativeIcon className="w-6 h-6" />;
      case "Mobile UI / UX":
        return <MobileUXIcon className="w-6 h-6" />;
      case "C++ & Qt 6":
      case "C++":
        return <CPlusPlusIcon className="w-6 h-6" />;
      case "Node.js & Express":
        return <NodeJsIcon className="w-6 h-6" />;
      case "Supabase & PostgreSQL":
        return <SupabaseIcon className="w-6 h-6" />;
      case "Programmation Réseau":
        return <NetworkIcon className="w-6 h-6" />;
      case "Git & GitHub":
        return <GitIcon className="w-6 h-6" />;
      case "Vercel & Cloud":
        return <VercelIcon className="w-6 h-6" />;
      case "Tests & Qualité Code":
        return <TestFlaskIcon className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6 text-white" />;
    }
  };

  const filteredCategories =
    activeCategory === "Tous"
      ? techStack
      : techStack.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 glass-pill mb-4 border border-white/20">
            <Sparkles size={14} className="text-white" />
            <span>Expertise Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Compétences & <span className="text-gradient">Stack Technique</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Ma stack technique acquise à travers mes formations et mes réalisations concrètes, axée sur le développement Full Stack, le mobile et les architectures modernes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-white text-black font-bold shadow-lg shadow-white/20"
                  : "glass-card text-zinc-300 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="glass-card p-6 text-left border border-white/15 bg-white/[0.03]">
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10 flex items-center justify-between">
                <span>{catGroup.category}</span>
                <span className="text-xs font-mono text-zinc-400 font-normal">
                  {catGroup.skills.length} technologies
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all text-left flex items-start gap-3.5 group shadow-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                      {getSkillIcon(skill.name)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
