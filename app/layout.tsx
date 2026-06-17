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
  title: "Milton Odhiambo | Full-Stack Software Engineer Portfolio",
  description:
    "Premium developer portfolio of Milton Odhiambo, a full-stack engineer specializing in React, Next.js, TypeScript, Node.js, and Python API architecture.",
  metadataBase: new URL("https://miltonnaresportfolio.netlify.app/"),
  openGraph: {
    title: "Milton Odhiambo | Full-Stack Software Engineer",
    description:
      "Full-stack developer focused on engineering high-performing backends, optimizing databases, and designing intuitive interfaces.",
    url: "https://miltonnaresportfolio.netlify.app/",
    siteName: "Milton Odhiambo Portfolio",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
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
