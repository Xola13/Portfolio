"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink } from "lucide-react";
import Fuse from "fuse.js";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";

const searchItems = [
  ...projects.map((p) => ({
    id: p.id,
    type: "Project" as const,
    title: p.title,
    description: p.description,
    href: `#projects`,
    tags: p.tags,
  })),
  ...skills.map((s) => ({
    id: s.name,
    type: "Skill" as const,
    title: s.name,
    description: s.description || `${s.level}% proficiency`,
    href: `#skills`,
    tags: [s.category],
  })),
  ...blogPosts.map((b) => ({
    id: b.id,
    type: "Article" as const,
    title: b.title,
    description: b.excerpt,
    href: b.url,
    tags: b.tags,
  })),
];

const fuse = new Fuse(searchItems, {
  keys: ["title", "description", "tags"],
  threshold: 0.3,
  includeScore: true,
});

const typeColors: Record<string, string> = {
  Project: "bg-primary-900/50 text-primary-400",
  Skill: "bg-accent-900/50 text-accent-400",
  Article: "bg-emerald-900/50 text-emerald-400",
};

export function SearchPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.length > 1
    ? fuse.search(query).slice(0, 8).map((r) => r.item)
    : searchItems.slice(0, 6);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [isOpen]);

  const handleSelect = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Trigger hint in navbar area - keyboard only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="w-full max-w-xl glass-card border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 p-4 border-b border-white/5">
                <Search className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, skills, articles..."
                  className="flex-1 bg-transparent text-[var(--foreground)] text-sm placeholder:text-[var(--muted-foreground)] outline-none"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                    <X className="w-4 h-4" />
                  </button>
                )}
                <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs bg-[var(--muted)] text-[var(--muted-foreground)] font-mono">
                  Esc
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto">
                {results.length === 0 ? (
                  <div className="p-8 text-center text-sm text-[var(--muted-foreground)]">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  <div className="p-2">
                    {!query && (
                      <p className="text-xs text-[var(--muted-foreground)] px-2 py-1 mb-1">
                        Showing recent items
                      </p>
                    )}
                    {results.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.href)}
                        className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--muted)] transition-colors text-left group"
                      >
                        <span className={cn(
                          "px-1.5 py-0.5 rounded text-[10px] font-medium shrink-0 mt-0.5",
                          typeColors[item.type]
                        )}>
                          {item.type}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-[var(--foreground)] truncate">
                            {item.title}
                          </div>
                          <div className="text-xs text-[var(--muted-foreground)] truncate mt-0.5">
                            {item.description}
                          </div>
                        </div>
                        {item.href.startsWith("http") && (
                          <ExternalLink className="w-3.5 h-3.5 text-[var(--muted-foreground)] shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/5 flex items-center justify-between">
                <p className="text-xs text-[var(--muted-foreground)]">
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--muted)] font-mono">↵</kbd>
                  <span>to select</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--muted)] font-mono">⌘K</kbd>
                  <span>to toggle</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
