export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  category: "web" | "mobile" | "ai" | "opensource";
  tags: string[];
  techStack: string[];
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  keyFeatures: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "nexus-ai-platform",
    title: "Nexus AI Platform",
    description:
      "An enterprise-grade AI orchestration platform that lets teams deploy, monitor, and scale LLM-powered workflows with zero infrastructure headache.",
    longDescription:
      "Nexus AI Platform was built to solve the growing complexity of managing multiple AI models and pipelines across large engineering teams. It provides a unified dashboard for model deployment, A/B testing, prompt versioning, and cost analytics — all backed by a robust API gateway.",
    challenge:
      "Enterprise teams were spending enormous engineering effort stitching together multiple AI providers, managing API keys, monitoring usage costs, and debugging hallucinations in production. There was no single platform that handled all of this elegantly.",
    solution:
      "Built a multi-tenant SaaS platform with a React frontend and a FastAPI backend. Integrated support for OpenAI, Anthropic, Cohere, and open-source models via a unified proxy layer. Implemented real-time streaming, prompt versioning with git-like diffs, and a visual pipeline builder.",
    outcome:
      "Adopted by 3 enterprise clients within the first month. Reduced AI infrastructure management time by 60% and cut average token costs by 22% through intelligent caching and model routing.",
    category: "ai",
    tags: ["AI", "SaaS", "Enterprise", "Featured"],
    techStack: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Anthropic API",
      "OpenAI API",
      "Docker",
      "Kubernetes",
      "Stripe",
    ],
    thumbnail: "/images/projects/nexus-ai.jpg",
    images: [
      "/images/projects/nexus-ai.jpg",
      "/images/projects/nexus-ai-2.jpg",
    ],
    liveUrl: "https://nexus-ai.demo",
    githubUrl: "https://github.com/alexmorgan/nexus-ai",
    featured: true,
    year: 2024,
    keyFeatures: [
      "Unified API gateway for 5+ LLM providers",
      "Real-time token streaming with SSE",
      "Prompt versioning and rollback",
      "Visual pipeline builder (drag-and-drop)",
      "Cost analytics and budget alerts",
      "Multi-tenant with RBAC",
    ],
  },
  {
    id: "2",
    slug: "codepulse",
    title: "CodePulse",
    description:
      "A real-time collaborative code editor with AI pair programming, live execution sandbox, and team code review built on WebSockets and Monaco Editor.",
    longDescription:
      "CodePulse reimagines pair programming for distributed teams. It combines the familiar experience of VS Code with the collaborative power of Figma — multiple cursors, voice channels, and an integrated AI assistant that can explain, refactor, or complete code in context.",
    challenge:
      "Remote engineering teams struggled with screen-sharing lag, context loss during handoffs, and the friction of explaining code in text. Existing tools like CodeSandbox lacked deep AI integration and real-time synchronization at scale.",
    solution:
      "Engineered an OT (Operational Transformation) algorithm for conflict-free concurrent edits. Integrated Monaco Editor with WebSocket sync. Built an AI layer using Claude API that maintains full file context and conversation history per session.",
    outcome:
      "Used by 12 engineering teams with 200+ active users. Reduced code review turnaround by 35%. Won 'Best DevTool' at HackMIT 2024.",
    category: "web",
    tags: ["DevTool", "Real-time", "AI", "Collaboration"],
    techStack: [
      "Next.js",
      "TypeScript",
      "WebSockets",
      "Monaco Editor",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "Anthropic API",
      "Docker",
    ],
    thumbnail: "/images/projects/codepulse.jpg",
    images: ["/images/projects/codepulse.jpg"],
    liveUrl: "https://codepulse.dev",
    githubUrl: "https://github.com/alexmorgan/codepulse",
    featured: true,
    year: 2024,
    keyFeatures: [
      "Real-time multi-cursor collaborative editing",
      "OT-based conflict resolution",
      "Integrated AI assistant with file context",
      "Live code execution sandbox (20+ languages)",
      "Inline comments and code review threads",
      "Voice/video channels per session",
    ],
  },
  {
    id: "3",
    slug: "finvision",
    title: "FinVision Dashboard",
    description:
      "A financial analytics platform with predictive modeling, portfolio risk assessment, and AI-generated market insights for independent investors.",
    longDescription:
      "FinVision aggregates data from multiple financial APIs, applies ML models for trend prediction, and presents actionable insights in an intuitive dashboard. It's designed for self-directed investors who want institutional-grade analytics without the complexity.",
    challenge:
      "Retail investors lacked access to sophisticated analytics tools. Existing platforms were either too simplified or too complex. Market data was scattered across multiple sources with no unified view.",
    solution:
      "Built a data pipeline that ingests from Yahoo Finance, Alpha Vantage, and news APIs. Applied LSTM models for price forecasting and Monte Carlo simulations for portfolio risk. Frontend built with D3.js and Recharts for interactive visualizations.",
    outcome:
      "1,200+ registered users, $2M+ in portfolios tracked. Featured in TechCrunch as 'a Bloomberg Terminal for the rest of us.'",
    category: "web",
    tags: ["Finance", "ML", "Data Visualization", "Featured"],
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "TensorFlow",
      "D3.js",
      "Recharts",
      "Redis",
      "Alpha Vantage API",
    ],
    thumbnail: "/images/projects/finvision.jpg",
    images: ["/images/projects/finvision.jpg"],
    liveUrl: "https://finvision.app",
    githubUrl: "https://github.com/alexmorgan/finvision",
    featured: true,
    year: 2023,
    keyFeatures: [
      "Real-time portfolio tracking and P&L",
      "LSTM-based price forecasting (85% directional accuracy)",
      "Monte Carlo portfolio risk simulation",
      "AI-generated daily market briefings",
      "Earnings calendar and alert system",
      "Tax-loss harvesting recommendations",
    ],
  },
  {
    id: "4",
    slug: "echomind",
    title: "EchoMind",
    description:
      "A cross-platform mental wellness app with AI-guided CBT exercises, mood tracking, journal analysis, and crisis detection — built with React Native.",
    longDescription:
      "EchoMind uses evidence-based Cognitive Behavioral Therapy (CBT) techniques delivered through an empathetic AI companion. Users log moods, complete guided exercises, and write in a journal — the AI analyzes patterns and surfaces insights over time.",
    challenge:
      "Mental health support has huge access barriers. Therapy waitlists can be months long and expensive. Existing apps were either too gamified to be taken seriously or too clinical to build a habit around.",
    solution:
      "Built a React Native app with a warm, conversational UI. Fine-tuned a small language model on CBT dialogue. Implemented local-first storage for privacy, with optional encrypted cloud sync. Added crisis keyword detection with immediate hotline surfacing.",
    outcome:
      "4.8-star App Store rating from 800+ reviews. 65% day-30 retention rate. Partnered with 2 university counseling centers as a supplement to formal therapy.",
    category: "mobile",
    tags: ["Mental Health", "AI", "Mobile", "React Native"],
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Supabase",
      "Python",
      "FastAPI",
      "Anthropic API",
    ],
    thumbnail: "/images/projects/echomind.jpg",
    images: ["/images/projects/echomind.jpg"],
    liveUrl: "https://echomind.app",
    githubUrl: "https://github.com/alexmorgan/echomind",
    featured: false,
    year: 2023,
    keyFeatures: [
      "AI-guided CBT sessions and exercises",
      "Mood tracking with pattern visualization",
      "Journal entry sentiment analysis",
      "Crisis keyword detection + resources",
      "Local-first data with E2E encrypted sync",
      "Personalized weekly insight reports",
    ],
  },
  {
    id: "5",
    slug: "deploykit",
    title: "DeployKit",
    description:
      "An open-source CLI and GitHub Action that automates full-stack deployment pipelines with smart rollback, canary releases, and Slack notifications.",
    longDescription:
      "DeployKit abstracts the complexity of multi-environment deployments into a single configuration file. It handles build, test, deploy, and rollback orchestration across AWS, GCP, and Vercel — with a clean CLI and native GitHub Actions integration.",
    challenge:
      "Most teams maintained hand-rolled deployment scripts that were brittle, undocumented, and team-member-specific. Rollbacks were manual and stressful. Canary releases required DevOps expertise most startups didn't have.",
    solution:
      "Created a Node.js CLI with a declarative YAML config format. Implemented deployment state machines with automatic health checks. Built a GitHub Action that wraps the CLI with PR status checks and deployment gates.",
    outcome:
      "1.4k GitHub stars, 240+ forks. Used in production by 80+ teams. Featured in the GitHub Actions Marketplace.",
    category: "opensource",
    tags: ["DevOps", "Open Source", "CLI", "GitHub Actions"],
    techStack: [
      "Node.js",
      "TypeScript",
      "GitHub Actions",
      "AWS SDK",
      "GCP SDK",
      "Docker",
      "YAML",
      "Bash",
    ],
    thumbnail: "/images/projects/deploykit.jpg",
    images: ["/images/projects/deploykit.jpg"],
    githubUrl: "https://github.com/alexmorgan/deploykit",
    featured: false,
    year: 2023,
    keyFeatures: [
      "Declarative YAML deployment config",
      "Canary and blue/green release strategies",
      "Automatic rollback on health check failure",
      "Multi-cloud support (AWS, GCP, Vercel)",
      "Slack and Discord notifications",
      "Native GitHub Actions integration",
    ],
  },
  {
    id: "6",
    slug: "storefront-ai",
    title: "Storefront AI",
    description:
      "A Shopify-native AI merchandising tool that auto-generates product descriptions, recommends upsells, and personalizes storefront copy by customer segment.",
    longDescription:
      "Storefront AI plugs into Shopify's Admin API and uses AI to eliminate the most time-consuming parts of running an e-commerce store: writing product copy, deciding what to recommend, and A/B testing messaging for different customer segments.",
    challenge:
      "Shopify merchants wasted hours writing mediocre product descriptions and guessing at cross-sell logic. Personalizing the storefront for different customer types required expensive custom development.",
    solution:
      "Built a Shopify Embedded App using Polaris and Next.js. Used Claude API to generate SEO-optimized product descriptions at scale. Implemented a recommendation engine using collaborative filtering on order history data.",
    outcome:
      "Deployed to 45+ Shopify stores. Merchants reported 28% average increase in add-to-cart rate. Generated 10,000+ product descriptions in the first 60 days.",
    category: "ai",
    tags: ["E-commerce", "AI", "Shopify", "SaaS"],
    techStack: [
      "Next.js",
      "Shopify Polaris",
      "Shopify API",
      "Node.js",
      "PostgreSQL",
      "Anthropic API",
      "Redis",
      "Vercel",
    ],
    thumbnail: "/images/projects/storefront-ai.jpg",
    images: ["/images/projects/storefront-ai.jpg"],
    liveUrl: "https://apps.shopify.com/storefront-ai",
    githubUrl: "https://github.com/alexmorgan/storefront-ai",
    featured: false,
    year: 2024,
    keyFeatures: [
      "AI product description generation (SEO-optimized)",
      "Collaborative filtering recommendation engine",
      "Customer segment personalization",
      "A/B testing built-in",
      "Bulk operations (generate 100+ descriptions at once)",
      "Shopify Analytics integration",
    ],
  },
  {
    id: "7",
    slug: "react-query-inspector",
    title: "React Query Inspector",
    description:
      "An open-source browser DevTools extension that visualizes React Query cache state, invalidation chains, and request waterfalls in real time.",
    longDescription:
      "React Query Inspector extends Chrome DevTools with a dedicated panel for debugging server state. It shows the full cache tree, query statuses, stale times, and creates a timeline of invalidations — making it dramatically easier to diagnose data-fetching bugs.",
    challenge:
      "Debugging React Query issues required console logging cache state manually or relying on the basic official devtools that lacked timeline visualization and invalidation chain tracking.",
    solution:
      "Built a Chrome extension using Manifest V3 with a content script that hooks into React Query's query cache. Visualized cache state with D3.js in a DevTools panel. Added a timeline view that replays cache events.",
    outcome:
      "2.3k GitHub stars, 580+ weekly Chrome Web Store installs. Adopted by the React Query community with a mention in TkDodo's blog.",
    category: "opensource",
    tags: ["Open Source", "DevTool", "React", "Chrome Extension"],
    techStack: [
      "TypeScript",
      "React",
      "Chrome Extension API",
      "D3.js",
      "React Query",
      "Webpack",
    ],
    thumbnail: "/images/projects/rq-inspector.jpg",
    images: ["/images/projects/rq-inspector.jpg"],
    githubUrl: "https://github.com/alexmorgan/react-query-inspector",
    featured: false,
    year: 2022,
    keyFeatures: [
      "Real-time cache state visualization (tree view)",
      "Query invalidation chain tracking",
      "Request waterfall timeline",
      "Cache replay (rewind and replay events)",
      "Filter and search queries",
      "Export cache snapshot as JSON",
    ],
  },
  {
    id: "8",
    slug: "pulse-crm",
    title: "Pulse CRM",
    description:
      "A lightweight, AI-powered CRM built for indie consultants and small agencies — with automated follow-up drafts, deal health scoring, and a kanban pipeline.",
    longDescription:
      "Pulse CRM strips out enterprise bloat and focuses on what freelancers and small agencies actually need: knowing who to follow up with, having a first draft of that email ready, and understanding the health of their pipeline at a glance.",
    challenge:
      "Most CRMs are over-engineered for solo operators and small teams. Salesforce requires full-time admins. HubSpot's free tier is crippled. Notion databases lack the domain logic. There was a clear gap for a CRM that felt like it was built for one person.",
    solution:
      "Built a Next.js app with a Supabase backend. Used AI to analyze deal notes and score health. Automated email draft generation based on deal stage and contact history. Built a drag-and-drop Kanban board for pipeline management.",
    outcome:
      "200+ paying subscribers at $29/month. MRR of $5,800 after 3 months. 4.9/5 rating from early access users.",
    category: "web",
    tags: ["SaaS", "CRM", "AI", "Productivity"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Anthropic API",
      "Stripe",
      "Tailwind CSS",
      "Framer Motion",
    ],
    thumbnail: "/images/projects/pulse-crm.jpg",
    images: ["/images/projects/pulse-crm.jpg"],
    liveUrl: "https://pulsecrm.co",
    githubUrl: "https://github.com/alexmorgan/pulse-crm",
    featured: false,
    year: 2024,
    keyFeatures: [
      "AI deal health scoring (0-100)",
      "Automated follow-up email draft generation",
      "Drag-and-drop Kanban pipeline",
      "Contact timeline and interaction history",
      "Pipeline revenue forecasting",
      "Gmail and Outlook integration",
    ],
  },
];

export const categories = ["all", "web", "mobile", "ai", "opensource"] as const;
export type Category = (typeof categories)[number];
