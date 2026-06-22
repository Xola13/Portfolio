"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Resources"
          title="What I'm"
          highlight="learning from"
          subtitle="Resources I reference for RPA, QA automation, software development, and the web."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white"
                  : "glass text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-white/10"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait" initial={false}>
            {filtered.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group glass-card overflow-hidden hover-lift card-shine border border-white/5 hover:border-primary-500/20 transition-all block"
              >
                {/* Cover */}
                <div className="h-40 bg-gradient-to-br from-primary-900/80 via-navy-800 to-accent-900/60 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                    <BookOpen className="w-16 h-16" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded text-xs font-medium border bg-primary-900/30 text-primary-400 border-primary-700/30">
                      {post.source}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
                    <span className="px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--muted-foreground)]">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-[var(--foreground)] leading-snug group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-primary-400 text-xs font-medium pt-1">
                    Read more
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
