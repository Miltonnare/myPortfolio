"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All Works", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "APIs & Services", value: "api" },
  { label: "Frontend Craft", value: "frontend" }
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container section-padding space-y-12 relative">
      <div className="absolute top-1/3 right-1/4 h-62.5 w-62.5 rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-4 text-center">
        <span className="tag">Featured Work</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Engineering Solutions & Applications
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          Explore a selection of end-to-end products, robust backend APIs, and utility scripts that highlight my software engineering principles.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 text-xs">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-xl border px-4 py-2 font-semibold transition-all duration-300 cursor-pointer ${
              filter === f.value
                ? "border-primary bg-primary/10 text-primary shadow-soft shadow-primary/10 scale-105"
                : "border-border-subtle bg-slate-950/40 text-foreground-muted hover:border-primary/50 hover:text-foreground hover:scale-102"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects Grid with Framer Motion AnimatePresence */}
      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
