"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, AlertCircle, Cpu, ShieldCheck, CheckCircle2, User, Layers } from "lucide-react";
import { Github } from "@/components/brand-icons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  isFlagship?: boolean;
}

export function ProjectCard({ project, isFlagship = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;

    setTilt({ x: tiltX, y: tiltY });
    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.15 });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <article
        className={`glass relative flex flex-col rounded-2xl overflow-hidden shadow-subtle transition-all duration-300 h-full ${
          isFlagship
            ? "border-amber-500/30 bg-card shadow-amber-500/5 lg:grid lg:grid-cols-[1.1fr_1fr]"
            : "hover:border-primary/40 group"
        }`}
      >
        {/* Cursor Specular Spotlight Sheen */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(circle 350px at ${spotlight.x}% ${spotlight.y}%, rgba(99, 102, 241, 0.4), transparent 80%)`
          }}
        />

        {/* Visual Image / High-Fidelity UI Preview */}
        <div
          className={`relative w-full overflow-hidden bg-slate-950 ${
            isFlagship ? "h-64 sm:h-80 lg:h-full min-h-[260px]" : "h-52 sm:h-60"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={isFlagship ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

          {/* Category & Badge Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
            <span className="rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              {project.badge}
            </span>
            {isFlagship && (
              <span className="rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-500/40 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Flagship Monorepo
              </span>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className={`flex flex-col gap-4 p-5 sm:p-6 justify-between relative z-20 ${isFlagship ? "" : "flex-1"}`}>
          <div className="space-y-3">
            <div className="space-y-1">
              <h3
                className={`font-bold text-foreground transition-colors duration-300 ${
                  isFlagship ? "text-xl sm:text-2xl text-foreground" : "text-lg group-hover:text-primary"
                }`}
              >
                {project.title}
              </h3>

              {/* Developer Role */}
              <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                <User className="h-3.5 w-3.5" />
                <span>{project.role}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              {project.description}
            </p>

            {/* Problem Statement Callout */}
            <div className="rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-border-subtle p-3 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>The Engineering Problem:</span>
              </div>
              <p className="text-foreground-muted leading-normal">
                {project.problemSolved}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-border-subtle px-2 py-0.5 text-[11px] font-semibold text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Expandable Engineering Deep Dive */}
            <div className="pt-2">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer py-1"
              >
                <Layers className="h-3.5 w-3.5" />
                <span>{expanded ? "Hide Engineering Deep Dive" : "View Case Study & Trade-Offs"}</span>
                {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-3 space-y-3.5 border-t border-border-subtle mt-2"
                  >
                    {/* Architecture */}
                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-foreground flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5 text-indigo-500" />
                        Architecture Overview:
                      </span>
                      <p className="text-foreground-muted leading-relaxed pl-5">
                        {project.architecture}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-foreground flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-500" />
                        Key Challenge &amp; Solution:
                      </span>
                      <p className="text-foreground-muted leading-relaxed pl-5">
                        <strong className="text-foreground">Challenge:</strong> {project.challenges}
                      </p>
                      <p className="text-foreground-muted leading-relaxed pl-5">
                        <strong className="text-foreground">Solution:</strong> {project.solution}
                      </p>
                    </div>

                    {/* Trade-Offs */}
                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-foreground flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-purple-500" />
                        Engineering Trade-Offs:
                      </span>
                      <p className="text-foreground-muted leading-relaxed pl-5">
                        {project.tradeoffs}
                      </p>
                    </div>

                    {/* Validation */}
                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        Verification &amp; Testing:
                      </span>
                      <p className="text-foreground-muted leading-relaxed pl-5">
                        {project.validation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border-subtle">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border-subtle bg-slate-100 dark:bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github className="h-3.5 w-3.5" />
              <span>View Source Code</span>
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-white shadow-soft hover:bg-primary-hover transition-all duration-300"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}
