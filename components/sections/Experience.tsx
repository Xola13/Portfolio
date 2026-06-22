"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

function TimelineEntry({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative grid md:grid-cols-2 gap-4 md:gap-8 mb-8",
        isLeft ? "" : "md:[&>*:first-child]:order-last"
      )}
    >
      {/* Content card */}
      <div className={cn("glass-card p-6 card-shine hover-lift border border-white/5 hover:border-primary-500/20 transition-all", isLeft ? "md:text-right" : "")}>
        <div className={cn("flex items-center gap-2 mb-3", isLeft ? "md:flex-row-reverse" : "")}>
          <span className={cn(
            "px-2 py-0.5 rounded text-xs font-medium",
            exp.type === "work" ? "bg-primary-900/50 text-primary-400" : "bg-accent-900/50 text-accent-400"
          )}>
            {exp.type === "work" ? "Work" : "Education"}
          </span>
        </div>

        <h3 className="font-heading font-bold text-lg text-[var(--foreground)] mb-1">
          {exp.role}
        </h3>
        <div className={cn("flex items-center gap-1 text-primary-400 font-medium text-sm mb-3", isLeft ? "md:justify-end" : "")}>
          {exp.companyUrl ? (
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              {exp.company}
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span>{exp.company}</span>
          )}
        </div>

        <div className={cn("flex flex-wrap gap-3 text-xs text-[var(--muted-foreground)] mb-4", isLeft ? "md:justify-end" : "")}>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {exp.startDate} – {exp.endDate}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {exp.location}
          </span>
        </div>

        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
          {exp.description}
        </p>

        <ul className={cn("space-y-1.5", isLeft ? "md:text-right" : "")}>
          {exp.achievements.map((a, i) => (
            <li key={i} className={cn("flex items-start gap-2 text-xs text-[var(--muted-foreground)]", isLeft ? "md:flex-row-reverse" : "")}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
              {a}
            </li>
          ))}
        </ul>

        {exp.techStack && (
          <div className={cn("flex flex-wrap gap-1.5 mt-4", isLeft ? "md:justify-end" : "")}>
            {exp.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded text-xs bg-[var(--muted)] text-[var(--muted-foreground)]">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Spacer (empty div for grid alignment on desktop) */}
      <div className="hidden md:block" />

      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow border-2 border-[var(--background)] z-10" />
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Experience"
          title="My professional"
          highlight="journey"
          subtitle="From engineering fundamentals to RPA automation — a journey of hands-on learning and growth."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent -translate-x-1/2" />

          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <TimelineEntry key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
