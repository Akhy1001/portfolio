"use client";

import { education } from "@/data/portfolioData";
import { Sparkles, Calendar, GraduationCap, School, CheckCircle2, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-pill mb-4 border border-[var(--theme-primary)]/30">
            <Sparkles size={14} className="text-[var(--theme-primary)]" />
            <span>Diplômes & Études</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Parcours & <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Mon cursus académique en informatique, réseaux, cybersécurité et développement logiciel.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-white/20 space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative group text-left">
              
              {/* Timeline Node Glow Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-white flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-white/10">
                <GraduationCap size={18} />
              </div>

              {/* Card Content */}
              <div className="glass-card p-6 sm:p-8 border border-white/15 bg-white/5 ml-2 group-hover:border-white/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-sm text-zinc-200 font-semibold flex items-center gap-1.5">
                        <School size={14} className="text-zinc-400" />
                        {item.institution}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">• {item.option}</span>
                    </div>
                  </div>

                  <span className="glass-pill border-white/20 text-xs font-mono self-start sm:self-center shrink-0">
                    <Calendar size={13} className="text-zinc-400" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base mb-5 leading-relaxed">
                  • {item.description}
                </p>

                {/* Skills / Modules tags */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/15 text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Formation Highlights Banner */}
        <div className="max-w-4xl mx-auto mt-14 glass-card p-6 border border-white/15 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center shrink-0 shadow-lg">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Focus : Informatique, Réseaux & Cybersécurité</h4>
              <p className="text-xs text-zinc-400">Apprentissage pratique et projets concrets sous Next.js, C++, React & Swift</p>
            </div>
          </div>

          <div className="glass-pill border-white/30 text-white text-xs shrink-0 font-semibold">
            <CheckCircle2 size={14} className="text-white" />
            <span>Étudiant Actif</span>
          </div>
        </div>

      </div>
    </section>
  );
}
