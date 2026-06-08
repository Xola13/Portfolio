export interface Experience {
  id: string;
  type: "work" | "education";
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  techStack?: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    type: "work",
    role: "Senior Full-Stack Engineer & AI Lead",
    company: "Veritas Labs",
    companyUrl: "https://veritaslabs.io",
    location: "San Francisco, CA (Remote)",
    startDate: "Jan 2023",
    endDate: "Present",
    description:
      "Leading AI product development at a Series A startup building developer productivity tools. Own the full technical stack from LLM integration to frontend UX, and mentor a team of 4 engineers.",
    achievements: [
      "Architected and shipped Nexus AI Platform, generating $180k ARR within 6 months of launch",
      "Reduced LLM API costs by 40% via intelligent caching and prompt compression strategies",
      "Established engineering best practices: CI/CD, code review standards, and on-call rotation",
      "Led migration from monolith to microservices, improving deployment frequency by 3x",
      "Hired and onboarded 3 full-stack engineers and 1 ML engineer",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "Anthropic API",
    ],
  },
  {
    id: "2",
    type: "work",
    role: "Full-Stack Engineer",
    company: "Meridian Technologies",
    companyUrl: "https://meridian.tech",
    location: "New York, NY",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description:
      "Worked on a FinTech platform serving 50,000+ active users, building features across the full stack with a focus on performance and reliability.",
    achievements: [
      "Built real-time trading dashboard with WebSocket feeds handling 10k+ concurrent connections",
      "Reduced page load time by 62% through code splitting, caching, and image optimization",
      "Implemented fraud detection ML model that reduced chargebacks by 34%",
      "Shipped mobile-responsive redesign that increased mobile conversion by 28%",
      "Introduced React Testing Library, achieving 78% test coverage from near zero",
    ],
    techStack: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "AWS",
      "GraphQL",
      "Python",
    ],
  },
  {
    id: "3",
    type: "work",
    role: "Frontend Engineer",
    company: "Pixel & Pine Studio",
    companyUrl: "https://pixelandpine.co",
    location: "Austin, TX",
    startDate: "Aug 2019",
    endDate: "May 2021",
    description:
      "Design-forward digital agency building bespoke web experiences for brands and startups. Collaborated closely with designers to deliver pixel-perfect, performant frontends.",
    achievements: [
      "Delivered 20+ client projects on time and within budget, including campaigns for 3 Fortune 500 brands",
      "Built a component design system used across all agency projects, reducing dev time by 40%",
      "Implemented WebGL-based interactive experiences using Three.js and GSAP",
      "Achieved Lighthouse scores of 95+ on all delivered projects",
      "Introduced Storybook for component documentation and visual QA",
    ],
    techStack: [
      "React",
      "JavaScript",
      "GSAP",
      "Three.js",
      "Figma",
      "Tailwind CSS",
      "Gatsby",
      "GraphQL",
    ],
  },
  {
    id: "4",
    type: "education",
    role: "B.S. Computer Science, Minor in Mathematics",
    company: "University of Texas at Austin",
    location: "Austin, TX",
    startDate: "Aug 2015",
    endDate: "May 2019",
    description:
      "Graduated with Honors (GPA 3.8/4.0). Specialized in Human-Computer Interaction and Machine Learning. Active in the Texas Convergent startup incubator and ACM chapter.",
    achievements: [
      "Dean's List: 6 out of 8 semesters",
      "Senior capstone: Real-time ASL recognition using CNNs (96% accuracy)",
      "President of the Web Development Club (grew to 120 members)",
      "Teaching Assistant for CS 371P: Object-Oriented Programming (2 semesters)",
      "Best Innovation Award at UT Hack 2018",
    ],
  },
];
