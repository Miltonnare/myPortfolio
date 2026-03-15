import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle/60 bg-slate-950/80">
      <div className="section-container py-8 text-center text-sm text-foreground-muted">
        <div className="mb-4">
          <h3 className="text-base font-semibold text-foreground">
            Let&apos;s build something together
          </h3>
          <p className="mt-1 text-xs sm:text-sm">
            Open to internships, junior roles, and impactful collaborations.
          </p>
        </div>
        <div className="mb-4 flex justify-center gap-5 text-xs sm:text-sm">
          <Link
            href="https://github.com/Miltonnare"
            target="_blank"
            className="text-foreground-muted transition hover:-translate-y-0.5 hover:text-primary"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
            target="_blank"
            className="text-foreground-muted transition hover:-translate-y-0.5 hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/Mr2Logic"
            target="_blank"
            className="text-foreground-muted transition hover:-translate-y-0.5 hover:text-primary"
          >
            X
          </Link>
          <Link
            href="mailto:miltonnareblessed@gmail.com"
            className="text-foreground-muted transition hover:-translate-y-0.5 hover:text-primary"
          >
            Email
          </Link>
        </div>
        <p className="text-xs text-foreground-muted/70">
          © {new Date().getFullYear()} Milton · All rights reserved.
        </p>
      </div>
    </footer>
  );
}

