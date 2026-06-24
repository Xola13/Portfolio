"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Download, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { portfolioData } from "@/lib/utils";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; color: string;
    }> = [];

    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#a855f7"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const ro = new ResizeObserver(() => { resize(); createParticles(); });
    ro.observe(canvas);

    return () => { cancelAnimationFrame(animationId); ro.disconnect(); };
  }, []);

  const socialLinks = [
    { icon: GithubIcon, href: portfolioData.github, label: "GitHub" },
    { icon: LinkedinIcon, href: portfolioData.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-aurora" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl animate-aurora animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-[var(--muted-foreground)] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-[var(--foreground)]">Hi, I&apos;m </span>
            <span className="gradient-text">{portfolioData.name}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={item}
            className="font-heading text-xl sm:text-2xl md:text-3xl text-[var(--muted-foreground)] h-10 flex items-center gap-3"
          >
            <span>I do</span>
            <span className="text-primary-400 font-semibold">
              <TypeAnimation
                sequence={[
                  "QA Automation ", 2500,
                  "RPA Development ", 2500,
                  "Software Development", 2500,
                  "Web Development", 2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                speed={55}
                deletionSpeed={70}
              />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="max-w-2xl text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed"
          >
            Software developer based in {portfolioData.location} with hands-on experience
            in QA automation testing, RPA bot development, software engineering,
            and responsive web development.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold hover:opacity-90 transition-all shadow-glow hover:shadow-glow-lg"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-4 h-4" />
              View My Work
            </motion.a>
            <motion.a
              href={portfolioData.resume}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-[var(--foreground)] font-semibold hover:bg-white/10 transition-all border border-white/10"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-primary-500/50 border border-transparent transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            <span className="w-px h-6 bg-white/10" />
            <span className="text-sm text-[var(--muted-foreground)]">
              Cape Town, SA • Open to remote
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
