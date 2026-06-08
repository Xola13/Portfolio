"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/lib/utils";

const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Shipped", value: 40, suffix: "+" },
  { label: "Clients Served", value: 18, suffix: "" },
  { label: "GitHub Stars", value: 4200, suffix: "+" },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding bg-[var(--muted)]/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="About Me"
          title="The engineer behind"
          highlight="the code"
          subtitle="A curious mind who loves building things that matter — from sleek frontends to robust AI pipelines."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-10"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-56 h-56 rounded-3xl overflow-hidden relative animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary-600 via-accent-600 to-primary-800 flex items-center justify-center">
                  <span className="text-7xl select-none">👨‍💻</span>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass px-3 py-2 rounded-xl border border-white/10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium text-emerald-400">✓ Available</span>
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-5 text-center hover-lift card-shine"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="font-heading text-3xl font-bold gradient-text">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + traits */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={item} className="space-y-4">
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base sm:text-lg">
                I&apos;m a full-stack engineer and AI specialist based in San Francisco, currently
                leading AI product development at{" "}
                <span className="text-primary-400 font-medium">Veritas Labs</span>. I love
                building things at the intersection of elegant UI, robust backend
                infrastructure, and intelligent AI systems.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base sm:text-lg">
                Over the past 5 years I&apos;ve shipped products used by thousands of
                people — from a mental wellness app with 4.8 App Store stars, to an
                enterprise AI platform doing $180k ARR, to open-source developer tools
                with 4,200+ GitHub stars. I care deeply about{" "}
                <span className="text-[var(--foreground)] font-medium">code quality</span>,{" "}
                <span className="text-[var(--foreground)] font-medium">performance</span>, and
                building products people actually love.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base sm:text-lg">
                When I&apos;m not writing code, I&apos;m writing about it — my technical articles
                on AI engineering and React patterns have been read by 50,000+ developers.
                I&apos;m also a mentor, open-source contributor, and coffee enthusiast.
              </p>
            </motion.div>

            {/* Traits */}
            <motion.div variants={item}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                Values & Traits
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.traits.map((trait) => (
                  <motion.span
                    key={trait.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-sm text-[var(--foreground)] border border-white/10 hover:border-primary-500/30 transition-colors"
                    whileHover={{ scale: 1.03, y: -1 }}
                  >
                    <span>{trait.icon}</span>
                    <span>{trait.label}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quick info */}
            <motion.div variants={item} className="glass-card p-5 space-y-3">
              {[
                { label: "Location", value: "San Francisco, CA (Remote-friendly)" },
                { label: "Email", value: portfolioData.email },
                { label: "Availability", value: portfolioData.availability },
                { label: "Rate", value: portfolioData.rate },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted-foreground)]">{label}</span>
                  <span className="text-[var(--foreground)] font-medium">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
