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

// Sorted chronologically, most recent first.
export const experiences: Experience[] = [
  {
    id: "1",
    type: "work",
    role: "Software Engineer",
    company: "CondorGreen Infotech",
    location: "Cape Town, Western Cape, South Africa",
    startDate: "Feb 2025",
    endDate: "Present",
    description:
      "Responsible for designing, developing, and maintaining automation workflows using UiPath Studio and Orchestrator, alongside QA automation testing with Playwright.",
    achievements: [
      "Analyse business processes to identify automation opportunities and implement efficient RPA solutions",
      "Build and monitor UiPath bots to ensure smooth, reliable operation",
      "Develop and maintain automated test suites using Playwright for QA automation",
      "Collaborate with stakeholders to gather requirements and troubleshoot issues",
      "Maintain well-documented, reliable automation workflows",
    ],
    techStack: ["UiPath Studio", "UiPath Orchestrator", "Playwright", "C#", "Python", "SQL"],
  },
  {
    id: "e3",
    type: "education",
    role: "Software Development Training",
    company: "CTU Training Solutions",
    location: "South Africa",
    startDate: "2024",
    endDate: "2024",
    description:
      "Six-month Software Development training program building a strong foundation in object-oriented programming using Java and C#.",
    achievements: [
      "Hands-on development of applications using variables, control structures, classes, and methods",
      "Practical experience with SQL databases — designing tables, writing complex queries, and data manipulation",
      "Developed a solid understanding of debugging techniques and writing clean, maintainable code",
    ],
    techStack: ["Java", "C#", "SQL"],
  },
  {
    id: "2",
    type: "work",
    role: "Web Developer Intern",
    company: "Life Choices Studio",
    location: "Cape Town, South Africa",
    startDate: "Apr 2022",
    endDate: "Aug 2022",
    description:
      "Designed, developed, and maintained client websites using HTML, CSS, JavaScript, and WordPress, ensuring responsive, user-friendly designs.",
    achievements: [
      "Customised WordPress themes and plugins to meet client requirements",
      "Troubleshot issues and optimised site performance",
      "Implemented new features based on client objectives",
      "Collaborated directly with clients to understand project goals and deliver aligned solutions",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    id: "e2",
    type: "education",
    role: "Full-Stack Development Bootcamp",
    company: "Life Choices Academy",
    location: "Cape Town, South Africa",
    startDate: "2022",
    endDate: "2022",
    description:
      "Six-month Full-Stack Development coding bootcamp, gaining hands-on experience building web applications using JavaScript, HTML, Python, and Node.js.",
    achievements: [
      "Covered core programming concepts, backend logic, and application structure",
      "Strengthened problem-solving skills and understanding of software development fundamentals",
    ],
    techStack: ["JavaScript", "HTML", "Python", "Node.js"],
  },
  {
    id: "e1",
    type: "education",
    role: "Electronic Engineering (Light Current), N1–N3",
    company: "Northlink College",
    location: "Cape Town, South Africa",
    startDate: "2019",
    endDate: "2019",
    description:
      "Electronic Engineering (Light Current) studies from N1 to N3, with a strong foundation in Logic Systems, Industrial Electronics, Radio Theory, and Mathematics.",
    achievements: [
      "Developed analytical thinking, systems understanding, and problem-solving skills",
    ],
  },
];
