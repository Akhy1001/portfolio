"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Sparkles,
  Mail,
  Check,
  Copy,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Globe,
  Clock,
  ExternalLink,
  Send,
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@Akhy1001",
      url: personalInfo.github,
      icon: <Github size={24} className="text-white" />,
      color: "from-purple-500/10 to-indigo-500/10",
      borderColor: "hover:border-purple-500/50",
    },
    {
      name: "LinkedIn",
      handle: "Anas FAIZ",
      url: personalInfo.linkedin,
      icon: <Linkedin size={24} className="text-blue-400" />,
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "hover:border-blue-500/50",
    },
    {
      name: "Twitter / X",
      handle: "@Akhy1001",
      url: personalInfo.twitter,
      icon: <Twitter size={24} className="text-sky-400" />,
      color: "from-sky-500/10 to-blue-500/10",
      borderColor: "hover:border-sky-500/50",
    },
    {
      name: "Discord",
      handle: "Akhy1001",
      url: personalInfo.discord,
      icon: <MessageSquare size={24} className="text-indigo-400" />,
      color: "from-indigo-500/10 to-purple-500/10",
      borderColor: "hover:border-indigo-500/50",
    },
  ];

  return (
    <section id="contact" className="section-padding relative bg-[#090D16]/90">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-pill mb-4 border border-[var(--theme-primary)]/30">
            <Sparkles size={14} className="text-[var(--theme-primary)]" />
            <span>Contact & Réseaux</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Restons en <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            N'hésitez pas à me contacter par email ou à me retrouver sur mes différents réseaux sociaux.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Direct Email Highlight Card */}
          <div className="glass-card p-8 border border-white/15 bg-gradient-to-br from-white/5 via-transparent to-white/5 relative overflow-hidden text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[var(--theme-primary)] to-[var(--theme-secondary)] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[var(--theme-glow)]">
                  <Mail size={28} />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono block uppercase tracking-wider mb-1">
                    Adresse Email Officielle
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xl sm:text-2xl font-extrabold text-white font-mono hover:text-[var(--theme-primary)] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary py-3 px-5 text-sm flex-1 md:flex-initial justify-center"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={16} className="text-green-400" />
                      <span className="text-green-400">Email copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copier</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary py-3 px-5 text-sm flex-1 md:flex-initial justify-center"
                >
                  <span>Envoyer un mail</span>
                  <Send size={15} />
                </a>
              </div>

            </div>
          </div>

          {/* Social Networks Cards Grid */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 text-left font-mono text-gray-300">
              Retrouvez-moi sur les réseaux :
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-5 border border-white/10 ${social.borderColor} bg-gradient-to-r ${social.color} transition-all flex items-center justify-between group text-left`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-[var(--theme-primary)] transition-colors">
                        {social.name}
                      </h4>
                      <span className="text-xs text-gray-400 font-mono">
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  <ExternalLink size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Status Bar Banner */}
          <div className="glass-card p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-[var(--theme-primary)]" />
              <span>Localisation : <strong>France (Remote)</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[var(--theme-secondary)]" />
              <span>Disponibilité : <strong>Projets & Collaboration</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
