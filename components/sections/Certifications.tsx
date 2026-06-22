"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications, awards } from "@/data/certifications";
import { portfolioData } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[var(--muted)]/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Certifications & Awards"
          title="Recognition &"
          highlight="credentials"
          subtitle="Formal credentials and recognition — more on the way as I keep building."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <h3 className="font-heading text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white text-sm">📜</span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-5 hover-lift card-shine border border-white/5 hover:border-primary-500/20 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--foreground)] text-sm leading-tight mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-primary-400 text-xs font-medium mb-2">{cert.issuer}</p>
                      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-3">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[var(--muted-foreground)]">{cert.date}</span>
                        {cert.credentialId && (
                          <span className="text-xs text-[var(--muted-foreground)] font-mono">
                            {cert.credentialId}
                          </span>
                        )}
                      </div>
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-8 h-8 rounded-lg glass flex items-center justify-center text-[var(--muted-foreground)] hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
              {certifications.length === 0 && (
                <p className="text-sm text-[var(--muted-foreground)] glass-card p-5">
                  Certifications coming soon.
                </p>
              )}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="font-heading text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm">🏆</span>
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-5 hover-lift border border-white/5 hover:border-amber-500/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">{award.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)] text-sm mb-1">
                        {award.name}
                      </h4>
                      <p className="text-amber-400 text-xs font-medium mb-2">
                        {award.issuer} · {award.date}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {awards.length === 0 && (
                <p className="text-sm text-[var(--muted-foreground)] glass-card p-5">
                  Awards coming soon.
                </p>
              )}
            </div>

            {/* Fun stats */}
            <div className="mt-8 glass-card p-6">
              <h4 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wide mb-4">
                By the numbers
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: `${portfolioData.stats.yearsExperience}+` },
                  { label: "Technologies Used", value: `${portfolioData.stats.technologiesUsed}+` },
                  { label: "Clients Served", value: `${portfolioData.stats.clientsServed}` },
                  { label: "Internships Completed", value: "2" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-3 rounded-xl bg-[var(--muted)]/50">
                    <div className="font-heading text-2xl font-bold gradient-text">{value}</div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
