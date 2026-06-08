"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export function SectionHeader({ tag, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium uppercase tracking-widest text-primary-400 border border-primary-500/20 mb-4">
        {tag}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
