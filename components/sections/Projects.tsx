"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, X, ChevronRight, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, categories, type Project, type Category } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryLabels: Record<Category, string> = {
  all: "All Projects",
  web: "Web Apps",
  mobile: "Mobile",
  ai: "AI / ML",
  opensource: "Open Source",
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full glass flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Thumbnail */}
          <div className="relative h-48 sm:h-64 bg-gradient-to-br from-primary-900 via-navy-800 to-accent-900 rounded-t-xl overflow-hidden">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🚀</div>
                  <span className="text-white/60 text-sm">{project.title}</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className={cn(
                    "px-2 py-0.5 rounded text-xs font-medium",
                    tag === "Featured" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-primary-900/50 text-primary-400"
                  )}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">
                {project.title}
              </h2>
              <p className="text-[var(--muted-foreground)]">{project.longDescription}</p>
            </div>

            {/* Challenge / Solution / Outcome */}
            {[
              { label: "The Challenge", text: project.challenge, color: "text-red-400" },
              { label: "The Solution", text: project.solution, color: "text-emerald-400" },
              { label: "The Outcome", text: project.outcome, color: "text-amber-400" },
            ].map(({ label, text, color }) => (
              <div key={label} className="p-4 rounded-xl bg-[var(--muted)]/50">
                <h3 className={cn("text-sm font-semibold uppercase tracking-wide mb-2", color)}>
                  {label}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{text}</p>
              </div>
            ))}

            {/* Key features */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)] mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                    <ChevronRight className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)] mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--muted)] text-[var(--foreground)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-[var(--foreground)] text-sm font-medium border border-white/10 hover:bg-white/5 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group glass-card overflow-hidden hover-lift card-shine border border-white/5 hover:border-primary-500/20 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative h-44 bg-gradient-to-br from-primary-900/80 via-navy-800 to-accent-900/80 overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Layers className="w-16 h-16 text-white/10 group-hover:text-white/20 transition-colors" />
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium">View Details →</span>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/20 border border-amber-500/30 backdrop-blur-sm">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs text-amber-400 font-medium">Featured</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 rounded-md text-xs font-medium bg-navy-800/80 text-[var(--muted-foreground)] border border-white/10 backdrop-blur-sm capitalize">
            {project.category === "opensource" ? "Open Source" : project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-heading font-bold text-lg text-[var(--foreground)] group-hover:text-primary-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded text-xs bg-[var(--muted)] text-[var(--muted-foreground)]">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs bg-[var(--muted)] text-[var(--muted-foreground)]">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="text-xs text-[var(--muted-foreground)]">{project.year}</span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[var(--muted)]/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Projects"
          title="Things I've"
          highlight="built"
          subtitle="A selection of production-grade projects that showcase my range — from AI platforms to open-source tools."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-glow"
                  : "glass text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-white/10"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {categoryLabels[cat]}
              {cat === "all" && (
                <span className="ml-2 text-xs opacity-60">({projects.length})</span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait" initial={false}>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--muted-foreground)]">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
