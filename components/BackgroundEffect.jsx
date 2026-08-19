"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isRunning = true;

    // Mouse coordinates for interactive repulsion
    const mouse = { x: -2000, y: -2000, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Particle Generation
    const particles = [];
    const minParticles = 70;
    const maxParticles = 110;

    class Particle {
      constructor(initialWidth, initialHeight) {
        this.x = Math.random() * (initialWidth || 1200);
        this.y = Math.random() * (initialHeight || 800);
        this.size = Math.random() * 1.8 + 1.2;
        this.density = Math.random() * 20 + 8;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.alpha = Math.random() * 0.45 + 0.45; // High contrast: 0.45 to 0.90
        this.isSpecial = Math.random() > 0.85; // 15% of nodes have a radiant glow
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
      }

      draw() {
        this.pulse += this.pulseSpeed;
        const currentAlpha = Math.min(1, Math.max(0.2, this.alpha + Math.sin(this.pulse) * 0.15));

        ctx.save();
        if (this.isSpecial) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        } else {
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      update(w, h) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen boundaries seamlessly
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        // Gentle interactive mouse repulsion
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density * 0.4;
          const directionY = forceDirectionY * force * this.density * 0.4;

          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    const resize = () => {
      if (!canvas) return;

      const newWidth = window.innerWidth || document.documentElement.clientWidth || 1200;
      const newHeight = window.innerHeight || document.documentElement.clientHeight || 800;
      dpr = window.devicePixelRatio || 1;

      width = newWidth;
      height = newHeight;

      // Adjust canvas resolution for Retina displays
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);

      // Adjust particle count to viewport size
      const targetCount = Math.min(
        maxParticles,
        Math.max(minParticles, Math.floor((width * height) / 14000))
      );

      if (particles.length === 0) {
        for (let i = 0; i < targetCount; i++) {
          particles.push(new Particle(width, height));
        }
      } else if (particles.length < targetCount) {
        for (let i = particles.length; i < targetCount; i++) {
          particles.push(new Particle(width, height));
        }
      } else if (particles.length > targetCount) {
        particles.splice(targetCount);
      }

      // Keep existing particles within bounds
      particles.forEach((p) => {
        if (p.x > width) p.x = Math.random() * width;
        if (p.y > height) p.y = Math.random() * height;
      });
    };

    // Initialize dimensions and particles
    resize();

    window.addEventListener("resize", resize, { passive: true });

    // Connect close particles with luminous lines
    const connect = () => {
      const maxDist = 135;
      const particleLen = particles.length;

      for (let a = 0; a < particleLen; a++) {
        for (let b = a + 1; b < particleLen; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineOpacity = (1 - dist / maxDist) * 0.28;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Render loop
    const animate = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(width, height);
        particles[i].draw();
      }
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Immediate first render pass so there is zero delay/blank screen
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].draw();
    }
    connect();

    // Start continuous animation loop
    animate();

    // Handle tab visibility changes (e.g. background tab opened)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        resize();
        animate();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isRunning = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* High-Contrast Interactive Constellation Canvas with Retina support */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block opacity-95" />

      {/* Atmospheric Ambient Glow Spotlights */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-white/[0.05] rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[120px] animate-float" />
      <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] bg-white/[0.04] rounded-full blur-[110px]" />
    </div>
  );
}
