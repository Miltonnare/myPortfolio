import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description:
    "Modern portfolio for a full stack software engineer specializing in React, Node.js, and scalable web applications.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Software Engineer Portfolio",
    description:
      "Full stack developer focused on building performant, delightful experiences.",
    url: "https://example.com",
    siteName: "Developer Portfolio",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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

