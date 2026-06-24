"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number>();
  const speed = 0.4;

  const doubled = [...testimonials, ...testimonials];

  useEffect(() => {
    const cardWidth = 380 + 24; // card width + gap
    const totalWidth = testimonials.length * cardWidth;

    const step = () => {
      if (!isPaused) {
        setOffset((prev) => {
          const next = prev + speed;
          return next >= totalWidth ? 0 : next;
        });
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isPaused]);

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Testimonials"
          title="What people"
          highlight="say"
          subtitle="Feedback from colleagues, clients, and collaborators I've had the pleasure of working with."
        />
      </div>

      {/* Auto-scrolling carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 py-4"
          style={{
            transform: `translateX(-${offset}px)`,
            width: "max-content",
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[380px] shrink-0 glass-card p-6 border border-white/5 hover:border-primary-500/20 transition-colors"
            >
              {/* Quote */}
              <div className="relative mb-6 mt-2">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary-500/30" />
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed pl-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[var(--foreground)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">
                    {t.role} at {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
