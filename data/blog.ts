// Curated, real resources relevant to Xola's actual skill areas: RPA, QA automation,
// C#/software development, web development, and databases.
// These are external resources Xola references — not self-authored articles.

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  source: string;
  date: string;
  url: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "UiPath Academy — Free RPA & Automation Training",
    excerpt:
      "Self-paced courses covering RPA, intelligent document processing, test automation, and AI-powered automation, with certification paths for UiPath Studio and Orchestrator.",
    category: "RPA & Automation",
    source: "UiPath",
    date: "2026",
    url: "https://www.uipath.com/rpa/academy",
    tags: ["RPA", "UiPath", "Automation"],
  },
  {
    id: "2",
    title: "Playwright — Official Documentation",
    excerpt:
      "The official home for Playwright: one API to drive Chromium, Firefox, and WebKit, with a test runner, codegen, trace viewer, and CI integration guides.",
    category: "QA & Testing",
    source: "Playwright",
    date: "2026",
    url: "https://playwright.dev/",
    tags: ["Playwright", "QA Automation", "Testing"],
  },
  {
    id: "3",
    title: "How to Use Object-Oriented Programming in C#",
    excerpt:
      "An in-depth guide to the four pillars of OOP — inheritance, encapsulation, polymorphism, and abstraction — with real-world analogies and C# code examples.",
    category: "Software Development",
    source: "freeCodeCamp",
    date: "May 2024",
    url: "https://www.freecodecamp.org/news/how-to-use-oop-in-c-sharp/",
    tags: ["C#", "OOP", "Software Development"],
  },
  {
    id: "4",
    title: "MySQL vs. MongoDB: What's the Difference?",
    excerpt:
      "A clear breakdown of relational vs. document-based databases — schema design, scalability, and when to reach for MySQL versus MongoDB.",
    category: "Databases",
    source: "IBM",
    date: "2026",
    url: "https://www.ibm.com/think/topics/mysql-vs-mongodb",
    tags: ["MySQL", "MongoDB", "Databases"],
  },
  {
    id: "5",
    title: "WordPress Theme Developer Handbook",
    excerpt:
      "The official WordPress guide to building block and classic themes — file structure, templating, hooks, and best practices for theme development.",
    category: "Web Development",
    source: "WordPress.org",
    date: "2026",
    url: "https://developer.wordpress.org/themes/",
    tags: ["WordPress", "Web Development"],
  },
  {
    id: "6",
    title: "BPA vs. RPA: What's the Difference?",
    excerpt:
      "How Business Process Automation and Robotic Process Automation complement each other — and when discrete bot automation is the right tool for the job.",
    category: "RPA & Automation",
    source: "Appian",
    date: "2026",
    url: "https://appian.com/blog/acp/process-automation/bpa-vs-rpa",
    tags: ["RPA", "BPA", "Process Automation"],
  },
];
