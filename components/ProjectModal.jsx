"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Github, CheckCircle2, Award, Zap, Tag } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [project, onClose]);

  if (!project || !mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div
        className="relative w-full max-w-3xl glass-card bg-[#0A0A0A] border border-white/20 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
          
          {/* Category Pill */}
          <div className="absolute top-4 left-4 glass-pill border-white/30 bg-black/70 text-white text-xs">
            <Tag size={12} className="text-white" />
            <span>{project.tag}</span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full glass-card bg-black/70 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left bg-[#0A0A0A]">
          
          {/* Short & Long Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-mono">
              Présentation du Projet
            </h4>
            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
              {project.longDesc}
            </p>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2 font-mono">
                <Award size={16} className="text-white" />
                Impact & Résultats Clés
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="glass-card p-3 border-white/15 text-center bg-white/5">
                    <span className="text-xs font-semibold text-white block font-mono">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights checklist */}
          {project.highlights && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2 font-mono">
                <Zap size={16} className="text-white" />
                Points Forts & Fonctionnalités
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-3 font-mono">
              Technologies Appliquées
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="glass-pill border-white/20 bg-white/10 text-white text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/15 bg-black flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-5 text-sm"
              >
                <span>Voir le projet</span>
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2.5 px-5 text-sm"
              >
                <Github size={16} />
                <span>Code Source</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 font-mono"
          >
            Fermer l'aperçu
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
}
