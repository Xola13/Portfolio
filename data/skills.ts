export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "ai" | "devops" | "tools";
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  id: "frontend" | "backend" | "ai" | "devops" | "tools";
  label: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Web Development",
    description: "Building responsive, user-friendly web applications and interfaces",
  },
  {
    id: "backend",
    label: "Software Development",
    description: "Server-side programming, APIs, databases, and enterprise applications",
  },
  {
    id: "ai",
    label: "QA & Testing",
    description: "Automated testing, quality assurance, and test strategy with Playwright and beyond",
  },
  {
    id: "devops",
    label: "RPA & Automation",
    description: "Robotic Process Automation, workflow automation, and intelligent bots with UiPath",
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    description: "Development tooling, cloud platforms, and project management",
  },
];

export const skills: Skill[] = [
  // ── QA & Test Automation ──────────────────────────────────────────────────
  { name: "Playwright", level: 80, category: "ai", description: "End-to-end test automation across web apps" },
  { name: "QA Automation", level: 78, category: "ai", description: "Test planning, scripting, and execution" },
  { name: "Test Strategy & Design", level: 75, category: "ai", description: "Test cases, coverage planning, regression suites" },
  { name: "API Testing", level: 70, category: "ai", description: "REST API validation and contract testing" },
  { name: "Bug Reporting & Tracking", level: 80, category: "ai", description: "Defect lifecycle management and documentation" },

  // ── RPA & Automation ──────────────────────────────────────────────────────
  { name: "UiPath", level: 80, category: "devops", description: "RPA bot development and workflow automation" },
  { name: "RPA Development", level: 78, category: "devops", description: "Automating repetitive business processes" },
  { name: "Azure DevOps", level: 70, category: "devops", description: "CI/CD pipelines and project management" },
  { name: "Workflow Automation", level: 72, category: "devops", description: "End-to-end process automation design" },

  // ── Software Development ──────────────────────────────────────────────────
  { name: "C#", level: 78, category: "backend", description: "Primary language — .NET application development" },
  { name: ".NET / ASP.NET", level: 72, category: "backend", description: "Web APIs and enterprise application frameworks" },
  { name: "Python", level: 68, category: "backend", description: "Scripting, automation, data processing, and REST APIs" },
  { name: "MySQL", level: 72, category: "backend", description: "Relational database design, queries, and optimisation" },
  { name: "MongoDB", level: 65, category: "backend", description: "NoSQL document database for flexible data storage" },
  { name: "RESTful APIs", level: 70, category: "backend", description: "Designing and consuming REST services" },

  // ── Web Development ───────────────────────────────────────────────────────
  { name: "HTML & CSS", level: 82, category: "frontend", description: "Semantic markup, responsive styling, landing pages" },
  { name: "JavaScript", level: 72, category: "frontend", description: "DOM manipulation, async programming, ES6+" },
  { name: "Landing Page Design", level: 78, category: "frontend", description: "Conversion-focused, responsive landing pages" },
  { name: "Responsive Design", level: 76, category: "frontend", description: "Mobile-first, cross-browser compatible UIs" },
  { name: "Bootstrap / Tailwind", level: 70, category: "frontend", description: "CSS frameworks for rapid UI development" },

  // ── Tools & Cloud ─────────────────────────────────────────────────────────
  { name: "Git & GitHub", level: 80, category: "tools", description: "Version control, branching, and code review" },
  { name: "Visual Studio / VS Code", level: 85, category: "tools", description: "Primary IDEs for daily development" },
  { name: "Azure Cloud", level: 65, category: "tools", description: "Cloud services and deployment on Azure platform" },
  { name: "Anaconda", level: 62, category: "tools", description: "Python data science environment management" },
  { name: "Postman", level: 68, category: "tools", description: "API testing and documentation" },
  { name: "Jira / Azure Boards", level: 72, category: "tools", description: "Agile project tracking and sprint management" },
];

export const techLogos = [
  { name: "C#", icon: "C#" },
  { name: "Python", icon: "🐍" },
  { name: "Playwright", icon: "🎭" },
  { name: "UiPath", icon: "🤖" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Azure DevOps", icon: "☁️" },
  { name: ".NET", icon: "⬡" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML & CSS", icon: "🌐" },
  { name: "Git", icon: "🔀" },
  { name: "VS Code", icon: "🖊️" },
  { name: "Postman", icon: "📮" },
  { name: "Bootstrap", icon: "🎨" },
  { name: "Azure", icon: "⚡" },
  { name: "Jira", icon: "📋" },
];
