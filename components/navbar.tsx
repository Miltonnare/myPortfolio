"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle/70 bg-background/80 backdrop-blur-md shadow-subtle"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-all"
        >
          <span className="rounded-xl bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-bold text-white shadow-soft group-hover:scale-105 transition-transform duration-300">
            Milton.dev
          </span>
          <span className="hidden text-xs text-foreground-muted sm:inline group-hover:text-foreground transition-colors duration-300">
            Full-Stack Software Engineer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-6 text-xs font-medium text-foreground-muted">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-border-subtle" />

          {/* Socials & Resume */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Miltonnare"
              target="_blank"
              aria-label="GitHub"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <Github className="h-4.5 w-4.5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
              target="_blank"
              aria-label="LinkedIn"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </Link>
            
            <ThemeToggle />

            <Link
              href="/CV.pdf"
              target="_blank"
              className="flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.02]"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </Link>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-slate-900/30 text-foreground-muted hover:text-foreground"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border-subtle bg-background/95 backdrop-blur-lg md:hidden overflow-hidden"
          >
            <div className="section-container flex flex-col gap-4 py-6 text-sm text-foreground-muted">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex py-2 text-base font-medium hover:text-foreground transition-colors border-b border-border-subtle/40"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-6 py-2">
                <Link
                  href="https://github.com/Miltonnare"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
              </div>

              <Link
                href="/CV.pdf"
                target="_blank"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white shadow-soft"
                onClick={() => setOpen(false)}
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
