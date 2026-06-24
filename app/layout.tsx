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
    default: "Xola Magatya | Software Developer & QA Automation Engineer",
    template: "%s | Xola Magatya",
  },
  description:
    "Software Developer based in Cape Town, South Africa. Specialising in QA Automation with Playwright, RPA Development with UiPath, software development, and web development.",
  keywords: [
    "Software Developer",
    "QA Automation",
    "Playwright",
    "RPA Developer",
    "UiPath",
    "Software Development",
    "Web Developer",
    "Cape Town",
    "South Africa",
    "Xola Magatya",
  ],
  authors: [{ name: "Xola Magatya" }],
  creator: "Xola Magatya",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    title: "Xola Magatya | Software Developer",
    description:
      "Software Developer based in Cape Town, South Africa. Building solutions with software development, Azure DevOps, and modern web technologies.",
    siteName: "Xola Magatya Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xola Magatya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xola Magatya | Software Developer",
    description:
      "Software Developer based in Cape Town, South Africa.",
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
