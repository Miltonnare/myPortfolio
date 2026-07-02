"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, AlertTriangle, Lightbulb, User2, Star, GitFork, Activity, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/brand-icons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  isFlagship?: boolean;
}

export function ProjectCard({ project, isFlagship = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className={`glass flex flex-col rounded-2xl overflow-hidden shadow-subtle transition-all duration-300 ${
        isFlagship
          ? "border-amber-500/25 bg-slate-950/70 shadow-amber-500/5 lg:grid lg:grid-cols-[1.1fr_1fr]"
          : "h-full bg-slate-950/45 hover:border-primary/30 group"
      }`}
    >
      {/* Visual Image Preview */}
      <div className={`relative w-full overflow-hidden bg-slate-900 ${
        isFlagship ? "h-64 sm:h-80 lg:h-full min-h-[250px]" : "h-44 sm:h-52"
      }`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={isFlagship ? "(max-w-1024px) 100vw, 55vw" : "(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
        
        {/* Category & Status badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="rounded-lg bg-slate-950/80 backdrop-blur-md border border-border-subtle/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
            {project.category === "api" ? "API & Backend" : "Full-Stack"}
          </span>
          {isFlagship && (
            <span className="rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Flagship Project
            </span>
          )}
        </div>

        {/* Metrics Badge Group */}
        {project.metrics && (
          <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-slate-950/80 backdrop-blur-md border border-border-subtle/40 px-2 py-1 text-[10px] font-bold text-foreground-muted">
            <span className="flex items-center gap-0.5">
              <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
              {project.metrics.stars}
            </span>
            <span className="h-2.5 w-[1px] bg-border-subtle/40" />
            <span className="flex items-center gap-0.5">
              <GitFork className="h-3 w-3 text-cyan-400" />
              {project.metrics.forks}
            </span>
            <span className="h-2.5 w-[1px] bg-border-subtle/40" />
            <span className="flex items-center gap-1">
              {project.metrics.status === "Active" ? (
                <>
                  <Activity className="h-3 w-3 text-amber-500" />
                  <span className="text-amber-500">{project.metrics.status}</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">{project.metrics.status}</span>
                </>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className={`flex flex-col gap-4 p-5 sm:p-6 justify-between ${isFlagship ? "" : "flex-1"}`}>
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className={`font-bold text-foreground transition-colors duration-300 ${
              isFlagship ? "text-xl sm:text-2xl text-amber-400" : "text-base sm:text-lg group-hover:text-primary"
            }`}>
              {project.title}
            </h3>
            
            {/* Developer Role */}
            <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
              <User2 className="h-3.5 w-3.5" />
              <span>{project.role}</span>
            </div>
          </div>

          {/* Short Summary & Problem Statement */}
          <div className="space-y-3 text-xs sm:text-sm">
            <p className="text-foreground-muted leading-relaxed">
              {project.description}
            </p>
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-3">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-primary">The Business Problem</p>
              <p className="mt-1 text-xs text-foreground-muted leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          </div>

          {/* Key Features Block (For Flagship: visible by default) */}
          {isFlagship && (
            <div className="space-y-2">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-accent">Core Architecture Features</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-foreground-muted">
                {project.keyFeatures.map((feat, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 py-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border-subtle bg-slate-950/60 px-2.5 py-1 text-[10px] font-semibold text-foreground-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Engineering Deep Dive (Challenges & Solutions) */}
        <div className="border-t border-border-subtle/30 pt-3 mt-1">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex w-full items-center justify-between text-xs font-bold text-foreground-muted hover:text-foreground transition-colors py-1 cursor-pointer"
          >
            <span>Engineering Deep-Dive (Hurdles & Solutions)</span>
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
        <div className="mt-4 flex items-center justify-between border-t border-border-subtle/30 pt-4 text-xs font-semibold">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1.5 text-foreground-muted hover:text-primary transition-colors py-1 cursor-pointer"
          >
            <Github className="h-4 w-4" />
            <span>Source Code</span>
          </a>
          {project.live && project.live !== "#" ? (
            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-1.5 text-primary hover:text-primary-hover transition-colors py-1 cursor-pointer"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="text-foreground-muted/40 cursor-default select-none">Demo Sandbox Pending</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
