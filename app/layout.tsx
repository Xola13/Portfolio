import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan | Full-Stack Engineer & AI Specialist",
    template: "%s | Alex Morgan",
  },
  description:
    "Full-Stack Engineer and AI Specialist with 5+ years building production-grade web applications, AI-powered tools, and open-source projects.",
  keywords: [
    "Full-Stack Engineer",
    "AI Specialist",
    "React Developer",
    "Next.js",
    "TypeScript",
    "LLM Integration",
    "San Francisco",
  ],
  authors: [{ name: "Alex Morgan", url: "https://alexmorgan.dev" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan | Full-Stack Engineer & AI Specialist",
    description:
      "Full-Stack Engineer and AI Specialist with 5+ years building production-grade web applications and AI tools.",
    siteName: "Alex Morgan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Morgan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | Full-Stack Engineer & AI Specialist",
    description:
      "Full-Stack Engineer and AI Specialist with 5+ years building production-grade applications.",
    creator: "@alexmorgandev",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased grain">
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
