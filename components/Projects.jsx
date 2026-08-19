"use client";

import { useState } from "react";
import { projects } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  FolderGit2,
  Smartphone,
  Globe,
  Layers,
} from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "Tous les Projets", icon: <FolderGit2 size={16} /> },
    { id: "web", label: "Web Apps & SaaS", icon: <Globe size={16} /> },
    { id: "mobile", label: "Apps Mobiles (iOS/Android)", icon: <Smartphone size={16} /> },
    { id: "fullstack", label: "Fullstack E-Commerce", icon: <Layers size={16} /> },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 glass-pill mb-4 border border-white/20">
            <Sparkles size={14} className="text-white" />
            <span>Réalisations Phares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Projets <span className="text-gradient">Web & Applications</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Mes projets phares illustrant mon savoir-faire technique : développement Full Stack, intégration d'APIs, interfaces réactives et applications mobiles natives.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                filter === f.id
                  ? "bg-white text-black font-bold shadow-lg shadow-white/20"
                  : "glass-card text-zinc-300 hover:text-white hover:border-white/30"
              }`}
            >
              {f.icon}
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden flex flex-col justify-between border border-white/15 group cursor-pointer hover:border-white/40 transition-all"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Image Container with overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 glass-pill text-xs border-white/20 bg-black/60 text-white">
                    <span>{project.tag}</span>
                  </div>

                  {/* Expand badge */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/15 text-zinc-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 text-zinc-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white font-semibold font-mono flex items-center gap-1">
                  En savoir plus →
                </span>
                
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass-card hover:text-[var(--theme-primary)] transition-colors text-gray-300"
                      title="Code Source"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass-card hover:text-[var(--theme-primary)] transition-colors text-gray-300"
                      title="Démo Live"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
