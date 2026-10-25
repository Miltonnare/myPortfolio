"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Case Studies" },
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
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-background/90 backdrop-blur-md shadow-subtle"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground transition-all"
        >
          <span className="rounded-xl bg-linear-to-r from-primary to-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-soft group-hover:scale-105 transition-transform duration-300">
            Milton.dev
          </span>
          <span className="hidden text-xs text-foreground-muted sm:inline group-hover:text-foreground transition-colors duration-300 font-mono">
            / Software Engineer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <div className="flex gap-5 text-xs font-semibold text-foreground-muted">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="h-4 w-px bg-border-subtle" />

          {/* Socials & Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Miltonnare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-foreground-muted hover:text-foreground transition-colors"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-foreground-muted hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            
            <ThemeToggle />

            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="glass rounded-xl p-2 text-foreground"
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
            className="border-b border-border-subtle bg-background/95 backdrop-blur-xl md:hidden px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3 text-sm font-semibold text-foreground-muted">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-1 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border-subtle pt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Miltonnare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
