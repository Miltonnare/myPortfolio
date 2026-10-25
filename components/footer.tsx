"use client";

import Link from "next/link";
import { Mail, ArrowUp, MapPin, Terminal, ExternalLink } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/brand-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Miltonnare",
      icon: <Github className="h-4 w-4" />,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/milton-odhiambo-14a662261",
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:miltonnareblessed@gmail.com",
      icon: <Mail className="h-4 w-4" />,
      label: "Email"
    },
    {
      href: "https://x.com/Mr2Logic",
      icon: <Twitter className="h-4 w-4" />,
      label: "X (Twitter)"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "Engineering Background" },
    { href: "#skills", label: "Technical Stack" },
    { href: "#capabilities", label: "Architectural Depth" },
    { href: "#projects", label: "Case Studies" },
    { href: "#ai-evaluation", label: "AI & LLM Benchmarking" },
    { href: "#contact", label: "Direct Contact" }
  ];

  const flagshipRepos = [
    {
      href: "https://github.com/Miltonnare/LuminaDB",
      label: "LuminaDB (C++17 Engine)"
    },
    {
      href: "https://github.com/Miltonnare/MicroJob_Project",
      label: "MicroJob Kenya Monorepo"
    },
    {
      href: "https://github.com/Miltonnare/feb-2025-final-project-and-deployment-Miltonnare",
      label: "theeBloggers SaaS Platform"
    },
    {
      href: "https://github.com/Miltonnare/AuthenticityAI",
      label: "AuthenticityAI (NLI & Vectors)"
    },
    {
      href: "https://github.com/Miltonnare/EVENTMANAGEMENT",
      label: "Murang'a Events Reloaded"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-subtle bg-white/95 dark:bg-slate-950/90 text-foreground backdrop-blur-md transition-colors duration-300">
      <div className="section-container py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Column 1: Brand & Engineering Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="rounded-xl bg-linear-to-r from-primary to-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-soft">
                Milton.dev
              </span>
              <span className="text-sm font-bold text-foreground">
                Milton Odhiambo
              </span>
            </div>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-foreground-muted">
              Software Engineer building transactional C++17 database engines, full-stack TypeScript monorepos, and asynchronous Python AI microservices.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-700 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Full-Time &amp; Remote Roles</span>
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Nairobi, KE (UTC+3)</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-slate-100 dark:bg-slate-900 text-foreground-muted hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span>Portfolio Sections</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-foreground-muted">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Flagship Repositories */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5 text-primary" />
              <span>Flagship Repositories</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-foreground-muted">
              {flagshipRepos.map((repo) => (
                <li key={repo.href}>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{repo.label}</span>
                    <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <p>
            &copy; {currentYear} <span className="font-semibold text-foreground">Milton Odhiambo</span>. Engineered with Next.js, TypeScript &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border-subtle bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
