"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills, skillCategories, type Skill } from "@/data/skills";
import { cn } from "@/lib/utils";

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[var(--foreground)]">{skill.name}</span>
          {skill.description && (
            <span className="text-xs text-[var(--muted-foreground)] hidden sm:block">
              — {skill.description}
            </span>
          )}
        </div>
        <span className="text-sm font-semibold text-primary-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--muted)] skill-bar overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Skills"
          title="Technologies I"
          highlight="work with"
          subtitle="Picking the right tools for the right job — across automation, software, and the web."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-glow"
                  : "glass text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-white/10 hover:border-white/20"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill bars */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {filtered.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Category info + visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {skillCategories
              .filter((c) => c.id === activeCategory)
              .map((cat) => (
                <div key={cat.id} className="glass-card p-6">
                  <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-2">
                    {cat.label} <span className="gradient-text">Expertise</span>
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-6">{cat.description}</p>

                  {/* Top skills radial display */}
                  <div className="grid grid-cols-2 gap-3">
                    {filtered.slice(0, 6).map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--muted)]/50 hover:bg-[var(--muted)] transition-colors">
                        <div className="relative w-10 h-10 shrink-0">
                          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="14" fill="none" stroke="var(--muted)" strokeWidth="3" />
                            <circle
                              cx="18" cy="18" r="14" fill="none"
                              stroke="url(#grad)" strokeWidth="3"
                              strokeDasharray={`${(skill.level / 100) * 87.96} 87.96`}
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-primary-400">
                            {skill.level}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-[var(--foreground)] leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* Tech logo cloud */}
            <div className="glass-card p-6">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
                Also familiar with
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Prisma", "tRPC", "Supabase", "PlanetScale", "Stripe", "Cloudflare", "Fly.io", "Nx", "Turborepo", "Storybook", "Playwright", "Vitest"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-primary-900/50 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
