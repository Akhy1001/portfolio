"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState("violet");

  return (
    <div data-theme={theme} className="min-h-screen relative flex flex-col justify-between">
      {/* Fixed Sticky Header */}
      <Navbar currentTheme={theme} setTheme={setTheme} />

      {/* Main Sections */}
      <main className="flex-1">
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
