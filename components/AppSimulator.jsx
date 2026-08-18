"use client";

import { useState } from "react";
import {
  Smartphone,
  Monitor,
  Sparkles,
  Activity,
  Heart,
  Flame,
  Zap,
  TrendingUp,
  Users,
  CreditCard,
  Bell,
  Search,
  Wifi,
  Battery,
} from "lucide-react";

export default function AppSimulator() {
  const [viewMode, setViewMode] = useState("mobile"); // 'mobile' | 'web'
  const [mobileTab, setMobileTab] = useState("home");
  const [simHeartRate, setSimHeartRate] = useState(128);
  const [simSteps, setSimSteps] = useState(8420);

  const handlePulseSteps = () => {
    setSimSteps((prev) => prev + 100);
    setSimHeartRate(Math.floor(Math.random() * (145 - 120 + 1)) + 120);
  };

  return (
    <section id="simulator" className="section-padding relative bg-[#090D16]/80">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-pill mb-4 border border-[var(--theme-primary)]/30">
            <Sparkles size={14} className="text-[var(--theme-primary)]" />
            <span>Démo Live Interactive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Simulateur <span className="text-gradient">Web & App Mobile</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Testez directement le comportement et l'ergonomie des applications conçues pour Web et iOS/Android.
          </p>
        </div>

        {/* View Mode Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <button
              onClick={() => setViewMode("mobile")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                viewMode === "mobile"
                  ? "bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Smartphone size={18} />
              <span>Aperçu Mobile (React Native)</span>
            </button>
            <button
              onClick={() => setViewMode("web")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                viewMode === "web"
                  ? "bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Monitor size={18} />
              <span>Aperçu Web (Next.js 14)</span>
            </button>
          </div>
        </div>

        {/* Simulator Frame Container */}
        <div className="flex justify-center">
          
          {/* MOBILE IPHONE FRAME VIEW */}
          {viewMode === "mobile" && (
            <div className="relative w-[340px] sm:w-[380px] h-[680px] bg-black rounded-[50px] p-4 border-[6px] border-[#2A2F3D] shadow-[0_20px_60px_-15px_rgba(139,92,246,0.3)] flex flex-col justify-between overflow-hidden animate-fadeIn">
              
              {/* iPhone Dynamic Island / Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse"></div>
              </div>

              {/* Mobile Screen Area */}
              <div className="w-full h-full bg-[#0B0F19] rounded-[36px] overflow-hidden flex flex-col text-left pt-9 px-4 pb-3 relative">
                
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono mb-4 px-2">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi size={12} />
                    <Battery size={13} />
                  </div>
                </div>

                {/* App Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] text-[var(--theme-primary)] font-mono uppercase font-bold">FitPulse iOS App</span>
                    <h4 className="text-lg font-bold text-white leading-tight">Séance du jour 🔥</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Bell size={15} />
                  </div>
                </div>

                {/* Main Content inside App Screen */}
                <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                  
                  {/* Metric Card 1: Activity */}
                  <div className="glass-card p-3.5 bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-300 font-medium flex items-center gap-1">
                        <Activity size={14} className="text-purple-400" />
                        Pas Quotidiens
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">Objectif 10k</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-extrabold text-white font-mono" suppressHydrationWarning>
                        {simSteps.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-xs text-gray-400">/ 10,000</span>
                    </div>
                    {/* Progress */}
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${(simSteps / 10000) * 100}%` }}></div>
                    </div>
                  </div>

                  {/* Metric Card 2: Heart Rate */}
                  <div className="glass-card p-3.5 bg-gradient-to-r from-rose-950/40 to-pink-950/40 border-rose-500/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-300 font-medium flex items-center gap-1 mb-1">
                          <Heart size={14} className="text-rose-400 animate-pulse" />
                          Rythme Cardiaque
                        </span>
                        <span className="text-xl font-extrabold text-white font-mono">{simHeartRate} BPM</span>
                      </div>
                      <button
                        onClick={handlePulseSteps}
                        className="px-3 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold hover:bg-rose-500/40 transition-colors"
                      >
                        Simuler +100 Pas
                      </button>
                    </div>
                  </div>

                  {/* Mobile Feature List */}
                  <div className="glass-card p-3 border-white/10 space-y-2">
                    <span className="text-[11px] text-gray-400 font-mono block">Fonctionnalités Natifs React Native :</span>
                    <div className="flex items-center justify-between text-xs text-gray-200">
                      <span>• Sync Apple HealthKit / Google Fit</span>
                      <span className="text-emerald-400 text-[10px]">Actif</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-200">
                      <span>• Geofencing GPS Tâche de Fond</span>
                      <span className="text-emerald-400 text-[10px]">Actif</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-200">
                      <span>• Coach Vocal IA OpenAI</span>
                      <span className="text-cyan-400 text-[10px]">Prêt</span>
                    </div>
                  </div>

                </div>

                {/* Bottom App Navigation Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-around text-gray-400 text-[11px] mt-2">
                  <button onClick={() => setMobileTab("home")} className={`flex flex-col items-center gap-0.5 ${mobileTab === "home" ? "text-[var(--theme-primary)]" : ""}`}>
                    <Activity size={16} />
                    <span>Accueil</span>
                  </button>
                  <button onClick={() => setMobileTab("workout")} className={`flex flex-col items-center gap-0.5 ${mobileTab === "workout" ? "text-[var(--theme-primary)]" : ""}`}>
                    <Flame size={16} />
                    <span>Sport</span>
                  </button>
                  <button onClick={() => setMobileTab("stats")} className={`flex flex-col items-center gap-0.5 ${mobileTab === "stats" ? "text-[var(--theme-primary)]" : ""}`}>
                    <TrendingUp size={16} />
                    <span>Stats</span>
                  </button>
                </div>

                {/* Home Indicator bar */}
                <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mt-2"></div>
              </div>

            </div>
          )}

          {/* WEB BROWSER FRAME VIEW */}
          {viewMode === "web" && (
            <div className="w-full max-w-4xl bg-[#0F1626] rounded-2xl border border-white/15 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.25)] overflow-hidden animate-fadeIn">
              
              {/* Browser Window Header */}
              <div className="bg-[#0B0F19] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                {/* URL Bar */}
                <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-1 text-xs font-mono text-gray-300 flex items-center gap-2 max-w-md w-full justify-center">
                  <span className="text-emerald-400">https://</span>
                  <span>pulse-analytics-demo.nextjs.app</span>
                </div>

                <div className="w-12"></div>
              </div>

              {/* Web Dashboard App Body */}
              <div className="p-6 text-left space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-bold text-white">PulseAnalytics - Vue d'ensemble</h3>
                    <p className="text-xs text-gray-400">Mise à jour en temps réel via WebSockets & Next.js Server Actions</p>
                  </div>
                  <span className="glass-pill border-emerald-500/30 text-emerald-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Data Streaming
                  </span>
                </div>

                {/* Web Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="glass-card p-4 border-white/10">
                    <span className="text-xs text-gray-400 font-mono block mb-1">Revenu Mensuel (MRR)</span>
                    <span className="text-2xl font-bold text-white font-mono">48,250 €</span>
                    <span className="text-xs text-emerald-400 block mt-1">+18.4% ce mois</span>
                  </div>

                  <div className="glass-card p-4 border-white/10">
                    <span className="text-xs text-gray-400 font-mono block mb-1">Utilisateurs Actifs</span>
                    <span className="text-2xl font-bold text-[var(--theme-primary)] font-mono">14,820</span>
                    <span className="text-xs text-cyan-400 block mt-1">+1,200 nouveaux</span>
                  </div>

                  <div className="glass-card p-4 border-white/10">
                    <span className="text-xs text-gray-400 font-mono block mb-1">Temps de Réponse API</span>
                    <span className="text-2xl font-bold text-emerald-400 font-mono">42 ms</span>
                    <span className="text-xs text-gray-400 block mt-1">SLA 99.99%</span>
                  </div>
                </div>

                {/* Simulated Chart visual */}
                <div className="glass-card p-5 border-white/10 bg-white/5">
                  <h4 className="text-sm font-semibold text-gray-200 mb-4 flex items-center justify-between">
                    <span>Activité des Recommandations IA</span>
                    <span className="text-xs text-gray-400 font-mono">Dernières 24 heures</span>
                  </h4>
                  {/* Bar Visual */}
                  <div className="h-32 flex items-end justify-between gap-2 pt-4">
                    {[40, 65, 45, 80, 95, 70, 85, 100, 75, 90, 60, 85].map((val, i) => (
                      <div key={i} className="w-full bg-white/5 rounded-t overflow-hidden flex flex-col justify-end h-full">
                        <div
                          className="w-full bg-gradient-to-t from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-t transition-all duration-500 hover:brightness-125"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
