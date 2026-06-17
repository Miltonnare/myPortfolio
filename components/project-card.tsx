"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, AlertTriangle, Lightbulb, User2 } from "lucide-react";
import { Github } from "@/components/brand-icons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className="glass flex h-full flex-col rounded-2xl overflow-hidden shadow-subtle hover:border-primary/30 transition-all duration-300 group bg-slate-950/45"
    >
      {/* Visual Image Preview */}
      <div className="relative h-44 w-full overflow-hidden sm:h-52 bg-slate-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
        <span className="absolute top-3 right-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-border-subtle/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
          {project.category}
        </span>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 sm:text-lg">
            {project.title}
          </h3>
          
          {/* Developer Role */}
          <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
            <User2 className="h-3.5 w-3.5" />
            <span>{project.role}</span>
          </div>
        </div>

        {/* Short Summary & Problem Statement */}
        <div className="space-y-2 text-xs sm:text-sm">
          <p className="text-foreground-muted leading-relaxed">
            {project.description}
          </p>
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary">The Problem</p>
            <p className="mt-1 text-xs text-foreground-muted leading-relaxed">
              {project.problemSolved}
            </p>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 py-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border-subtle bg-slate-950/60 px-2.5 py-0.5 text-[10px] font-semibold text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Engineering Deep Dive (Challenges & Solutions) */}
        <div className="border-t border-border-subtle/30 pt-3">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex w-full items-center justify-between text-xs font-bold text-foreground-muted hover:text-foreground transition-colors py-1 cursor-pointer"
          >
            <span>Engineering Deep-Dive</span>
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-3 text-xs leading-relaxed border-t border-border-subtle/10 mt-2">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground">Hurdle:</span>{" "}
                      <span className="text-foreground-muted">{project.challenges}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Lightbulb className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground">Solution:</span>{" "}
                      <span className="text-foreground-muted">{project.solution}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Links */}
        <div className="mt-auto flex items-center justify-between border-t border-border-subtle/30 pt-4 text-xs font-semibold">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-1.5 text-foreground-muted hover:text-primary transition-colors py-1"
          >
            <Github className="h-4 w-4" />
            <span>Source Code</span>
          </Link>
          {project.live && project.live !== "#" ? (
            <Link
              href={project.live}
              target="_blank"
              className="flex items-center gap-1.5 text-primary hover:text-primary-hover transition-colors py-1"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <span className="text-foreground-muted/40 cursor-default">Demo Pending</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
