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
    label: "Frontend",
    description: "Building responsive, accessible, and performant user interfaces",
  },
  {
    id: "backend",
    label: "Backend",
    description: "Designing scalable APIs, services, and data architectures",
  },
  {
    id: "ai",
    label: "AI / ML",
    description: "Building intelligent systems and LLM-powered applications",
  },
  {
    id: "devops",
    label: "DevOps",
    description: "Infrastructure, CI/CD, containers, and cloud platforms",
  },
  {
    id: "tools",
    label: "Tools",
    description: "Productivity and development workflow tools",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React & Next.js", level: 96, category: "frontend", description: "5 years building production apps" },
  { name: "TypeScript", level: 94, category: "frontend", description: "Strict mode, generics, advanced patterns" },
  { name: "Tailwind CSS", level: 93, category: "frontend", description: "Design systems, custom plugins" },
  { name: "Framer Motion", level: 88, category: "frontend", description: "Complex animations and transitions" },
  { name: "Three.js / WebGL", level: 75, category: "frontend", description: "3D scenes, shaders, interactive experiences" },
  { name: "React Native", level: 82, category: "frontend", description: "Cross-platform mobile development" },
  { name: "HTML / CSS / SVG", level: 97, category: "frontend", description: "Deep fundamentals mastery" },
  { name: "GraphQL", level: 85, category: "frontend", description: "Apollo Client, code-gen, caching strategies" },

  // Backend
  { name: "Node.js", level: 92, category: "backend", description: "REST APIs, WebSockets, streams" },
  { name: "Python / FastAPI", level: 89, category: "backend", description: "High-performance async APIs" },
  { name: "PostgreSQL", level: 88, category: "backend", description: "Query optimization, indexing, migrations" },
  { name: "Redis", level: 82, category: "backend", description: "Caching, pub/sub, rate limiting" },
  { name: "Prisma / Drizzle", level: 87, category: "backend", description: "Type-safe database access" },
  { name: "REST API Design", level: 93, category: "backend", description: "OpenAPI, versioning, auth patterns" },

  // AI / ML
  { name: "LLM Integration", level: 91, category: "ai", description: "Anthropic Claude, OpenAI, streaming, tool use" },
  { name: "Prompt Engineering", level: 90, category: "ai", description: "System prompts, few-shot, chain-of-thought" },
  { name: "RAG Systems", level: 85, category: "ai", description: "Vector DBs, embeddings, retrieval pipelines" },
  { name: "LangChain / LlamaIndex", level: 80, category: "ai", description: "Agentic workflows and orchestration" },
  { name: "TensorFlow / PyTorch", level: 74, category: "ai", description: "CNN, LSTM, fine-tuning" },
  { name: "Vector Databases", level: 82, category: "ai", description: "Pinecone, pgvector, Weaviate" },

  // DevOps
  { name: "Docker", level: 88, category: "devops", description: "Multi-stage builds, compose, networking" },
  { name: "Kubernetes", level: 76, category: "devops", description: "Deployments, services, Helm charts" },
  { name: "AWS", level: 83, category: "devops", description: "EC2, Lambda, S3, RDS, CloudFront" },
  { name: "Vercel / Edge", level: 92, category: "devops", description: "Edge functions, ISR, deployment pipelines" },
  { name: "CI/CD (GitHub Actions)", level: 89, category: "devops", description: "Automated test and deploy workflows" },
  { name: "Terraform", level: 72, category: "devops", description: "Infrastructure as code, state management" },

  // Tools
  { name: "Git & GitHub", level: 95, category: "tools", description: "Branching strategies, code review, GitHub Actions" },
  { name: "Figma", level: 84, category: "tools", description: "Design handoff, component libraries, prototyping" },
  { name: "Linear / Jira", level: 88, category: "tools", description: "Sprint planning, backlog grooming" },
  { name: "Datadog / Sentry", level: 80, category: "tools", description: "Observability, error tracking, alerting" },
];

export const techLogos = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "⬡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐋" },
  { name: "AWS", icon: "☁️" },
  { name: "Tailwind", icon: "🎨" },
  { name: "GraphQL", icon: "◈" },
  { name: "Redis", icon: "🔴" },
  { name: "Kubernetes", icon: "⎈" },
  { name: "Claude AI", icon: "🤖" },
  { name: "Figma", icon: "🎯" },
  { name: "Git", icon: "🔀" },
  { name: "Vercel", icon: "▲" },
];
