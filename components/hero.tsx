import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="section-container section-padding flex flex-col items-start gap-10 md:flex-row md:items-center"
    >
      <div className="flex-1 space-y-5">
        <p className="tag">Hey, I&apos;m Milton 👋</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Software Developer{" "}
          <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
            crafting reliable web experiences.
          </span>
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          I build performant interfaces and full‑stack applications with{" "}
          <span className="font-medium text-foreground">React, TypeScript</span>{" "}
          and{" "}
          <span className="font-medium text-foreground">
            Node.js / Express / MongoDB
          </span>
          . Currently focused on developer tools, API‑driven backends, and clean UX.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="#projects" className="btn-primary">
            View projects
          </Link>
          <Link href="#contact" className="btn-outline">
            Contact
          </Link>
        </div>
      </div>

      <div className="relative mt-4 flex-1 md:mt-0">
        <div className="glass relative mx-auto max-w-xs rounded-3xl p-6 shadow-soft">
          <p className="mb-2 text-xs font-medium text-primary">Currently</p>
          <p className="text-sm text-foreground-muted">
            CS student at Murang&apos;a University & Power Learn Project fellow, building
            production‑grade web applications.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-foreground-muted">
            <div className="rounded-2xl border border-border-subtle/70 bg-slate-950/60 p-3">
              <p className="text-[10px] uppercase tracking-wide text-foreground-muted/70">
                Focus
              </p>
              <p className="mt-1 font-medium text-foreground">Full‑stack JavaScript</p>
            </div>
            <div className="rounded-2xl border border-border-subtle/70 bg-slate-950/60 p-3">
              <p className="text-[10px] uppercase tracking-wide text-foreground-muted/70">
                Interests
              </p>
              <p className="mt-1 font-medium text-foreground">AI, data, dev tooling</p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
          <div className="h-full w-full rounded-[40px] bg-radial-soft" />
        </div>
      </div>
    </section>
  );
}

