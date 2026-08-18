"use client";

import { useState } from "react";
import { techStack } from "@/data/portfolioData";
import {
  Code2,
  Zap,
  FileCode,
  Palette,
  Layers,
  Smartphone,
  Box,
  Layout,
  Cpu,
  Server,
  Database,
  GitBranch,
  Cloud,
  GitCommit,
  Container,
  Globe,
  CheckCircle,
  Sparkles,
  Layers3,
  Flame,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = ["Tous", ...techStack.map((item) => item.category)];

  const getIconComponent = (iconName) => {
    const iconMap = {
      Code2: <Code2 size={20} className="text-white" />,
      Zap: <Zap size={20} className="text-zinc-200" />,
      FileCode: <FileCode size={20} className="text-white" />,
      Palette: <Palette size={20} className="text-zinc-300" />,
      Layers: <Layers size={20} className="text-zinc-200" />,
      Smartphone: <Smartphone size={20} className="text-white" />,
      Box: <Box size={20} className="text-zinc-300" />,
      Layout: <Layout size={20} className="text-zinc-200" />,
      Cpu: <Cpu size={20} className="text-white" />,
      Server: <Server size={20} className="text-zinc-200" />,
      Database: <Database size={20} className="text-white" />,
      GitBranch: <GitBranch size={20} className="text-zinc-300" />,
      Cloud: <Cloud size={20} className="text-white" />,
      GitCommit: <GitCommit size={20} className="text-zinc-200" />,
      Container: <Container size={20} className="text-white" />,
      Globe: <Globe size={20} className="text-zinc-300" />,
      CheckCircle: <CheckCircle size={20} className="text-white" />,
    };
    return iconMap[iconName] || <Code2 size={20} className="text-white" />;
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
          <div className="inline-flex items-center gap-2 glass-pill mb-4 border border-[var(--theme-primary)]/30">
            <Sparkles size={14} className="text-[var(--theme-primary)]" />
            <span>Expertise Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Compétences & <span className="text-gradient">Stack Technique</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Un écosystème d'outils modernes maîtrisés pour concevoir des applications web réactives et des expériences mobiles haut de gamme.
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
            <div key={catGroup.category} className="glass-card p-6 text-left">
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10 flex items-center justify-between">
                <span>{catGroup.category}</span>
                <span className="text-xs font-mono text-zinc-400 font-normal">
                  {catGroup.skills.length} technologies
                </span>
              </h3>

              <div className="space-y-5">
                {catGroup.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        {getIconComponent(skill.icon)}
                        <span className="font-semibold text-white text-sm group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 mb-2 pl-7">{skill.description}</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Philosophy Card */}
        <div className="mt-14 glass-card p-8 border border-white/15 bg-white/5 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <Flame size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Performance & Speed</h4>
                <p className="text-xs text-zinc-400">Temps de chargement optimisés sous la seconde, Server Components & bundle minifié.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <Smartphone size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Mobile First & Native</h4>
                <p className="text-xs text-zinc-400">Applications mobiles fluides à 60 FPS avec React Native et gestes tactiles optimisés.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <Code2 size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Clean & Maintainable Code</h4>
                <p className="text-xs text-zinc-400">Typage strict TypeScript, composants réutilisables et architecture modulaire évolutive.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
