import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Milton Odhiambo | Software Engineer — Full-Stack, Systems & AI",
  description:
    "Developer portfolio and engineering case studies of Milton Odhiambo, a software engineer specializing in C++17 database engines, NestJS/React 19 monorepos, Python FastAPI microservices, and LLM evaluation.",
  keywords: [
    "Milton Odhiambo",
    "Miltonnare",
    "Software Engineer Nairobi",
    "Full-Stack Developer Kenya",
    "C++17 Database Engine",
    "LuminaDB",
    "NestJS TypeScript Engineer",
    "FastAPI Python AI Developer",
    "AI Evaluation Specialist"
  ],
  authors: [{ name: "Milton Odhiambo", url: "https://github.com/Miltonnare" }],
  metadataBase: new URL("https://miltonnaresportfolio.netlify.app/"),
  alternates: {
    canonical: "https://miltonnaresportfolio.netlify.app/"
  },
  openGraph: {
    title: "Milton Odhiambo | Software Engineer — Full-Stack, Systems & AI",
    description:
      "Building transactional C++17 storage engines, full-stack TypeScript monorepos, and low-latency Python AI pipelines.",
    url: "https://miltonnaresportfolio.netlify.app/",
    siteName: "Milton Odhiambo Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Milton Odhiambo | Software Engineer",
    description:
      "Full-Stack, Distributed APIs, C++17 Systems & AI/NLP Engineering Case Studies.",
    creator: "@Mr2Logic"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milton Odhiambo",
    alternateName: "Miltonnare",
    jobTitle: "Software Engineer",
    url: "https://miltonnaresportfolio.netlify.app/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Murang'a University of Technology"
    },
    sameAs: [
      "https://github.com/Miltonnare",
      "https://www.linkedin.com/in/milton-odhiambo-14a662261",
      "https://x.com/Mr2Logic"
    ],
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "C++17",
      "Database Storage Engines",
      "PostgreSQL",
      "MongoDB",
      "Natural Language Inference",
      "LLM Benchmarking"
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("portfolio-theme")||"dark";document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.classList.toggle("light",t==="light");}catch(e){}`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col gradient-bg">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
