"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Award, Zap, Layers, Database, BrainCircuit, Layout } from "lucide-react";

const filters: { label: string; value: ProjectCategory; icon?: React.ReactNode }[] = [
  { label: "All Works", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Systems & DBs", value: "systems" },
  { label: "AI & NLP", value: "ai" },
  { label: "Frontend", value: "frontend" }
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const flagshipProject = projects.find((p) => p.flagship);
  const otherProjects = projects.filter((p) => !p.flagship);

  const filtered =
    filter === "all"
      ? otherProjects
      : otherProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container section-padding space-y-12 relative overflow-visible">
      {/* Visual background glows */}
      <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-4 text-center">
        <span className="tag flex items-center gap-1.5 w-fit mx-auto">
          <Zap className="h-3.5 w-3.5 text-accent animate-pulse" />
          <span>Engineering Case Studies</span>
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Verified Systems, Monorepos &amp; Deployed Applications
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          Every project below includes verifiable source code, technical architectural breakdowns, and working demonstrations where hosted.
        </p>
      </div>

      {/* FLAGSHIP PROJECT HIGH-IMPACT SHOWCASE */}
      {flagshipProject && (filter === "all" || filter === flagshipProject.category) && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 justify-center sm:justify-start">
            <Award className="h-4.5 w-4.5 animate-bounce" />
            <span>Featured Flagship Monorepo</span>
          </div>
          <ProjectCard project={flagshipProject} isFlagship={true} />
        </div>
      )}

      {/* Category Explorer Strip */}
      <div className="space-y-8 pt-4">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-border-subtle pb-4 sm:flex-row">
          <div>
            <h3 className="text-base font-bold text-foreground sm:text-lg">
              Project Explorer
            </h3>
            <p className="text-xs text-foreground-muted">
              Filter by engineering domain and architectural complexity
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-xl border px-3.5 py-1.5 font-semibold transition-all duration-300 cursor-pointer ${
                  filter === f.value
                    ? "border-primary bg-primary text-white shadow-soft shadow-primary/20 scale-105"
                    : "border-border-subtle bg-slate-100 dark:bg-slate-900/60 text-foreground-muted hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
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
