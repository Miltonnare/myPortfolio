"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle/60 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section-container flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="rounded-full bg-primary-soft px-2 py-1 text-xs font-semibold text-primary">
            Milton
          </span>
          <span className="hidden text-xs text-foreground-muted sm:inline">
            Software Engineer
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-6 text-xs font-medium text-foreground-muted md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <Link
              href="/CV.pdf"
              target="_blank"
              className="rounded-full border border-border-subtle px-3 py-1 text-xs hover:border-primary hover:text-primary"
            >
              CV / Resume
            </Link>
          </div>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle text-xs text-foreground-muted md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border-subtle/60 bg-slate-950/90 backdrop-blur-xl md:hidden">
          <div className="section-container flex flex-col gap-2 py-3 text-sm text-foreground-muted">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/CV.pdf"
              target="_blank"
              className="mt-1 rounded-full border border-border-subtle px-3 py-1 text-xs hover:border-primary hover:text-primary"
              onClick={() => setOpen(false)}
            >
              CV / Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

