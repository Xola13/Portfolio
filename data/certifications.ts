export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialId: "AWS-PSA-2024-AXM",
    credentialUrl: "https://aws.amazon.com/verification",
    description:
      "Advanced certification covering complex cloud architecture, multi-account strategies, migration, and cost optimization across the full AWS service catalog.",
  },
  {
    id: "2",
    name: "Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "November 2023",
    credentialId: "GCP-MLE-2023-AXM",
    credentialUrl: "https://google.com/certification",
    description:
      "Covers designing, building, and operationalizing ML models on Google Cloud, including Vertex AI, MLOps pipelines, and responsible AI practices.",
  },
  {
    id: "3",
    name: "Meta React Native Developer",
    issuer: "Meta (Coursera)",
    date: "July 2023",
    credentialId: "META-RN-2023",
    credentialUrl: "https://coursera.org/verify",
    description:
      "Comprehensive program covering React Native fundamentals, UI/UX for mobile, Expo, and publishing to the App Store and Google Play.",
  },
];

export interface Award {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}

export const awards: Award[] = [
  {
    id: "1",
    name: "Best DevTool",
    issuer: "HackMIT 2024",
    date: "October 2024",
    description: "Won Best DevTool award for CodePulse, a real-time collaborative code editor with AI pair programming.",
    icon: "🏆",
  },
  {
    id: "2",
    name: "Best Innovation",
    issuer: "UT Hack 2018",
    date: "November 2018",
    description: "Won Best Innovation award for a real-time ASL sign language recognition system using CNNs.",
    icon: "🥇",
  },
  {
    id: "3",
    name: "Featured in TechCrunch",
    issuer: "TechCrunch",
    date: "August 2023",
    description: "FinVision Dashboard featured as 'a Bloomberg Terminal for the rest of us' in TechCrunch.",
    icon: "📰",
  },
];
