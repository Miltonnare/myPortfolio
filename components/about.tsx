import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section-container section-padding">
      <div className="mb-8 space-y-3 text-center md:text-left">
        <p className="tag mx-auto md:mx-0">About</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Developer with a strong CS foundation.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted md:mx-0 sm:text-base">
          I&apos;m a software developer passionate about solving real problems with
          clean, maintainable code. I enjoy working across the stack—from intuitive
          frontends to robust APIs and data models.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-start">
        <div className="space-y-5">
          <div className="glass flex flex-col items-center gap-4 rounded-3xl p-6 md:items-start">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border-subtle shadow-subtle">
              <Image
                src="/images/prof.png"
                alt="Milton profile"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground">Milton</h3>
              <p className="text-xs uppercase tracking-wide text-foreground-muted/80">
                Software Developer · CS Student
              </p>
              <p className="text-sm text-foreground-muted">
                I thrive in problem‑solving, building user‑friendly experiences, and
                shipping reliable web applications.
              </p>
            </div>
          </div>

          <div className="grid gap-4 text-xs text-foreground-muted sm:grid-cols-2">
            <div className="rounded-2xl border border-border-subtle/60 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-wide text-foreground-muted/70">
                Education
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                BSc. Computer Science
              </p>
              <p className="mt-1">
                Murang&apos;a University of Technology with focus on Data Structures,
                Algorithms, OOP in C++, Web Development, and AI.
              </p>
            </div>
            <div className="rounded-2xl border border-border-subtle/60 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-wide text-foreground-muted/70">
                Power Learn Project
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Software Development Track
              </p>
              <p className="mt-1">
                Python, databases, web development, startup building, and software
                engineering essentials.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
              Interests
            </h3>
            <div className="grid gap-3 text-xs sm:grid-cols-3">
              {[
                "Software Engineering",
                "Python Development",
                "Artificial Intelligence",
                "Data Science",
                "Cybersecurity",
                "Cloud Computing"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border-subtle/60 bg-slate-950/70 px-3 py-2 text-center text-foreground-muted transition hover:border-primary hover:text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
              What I&apos;m aiming for
            </h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>
                • Early‑career roles where I can contribute to production React /
                Node.js codebases.
              </li>
              <li>
                • Teams that value clean design systems, testing, and thoughtful UX.
              </li>
              <li>
                • Opportunities to work on APIs, authentication, and developer tools.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

