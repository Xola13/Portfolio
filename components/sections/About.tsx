"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/lib/utils";

const stats = [
  { label: "Years Experience", value: portfolioData.stats.yearsExperience, suffix: "+" },
  { label: "Technologies Used", value: portfolioData.stats.technologiesUsed, suffix: "+" },
  { label: "Clients Served", value: portfolioData.stats.clientsServed, suffix: "" },
  { label: "Projects Completed", value: portfolioData.stats.projectsCompleted, suffix: "+" },
];

export function About() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-[var(--muted)]/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="About Me"
          title="The engineer behind"
          highlight="the code"
          subtitle="A curious mind who loves building things that matter — from automation workflows to full-stack web apps."
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
                <Image
                  src="/images/about.jpg"
                  alt={portfolioData.name}
                  fill
                  className="object-cover"
                  priority
                />
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
                I&apos;m a software engineer based in Cape Town, currently building and
                maintaining RPA automation workflows with{" "}
                <span className="text-primary-400 font-medium">UiPath Studio and Orchestrator</span>{" "}
                at CondorGreen Infotech, alongside QA automation testing with{" "}
                <span className="text-primary-400 font-medium">Playwright</span>. I love turning
                manual, repetitive business processes into reliable, well-documented automation.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base sm:text-lg">
                My path started with an Electronic Engineering qualification at Northlink
                College, followed by a full-stack development bootcamp at Life Choices
                Academy and software development training in Java and C# at CTU Training
                Solutions. Along the way I&apos;ve built client websites with{" "}
                <span className="text-[var(--foreground)] font-medium">HTML, CSS, JavaScript, and WordPress</span>,
                and worked hands-on with{" "}
                <span className="text-[var(--foreground)] font-medium">MySQL and MongoDB</span> databases.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base sm:text-lg">
                I&apos;m a proactive professional with strong communication skills —
                equally comfortable working independently or within a team. I have a
                problem-solving mindset and a genuine passion for continuous learning,
                always looking to expand my skill set and deliver results that add real
                value.
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
                { label: "Location", value: `${portfolioData.location} (Remote-friendly)` },
                { label: "Email", value: portfolioData.email },
                { label: "Phone", value: portfolioData.phone },
                { label: "Availability", value: portfolioData.availability },
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
