"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
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

  return (
    <footer className="border-t border-border-subtle/40 bg-slate-950/70 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left text-sm text-foreground-muted">
        
        {/* Footer Brand Info */}
        <div className="space-y-1">
          <h3 className="font-bold text-foreground">Milton Odhiambo</h3>
          <p className="text-xs text-foreground-muted">
            Building reliable web solutions & API systems.
          </p>
        </div>

        {/* Social Links Panel */}
        <div className="flex justify-center gap-3">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-slate-900/30 text-foreground-muted hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-foreground-muted/65">
          &copy; {currentYear} Milton. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
