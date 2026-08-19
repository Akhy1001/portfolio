"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Sparkles,
  Check,
  Copy,
  Globe,
  Clock,
  ExternalLink,
  Send,
} from "lucide-react";
import {
  GitHubBrandIcon,
  LinkedInBrandIcon,
  TwitterBrandIcon,
  DiscordBrandIcon,
  GmailIcon,
} from "./TechIcons";

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
      icon: <GitHubBrandIcon className="w-6 h-6" />,
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-zinc-400",
    },
    {
      name: "LinkedIn",
      handle: "Anas FAIZ",
      url: personalInfo.linkedin,
      icon: <LinkedInBrandIcon className="w-6 h-6" />,
      color: "from-blue-950/20 to-blue-900/10",
      borderColor: "hover:border-[#0A66C2]/60",
    },
    {
      name: "Twitter / X",
      handle: "@Akhy1001",
      url: personalInfo.twitter,
      icon: <TwitterBrandIcon className="w-6 h-6" />,
      color: "from-sky-950/20 to-sky-900/10",
      borderColor: "hover:border-[#1DA1F2]/60",
    },
    {
      name: "Discord",
      handle: "Akhy1001",
      url: personalInfo.discord,
      icon: <DiscordBrandIcon className="w-6 h-6" />,
      color: "from-indigo-950/20 to-indigo-900/10",
      borderColor: "hover:border-[#5865F2]/60",
    },
  ];

  return (
    <section id="contact" className="section-padding relative bg-transparent text-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-pill mb-4 border border-white/20">
            <Sparkles size={14} className="text-white" />
            <span>Contact & Réseaux</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Restons en <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            N'hésitez pas à me contacter par email ou à me retrouver sur mes différents réseaux sociaux.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Direct Email Highlight Card */}
          <div className="glass-card p-8 border border-white/15 bg-white/5 relative overflow-hidden text-left shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 shadow-lg">
                  <GmailIcon className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-mono block uppercase tracking-wider mb-1">
                    Adresse Email Officielle
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xl sm:text-2xl font-extrabold text-white font-mono hover:text-zinc-200 transition-colors"
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
                      <Check size={16} className="text-white" />
                      <span className="text-white font-semibold">Email copié !</span>
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
            <h3 className="text-lg font-bold text-white mb-4 text-left font-mono">
              Retrouvez-moi sur les réseaux :
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-5 border border-white/15 ${social.borderColor} bg-white/5 transition-all flex items-center justify-between group text-left`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/20 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-white transition-colors">
                        {social.name}
                      </h4>
                      <span className="text-xs text-zinc-400 font-mono">
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  <ExternalLink size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Status Bar Banner */}
          <div className="glass-card p-5 border border-white/15 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-white" />
              <span>Localisation : <strong className="text-white font-mono">France (Remote)</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} className="text-white" />
              <span>Disponibilité : <strong className="text-white font-mono">Alternance & Collaboration</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
