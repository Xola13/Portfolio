// ⚠️  These are illustrative placeholder projects that match your skill areas.
// Replace each one with a real project you've worked on.
// The structure stays the same — just update the content.

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
  thumbnail?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  keyFeatures: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "playwright-automation-suite",
    title: "Playwright E2E Automation Suite",
    description:
      "End-to-end test automation framework built with Playwright covering critical user journeys, regression testing, and API contract validation for a web application.",
    longDescription:
      "A comprehensive QA automation suite using Playwright that covers end-to-end user journeys, regression testing, and API contract testing. Structured with the Page Object Model for maintainability and integrated into the CI/CD pipeline.", // TODO: update with the real project context
    challenge:
      "Manual regression testing was slow and error-prone, causing delays in release cycles and occasional production defects that should have been caught earlier.", // TODO: update
    solution:
      "Designed a Playwright automation suite using the Page Object Model pattern, covering critical user journeys. Integrated with Azure DevOps pipelines to run on every pull request.", // TODO: update
    outcome:
      "Significantly reduced manual testing time and improved confidence in releases by catching regressions automatically before code reaches production.", // TODO: add real metrics if you have them
    category: "ai",
    tags: ["QA Automation", "Playwright", "Testing", "Featured"],
    techStack: ["Playwright", "TypeScript", "Azure DevOps", "Page Object Model", "CI/CD"],
    githubUrl: "https://github.com/[your-github]/[repo-name]", // TODO: add real repo
    featured: true,
    year: 2025,
    keyFeatures: [
      "Page Object Model architecture for maintainable test code",
      "End-to-end coverage of critical user journeys",
      "API testing and response validation",
      "Integrated with Azure DevOps CI/CD pipeline",
      "Automated regression suite with clear failure reporting",
      "Cross-browser test execution",
    ],
  },
  {
    id: "2",
    slug: "uipath-rpa-challenge",
    title: "UiPath RPA Challenge",
    description:
      "A UiPath bot built for the RPA Challenge (rpachallenge.com) — reads applicant data from Excel and fills out a web form whose fields shuffle position on every round, submitting all records correctly.",
    longDescription:
      "A solution to the well-known UiPath RPA Challenge: the bot reads a set of records from an Excel spreadsheet and enters each one into an on-screen web form, repeating the process for every row. The form's input fields are repositioned after every submission, so the bot can't rely on fixed coordinates — it has to reliably locate and fill the correct field every time using UI Automation.",
    challenge:
      "The RPA Challenge is designed to break naive automation: form fields randomly reshuffle position after each submission, so any bot relying on static coordinates or simple click sequences fails partway through.",
    solution:
      "Built in UiPath Studio using Excel Activities to read the source spreadsheet and UI Automation Activities to dynamically locate and fill each form field by its selector rather than its position, looping through every row and submitting the form for each one.",
    outcome:
      "Built and ran a working bot that correctly fills and submits the form for every record in the spreadsheet despite the fields moving each round — a practical exercise in writing automation that's resilient to UI changes rather than brittle and position-dependent.",
    category: "ai",
    tags: ["RPA", "UiPath", "Automation"],
    techStack: ["UiPath Studio", "UI Automation", "Excel Activities", "VB.NET"],
    githubUrl: "https://github.com/Xola13/Rpa-Challenge1",
    featured: true,
    year: 2025,
    keyFeatures: [
      "Reads applicant records from an Excel spreadsheet",
      "Dynamically locates form fields by selector, not fixed position",
      "Handles fields that reshuffle position after every submission",
      "Loops through and submits all records automatically",
      "Built with UiPath Studio's UI Automation and Excel Activities",
    ],
  },
  {
    id: "4",
    slug: "binspa-bin-wash-booking",
    title: "BinSpa — Wheelie Bin Wash Booking Platform",
    description:
      "A booking and subscription website for an on-site wheelie bin washing service in Cape Town — built with Next.js and deployed on Vercel.",
    longDescription:
      "A full booking platform for BinSpa, a premium on-site wheelie bin washing and sanitisation service. Visitors can pick a subscription plan, enter their address, and choose a date in under two minutes — no phone call needed. Includes pricing tiers, a service-area map covering 28+ Cape Town suburbs, an FAQ section, and customer testimonials.",
    challenge:
      "The business needed an online booking flow that let customers self-serve a subscription plan and schedule without calling in, while clearly communicating pricing, coverage area, and service guarantees.",
    solution:
      "Built with Next.js and deployed on Vercel. Designed a hero-driven landing page with a before/after image slider, a 4-step \"How It Works\" section, an FAQ accordion, and a streamlined plan-and-schedule booking flow with WhatsApp and email integration for confirmations.",
    outcome:
      "Shipped a live, production booking site with four subscription tiers, a 28+ suburb service-area map, and a sub-2-minute booking flow — currently running in production for the business.",
    category: "web",
    tags: ["Web Development", "Next.js", "Booking", "Featured"],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    thumbnail: "/images/projects/binspa.jpg",
    images: ["/images/projects/binspa.jpg"],
    liveUrl: "https://dustbin-wash.vercel.app/",
    featured: true,
    year: 2026,
    keyFeatures: [
      "Self-serve booking flow — plan, address, and date in under 2 minutes",
      "Four subscription tiers (weekly, bi-weekly, monthly, one-off)",
      "Service-area coverage map across 28+ Cape Town suburbs",
      "Pause/cancel-anytime subscription management",
      "WhatsApp and email booking confirmations",
      "Customer testimonial carousel and FAQ accordion",
    ],
  },
  {
    id: "6",
    slug: "safelink-id-emergency-system",
    title: "SafeLink ID — Digital Emergency Identity System",
    description:
      "A Progressive Web App giving users a secure, QR-linked emergency identity profile that first responders can scan to access critical information — built with Vue.js, deployed on Render.",
    longDescription:
      "SafeLink ID is a Digital Emergency Identity System for South Africa. Users set up a profile with critical medical and emergency contact information, linked to a personal QR code. Scanning the code opens a read-only emergency view for first responders, while the owner manages their data through a private dashboard with a one-tap panic alert shortcut. Installs as a Progressive Web App for fast, offline-ready access.",
    challenge:
      "In an emergency, first responders often have no fast way to access a person's medical history, allergies, or emergency contacts — every second counts, and locked phones or missing paperwork get in the way.",
    solution:
      "Built a Vue.js Progressive Web App where users create a profile linked to a unique QR code. Scanning the code surfaces a public, read-only emergency view with the information first responders need, while a private dashboard lets the owner manage their details and trigger a one-tap panic alert.",
    outcome:
      "Shipped a live, installable PWA with QR-based emergency access, a personal dashboard, and a one-tap panic alert shortcut — deployed and running in production on Render.",
    category: "web",
    tags: ["Web Development", "PWA", "Vue.js", "Featured"],
    techStack: ["Vue.js", "Vite", "Tailwind CSS", "PWA"],
    thumbnail: "/images/projects/safelink-id.jpg",
    images: ["/images/projects/safelink-id.jpg"],
    liveUrl: "https://safelink-id.onrender.com/",
    featured: true,
    year: 2026,
    keyFeatures: [
      "Secure QR-linked emergency profile accessible by first responders",
      "Private dashboard for managing emergency and medical information",
      "One-tap panic alert shortcut",
      "Installable Progressive Web App with offline support",
      "Dark mode support",
      "Built with Vue.js, Vite, and Tailwind CSS",
    ],
  },
  {
    id: "7",
    slug: "ai-weather-app",
    title: "Weather App — AI-Powered Forecasts",
    description:
      "A Progressive Web App for weather forecasts, air quality, and alerts, with an AI weather assistant and dynamic sky theming — built with React and Vite, deployed on Vercel.",
    longDescription:
      "An AI-powered weather app covering forecasts, air quality, and severe weather alerts. Users can search any city or use their current location, save favourite cities for quick access, switch between °C/°F, and chat with a built-in weather assistant. The background dynamically shifts to reflect current sky conditions, and the app installs as a Progressive Web App.",
    challenge:
      "Most weather apps are static and data-dense — the goal was a faster, more visual experience that also let users ask natural-language questions about the forecast instead of just reading numbers.",
    solution:
      "Built with React and Vite, using TanStack Query for data fetching/caching and a charting library for forecast visualisations. Added a city search with geolocation support, saved cities, unit toggling, and an AI assistant for conversational weather queries, packaged as an installable PWA.",
    outcome:
      "Shipped a live, installable PWA with city search, geolocation, saved cities, air quality and alerts, and a conversational AI weather assistant — deployed and running in production on Vercel.",
    category: "web",
    tags: ["Web Development", "PWA", "React", "Featured"],
    techStack: ["React", "Vite", "TanStack Query", "PWA"],
    thumbnail: "/images/projects/weather-app.jpg",
    images: ["/images/projects/weather-app.jpg"],
    liveUrl: "https://weather-app-one-coral-29.vercel.app/",
    featured: true,
    year: 2026,
    keyFeatures: [
      "City search with geolocation (\"use your location\")",
      "Saved cities for quick access",
      "°C / °F unit toggle",
      "Air quality index and severe weather alerts",
      "Conversational AI weather assistant",
      "Dynamic sky-themed background and installable PWA",
    ],
  },
  {
    id: "8",
    slug: "todo-plans-smart-task-manager",
    title: "Todo Plans — Smart Task Manager",
    description:
      "A smart task manager that understands plain English — type what you need to do and it figures out the priority, tags, and due date for you. Built with Vue.js and Vuetify, deployed on Netlify.",
    longDescription:
      "Todo Plans is a natural-language task manager: typing something like \"Email Sarah !high #work tomorrow 9am\" auto-detects the priority, tags, and due date/time without any forms or pickers. It supports recurring tasks, subtasks, due-date browser reminders, overdue detection, smart sorting, search and filters, progress stats, and an AI assistant powered by Groq for help managing tasks — all with offline persistence and dark mode.",
    challenge:
      "Most todo apps slow users down with separate fields and pickers for priority, tags, and due dates — the goal was to let people capture a task as fast as they think it, in one line of plain text.",
    solution:
      "Built with Vue.js and Vuetify for the UI, with a natural-language parser that reads quick-add shorthand (!high for priority, #tag for tags, \"tomorrow 9am\" / \"every monday\" for due dates and recurrence) and turns it into structured task data. Added a Groq-powered AI assistant, recurring tasks, subtasks, and offline persistence so the app works without a backend.",
    outcome:
      "Shipped a live, installable task manager with natural-language quick-add, recurring tasks, subtasks, smart sorting, progress stats, and an AI assistant — deployed and running in production on Netlify.",
    category: "web",
    tags: ["Web Development", "Vue.js", "Productivity", "Featured"],
    techStack: ["Vue.js", "Vuetify", "Groq AI", "Netlify"],
    thumbnail: "/images/projects/todo-app.jpg",
    images: ["/images/projects/todo-app.jpg"],
    liveUrl: "https://xola-todo-app.netlify.app/#/",
    featured: true,
    year: 2026,
    keyFeatures: [
      "Natural-language quick-add (priority, tags, due dates, and recurrence from plain text)",
      "Recurring tasks and subtasks",
      "Due-date browser reminders and overdue detection",
      "Smart sorting, search, and filters",
      "AI assistant powered by Groq",
      "Progress stats, undo delete, offline persistence, and dark mode",
    ],
  },
];

export const categories = ["all", "web", "mobile", "ai", "opensource"] as const;
export type Category = (typeof categories)[number];
