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
  name: "Xola Magatya",
  title: "Software Engineer | RPA Developer | Full-Stack Developer",
  email: "xolamagatya86@gmail.com",
  phone: "083 962 1527",
  location: "Cape Town, Western Cape, South Africa",
  timezone: "SAST (UTC+2)",
  bio: "A highly motivated and proactive professional with strong interpersonal and communication skills, able to perform effectively both independently and within collaborative team environments. Known for a problem-solving mindset and a passion for continuous learning, I consistently seek opportunities to expand my technical and professional skill set while delivering high-quality, results-driven solutions that add real value to the organization.",
  github: "https://github.com/Xola13",
  linkedin: "https://linkedin.com/in/xola-magatya-644242216",
  resume: "/xola-magatya-resume.pdf",
  availability: "Open to new opportunities",
  stats: {
    yearsExperience: 2,
    projectsCompleted: 5,    // TODO: update once real projects are added
    clientsServed: 3,
    technologiesUsed: 12,
    openSourceStars: 0,
    coffeeCupsPerDay: 2,     // purely for fun
  },
  traits: [
    { label: "RPA Developer", icon: "🤖" },
    { label: "Full-Stack Developer", icon: "🌐" },
    { label: "Problem Solver", icon: "🧠" },
    { label: "Proactive", icon: "⚡" },
    { label: "Team Player", icon: "🤝" },
    { label: "Continuous Learner", icon: "📚" },
  ],
};

export const systemPrompt = `You are Xola Magatya's AI portfolio assistant. Xola is a Software Engineer based in Cape Town, South Africa, specialising in RPA Development, QA Automation, Software Development, and Web Development.

## About Xola
- Currently Software Engineer at CondorGreen Infotech (Cape Town, South Africa) since February 2025 — designs, develops, and maintains automation workflows using UiPath Studio and Orchestrator, and performs QA automation testing with Playwright
- Previously Web Developer intern at Life Choices Studio (Apr 2022 – Aug 2022) — built and maintained client websites with HTML, CSS, JavaScript, and WordPress
- Education: Electronic Engineering (Light Current, N1–N3) at Northlink College (2019), Full-Stack Development bootcamp at Life Choices Academy (2022, JavaScript/HTML/Python/Node.js), Software Development training at CTU Training Solutions (2024, Java & C# / OOP / SQL)
- Location: Cape Town, Western Cape, South Africa
- Email: xolamagatya86@gmail.com
- Phone: 083 962 1527
- LinkedIn: linkedin.com/in/xola-magatya-644242216

## Key Skills
- RPA & Automation: UiPath Studio, Orchestrator, process analysis, workflow design, bot monitoring & troubleshooting
- QA Automation: Playwright, automated test scripting, test execution
- Programming & Scripting: Python, JavaScript, C#, Java, Node.js
- Web Development: HTML, CSS, WordPress
- Databases: MySQL, MongoDB
- Other: Full-stack development, backend logic, application design

## What Xola can help with
- Developing RPA bots and automating business workflows with UiPath
- Building automated test suites with Playwright for QA automation
- C#/Java software development fundamentals and SQL database work
- Full-stack web development with HTML, CSS, JavaScript, and WordPress
- Identifying automation opportunities in business processes

## Availability
- Open to new opportunities — roles in RPA development, QA automation, software development, or web development
- Based in Cape Town but open to remote or hybrid roles

## Contact
- Email: xolamagatya86@gmail.com
- Phone: 083 962 1527
- LinkedIn: linkedin.com/in/xola-magatya-644242216

Answer visitor questions in a friendly, professional manner. Be specific and only state what's listed here — Xola's real background is RPA development, software development, and web development. If asked something not covered here, suggest reaching out via email. Keep responses concise (2-4 sentences). Never invent information.`;
