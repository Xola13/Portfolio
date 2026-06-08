export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  coverImage: string;
  url: string;
  platform: "medium" | "devto" | "hashnode" | "internal";
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Production-Ready RAG Pipeline with pgvector and Next.js",
    excerpt:
      "A deep dive into building a retrieval-augmented generation system that actually works in production — covering chunking strategies, embedding models, reranking, and latency optimization.",
    category: "AI Engineering",
    readTime: 12,
    date: "May 2024",
    coverImage: "/images/blog/rag-pipeline.jpg",
    url: "https://medium.com/@alexmorgan/rag-pipeline",
    platform: "medium",
    tags: ["RAG", "AI", "Next.js", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Why I Rebuilt My State Management from Redux to Zustand (and What I Learned)",
    excerpt:
      "After 3 years with Redux, I migrated a large Next.js application to Zustand. Here's an honest account of what was better, what surprised me, and what I'd do differently.",
    category: "React",
    readTime: 8,
    date: "March 2024",
    coverImage: "/images/blog/state-management.jpg",
    url: "https://dev.to/alexmorgan/zustand-migration",
    platform: "devto",
    tags: ["React", "State Management", "Zustand", "Redux"],
  },
  {
    id: "3",
    title: "The Prompt Engineering Playbook for Developers",
    excerpt:
      "Everything I've learned about writing reliable prompts for LLMs — including system prompt architecture, few-shot patterns, chain-of-thought, and testing strategies that work.",
    category: "AI Engineering",
    readTime: 15,
    date: "February 2024",
    coverImage: "/images/blog/prompt-engineering.jpg",
    url: "https://hashnode.com/@alexmorgan/prompt-playbook",
    platform: "hashnode",
    tags: ["AI", "LLMs", "Prompt Engineering", "Claude"],
  },
  {
    id: "4",
    title: "5 Next.js Performance Patterns I Use in Every Project",
    excerpt:
      "From dynamic imports to edge-optimized ISR, here are the five patterns I apply consistently to keep Next.js applications fast, no matter the complexity.",
    category: "Performance",
    readTime: 7,
    date: "January 2024",
    coverImage: "/images/blog/nextjs-perf.jpg",
    url: "https://dev.to/alexmorgan/nextjs-performance",
    platform: "devto",
    tags: ["Next.js", "Performance", "Optimization"],
  },
  {
    id: "5",
    title: "Building an AI-First Product: Lessons from Shipping Nexus AI Platform",
    excerpt:
      "What I learned building an enterprise AI product from zero to $180k ARR — covering the technical decisions, the mistakes, and the unexpected challenges that only show up in production.",
    category: "Product Engineering",
    readTime: 18,
    date: "December 2023",
    coverImage: "/images/blog/ai-product.jpg",
    url: "https://medium.com/@alexmorgan/ai-product-lessons",
    platform: "medium",
    tags: ["AI", "Product", "SaaS", "Lessons Learned"],
  },
  {
    id: "6",
    title: "TypeScript Generics: The Patterns I Actually Use",
    excerpt:
      "A practical guide to TypeScript generics — not the textbook examples, but the patterns that come up repeatedly in real production codebases.",
    category: "TypeScript",
    readTime: 10,
    date: "November 2023",
    coverImage: "/images/blog/typescript.jpg",
    url: "https://hashnode.com/@alexmorgan/typescript-generics",
    platform: "hashnode",
    tags: ["TypeScript", "Generics", "Patterns"],
  },
];
