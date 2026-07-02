"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Award, Zap } from "lucide-react";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All Featured Works", value: "all" },
  { label: "Full-Stack Platforms", value: "fullstack" },
  { label: "APIs & Core Backend", value: "api" }
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const flagshipProject = projects.find((p) => p.flagship);
  const otherProjects = projects.filter((p) => !p.flagship);

  const filtered =
    filter === "all"
      ? otherProjects
      : otherProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container section-padding space-y-12 relative overflow-visible">
      {/* Visual background glows */}
      <div className="absolute top-1/4 right-1/4 h-75 w-75 rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 h-75 w-75 rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-4 text-center">
        <span className="tag flex items-center gap-1.5 w-fit mx-auto">
          <Zap className="h-3.5 w-3.5 text-accent animate-pulse" />
          My Engineering Projects
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Production-Grade Systems & Applications
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          A showcase of technically demanding systems, core backends, and AI pipelines that solve real-world scalability and security challenges.
        </p>
      </div>

      {/* FLAGSHIP PROJECT HIGH-IMPACT LAYOUT */}
      {flagshipProject && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 justify-center lg:justify-start">
            <Award className="h-4.5 w-4.5 animate-bounce" />
            <span>Featured Flagship Application</span>
          </div>
          <ProjectCard project={flagshipProject} isFlagship={true} />
        </div>
      )}

      {/* Divider */}
      <div className="h-[1px] w-full bg-border-subtle/30 my-10" />

      {/* Core Projects Filter & Showcase */}
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-border-subtle/25 pb-4 sm:flex-row">
          <h3 className="text-base font-bold text-foreground sm:text-lg">
            Engineering Catalog
          </h3>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-xl border px-3.5 py-1.5 font-semibold transition-all duration-300 cursor-pointer ${
                  filter === f.value
                    ? "border-primary bg-primary/10 text-primary shadow-soft shadow-primary/10 scale-105"
                    : "border-border-subtle bg-slate-950/40 text-foreground-muted hover:border-primary/50 hover:text-foreground hover:scale-102"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
