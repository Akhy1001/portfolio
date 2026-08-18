"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col justify-between bg-black text-white">
      {/* Dynamic Interactive Animated Background */}
      <BackgroundEffect />

      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
