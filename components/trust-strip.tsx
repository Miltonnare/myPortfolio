"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cpu, GitCommit, Zap } from "lucide-react";

export function TrustStrip() {
  const stats = [
    {
      label: "Production-Minded Projects",
      value: "10+",
      sub: "Full-Stack, APIs & Scripts",
      icon: <Code2 className="h-5 w-5 text-indigo-500" />
    },
    {
      label: "Ecosystem Technologies",
      value: "12+",
      sub: "Languages, Frameworks & DBs",
      icon: <Cpu className="h-5 w-5 text-cyan-500" />
    },
    {
      label: "Active Git Commits",
      value: "1,000+",
      sub: "Consistent Version Control",
      icon: <GitCommit className="h-5 w-5 text-emerald-500" />
    },
    {
      label: "Database Latency Cut",
      value: "45%",
      sub: "Via MongoDB Index Optimization",
      icon: <Database className="h-5 w-5 text-rose-500" />
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git"
  ];

  return (
    <section className="relative w-full border-y border-border-subtle/50 bg-slate-950/45 py-10 backdrop-blur-sm overflow-hidden">
      <div className="section-container flex flex-col gap-10">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-5 rounded-2xl flex flex-col gap-3 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-900/80 p-2 shadow-inner border border-border-subtle/30 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground sm:text-sm">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[10px] text-foreground-muted sm:text-xs">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Strip */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle/30 pt-8 md:flex-row">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            <Zap className="h-4 w-4 text-accent animate-pulse" />
            <span>Active Stack Focus</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-border-subtle/50 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-foreground-muted transition-colors hover:border-primary hover:text-foreground cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
