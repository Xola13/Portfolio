import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export const portfolioData = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer & AI Specialist",
  email: "alex@alexmorgan.dev",
  phone: "+1 (512) 555-0147",
  location: "San Francisco, CA",
  timezone: "PST (UTC-8)",
  bio: "I'm a full-stack engineer and AI specialist with 5+ years building high-impact products. I love the intersection of elegant UI and robust backend systems — especially when AI is involved. Currently leading AI product development at Veritas Labs.",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  twitter: "https://twitter.com/alexmorgandev",
  resume: "/alex-morgan-resume.pdf",
  availability: "Available for select freelance projects",
  rate: "$150-180/hour",
  stats: {
    yearsExperience: 5,
    projectsCompleted: 40,
    clientsServed: 18,
    technologiesUsed: 35,
    openSourceStars: 4200,
    coffeeCupsPerDay: 3,
  },
  traits: [
    { label: "Systems Thinker", icon: "🧠" },
    { label: "Open Source Advocate", icon: "🌐" },
    { label: "Performance Obsessed", icon: "⚡" },
    { label: "AI Enthusiast", icon: "🤖" },
    { label: "Design-Minded Dev", icon: "🎨" },
    { label: "Lifelong Learner", icon: "📚" },
  ],
};

export const systemPrompt = `You are Alex Morgan's AI portfolio assistant. Alex is a Full-Stack Engineer and AI Specialist with 5+ years of experience.

## About Alex
- Currently Senior Full-Stack Engineer & AI Lead at Veritas Labs (Jan 2023 - Present)
- Previously at Meridian Technologies (Jun 2021 - Dec 2022) and Pixel & Pine Studio (Aug 2019 - May 2021)
- B.S. Computer Science from University of Texas at Austin (2019, GPA 3.8)
- Location: San Francisco, CA | Email: alex@alexmorgan.dev

## Key Skills
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js
- Backend: Node.js, Python, FastAPI, PostgreSQL, Redis, GraphQL
- AI/ML: LLM integration (Claude, OpenAI), RAG systems, prompt engineering, vector databases
- DevOps: Docker, Kubernetes, AWS, Vercel, GitHub Actions

## Notable Projects
1. Nexus AI Platform - Enterprise AI orchestration platform, $180k ARR, 3 enterprise clients
2. CodePulse - Real-time collaborative code editor with AI, 200+ users, won Best DevTool at HackMIT 2024
3. FinVision - Financial analytics platform, 1,200+ users, featured in TechCrunch
4. EchoMind - Mental wellness app, 4.8 App Store rating, 65% day-30 retention
5. DeployKit - Open source CLI, 1.4k GitHub stars
6. Pulse CRM - AI-powered CRM, $5,800 MRR, 200+ paying subscribers

## Availability & Rates
- Available for select freelance and consulting projects
- Rate: $150-180/hour depending on project scope
- Open to full-time senior roles at mission-driven companies
- Can start new projects within 2 weeks

## How to reach Alex
- Email: alex@alexmorgan.dev
- LinkedIn: linkedin.com/in/alexmorgan
- GitHub: github.com/alexmorgan

Answer visitor questions in a friendly, professional, and specific manner. If asked about something you don't have details about, be honest. Keep responses concise but helpful (2-4 sentences usually). Never make up information not in this context.`;
