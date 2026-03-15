"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Fullstack", value: "fullstack" },
  { label: "APIs", value: "api" },
  { label: "Experiments", value: "experiment" }
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container section-padding space-y-8">
      <div className="space-y-3 text-center">
        <p className="tag mx-auto">Projects</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Production‑minded projects and experiments.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          A selection of UI experiments, tools, and apps—showcasing both frontend craft
          and practical engineering.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 text-xs">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full border px-3 py-1 transition ${
              filter === f.value
                ? "border-primary bg-primary-soft text-primary"
                : "border-border-subtle bg-slate-950/60 text-foreground-muted hover:border-primary hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

