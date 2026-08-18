"use client";

import { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, Award, Zap, Tag } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl glass-card bg-[#0D1322]/95 border border-white/20 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-[#0D1322]/40 to-transparent"></div>
          
          {/* Category Pill */}
          <div className="absolute top-4 left-4 glass-pill border-white/20 text-xs">
            <Tag size={12} className="text-[var(--theme-primary)]" />
            <span>{project.tag}</span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full glass-card bg-black/50 text-white hover:bg-white/20 transition-colors"
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
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          
          {/* Short & Long Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--theme-primary)] mb-2">
              Présentation du Projet
            </h4>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              {project.longDesc}
            </p>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Award size={16} className="text-amber-400" />
                Impact & Résultats Clés
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="glass-card p-3 border-white/10 text-center bg-white/5">
                    <span className="text-xs font-semibold text-[var(--theme-primary)] block">
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
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Zap size={16} className="text-[var(--theme-secondary)]" />
                Points Forts & Fonctionnalités
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Technologies Appliquées
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="glass-pill border-white/15 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0B0F19] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-5 text-sm"
              >
                <span>Démo Live</span>
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
            className="text-xs text-gray-400 hover:text-white underline underline-offset-4"
          >
            Fermer l'aperçu
          </button>
        </div>

      </div>
    </div>
  );
}
