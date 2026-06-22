"use client";

import { motion } from "framer-motion";
import { Mail, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { portfolioData } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-lg gradient-text-blue">X.M</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              Software Engineer crafting RPA automation, software, and web solutions.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
              Connect
            </h4>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: GithubIcon, href: portfolioData.github, label: "GitHub" },
                { icon: LinkedinIcon, href: portfolioData.linkedin, label: "LinkedIn" },
                { icon: TwitterIcon, href: portfolioData.twitter, label: "Twitter" },
                { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-transparent hover:border-primary-500/30 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mt-4">{portfolioData.email}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Xola Magatya. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted-foreground)] flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using{" "}
            <span className="text-primary-400 font-medium">Next.js + Groq AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
