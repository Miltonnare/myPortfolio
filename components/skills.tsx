const skillCards = [
  {
    title: "Python Development",
    body: "Python for backend services, scripting, and data workflows."
  },
  {
    title: "JavaScript",
    body: "Modern JavaScript / TypeScript for rich client experiences."
  },
  {
    title: "Backend Development",
    body: "Node.js, Express, and PHP (incl. Laravel) for RESTful APIs."
  },
  {
    title: "Database Management",
    body: "MySQL, PostgreSQL, and MongoDB for data modeling and queries."
  },
  {
    title: "Artificial Intelligence",
    body: "Understanding of ML concepts and data‑driven problem solving."
  },
  {
    title: "Web Development",
    body: "Semantic HTML, modern CSS, Tailwind, and responsive layouts."
  },
  {
    title: "Network Troubleshooting",
    body: "Hands‑on troubleshooting and basic configuration skills."
  }
];

const languages = ["Python", "JavaScript", "PHP", "C++", "SQL", "HTML & CSS"];

const strengths = [
  {
    title: "Teamwork",
    body: "Working effectively with cross‑functional teams to ship features."
  },
  {
    title: "Collaboration",
    body: "Collaborating with designers, PMs, and engineers with empathy."
  },
  {
    title: "Communication",
    body: "Explaining trade‑offs clearly in both technical and simple terms."
  },
  {
    title: "Problem Solving",
    body: "Structured approach to debugging and iterative improvement."
  },
  {
    title: "Adaptability",
    body: "Learning new tools and stacks quickly as requirements evolve."
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-container section-padding space-y-10">
      <div className="space-y-3 text-center">
        <p className="tag mx-auto">Skills</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          A practical mix of frontend, backend, and CS fundamentals.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          I focus on shipping reliable features, not just tutorials—balancing clean UI,
          robust APIs, and maintainable code.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCards.map((skill) => (
          <div
            key={skill.title}
            className="glass flex h-full flex-col rounded-2xl p-4 text-left shadow-subtle"
          >
            <h3 className="text-sm font-semibold text-foreground">{skill.title}</h3>
            <p className="mt-2 text-xs text-foreground-muted sm:text-sm">
              {skill.body}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Programming languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lng) => (
              <span
                key={lng}
                className="rounded-full border border-border-subtle bg-slate-950/70 px-3 py-1 text-xs text-foreground-muted transition hover:border-primary hover:text-foreground"
              >
                {lng}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Engineering strengths
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border-subtle bg-slate-950/70 p-4"
              >
                <p className="text-xs font-semibold text-foreground">{s.title}</p>
                <p className="mt-2 text-xs text-foreground-muted sm:text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

