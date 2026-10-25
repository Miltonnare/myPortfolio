"use client";

import { motion } from "framer-motion";
import { Code2, Database, GitCommit, CheckCircle2, Server, Globe2 } from "lucide-react";

export function TrustStrip() {
  const stats = [
    {
      label: "Active Repositories",
      value: "50+",
      sub: "Consistent Version Control & Projects",
      icon: <GitCommit className="h-5 w-5 text-indigo-500" />
    },
    {
      label: "Flagship & Systems Projects",
      value: "8+",
      sub: "C++17, NestJS, FastAPI & React 19",
      icon: <Database className="h-5 w-5 text-cyan-500" />
    },
    {
      label: "Live Web & API Deployments",
      value: "4+",
      sub: "Deployed on Vercel, Render & Netlify",
      icon: <Globe2 className="h-5 w-5 text-emerald-500" />
    },
    {
      label: "CI/CD & Testing Rigor",
      value: "100%",
      sub: "Docker, GitHub Actions & Fuzz Testing",
      icon: <CheckCircle2 className="h-5 w-5 text-amber-500" />
    }
  ];

  const technologies = [
    "TypeScript", "React 19", "Next.js", "C++17", "Python", "FastAPI", "NestJS", "Node.js", "PostgreSQL", "MongoDB", "Prisma ORM", "Docker", "Git"
  ];

  return (
    <section className="relative w-full border-y border-border-subtle bg-slate-100/80 dark:bg-slate-950/60 py-10 backdrop-blur-sm overflow-hidden transition-colors duration-300">
      <div className="section-container flex flex-col gap-10">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass p-5 rounded-2xl flex flex-col gap-3 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-100 dark:bg-slate-900 p-2 shadow-inner border border-border-subtle group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>
                <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground sm:text-sm">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[11px] text-foreground-muted sm:text-xs">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Ribbon */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 md:flex-row">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground-muted">
            <Server className="h-4 w-4 text-accent" />
            <span>Demonstrated Ecosystem</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-border-subtle bg-slate-100 dark:bg-slate-950/70 px-3 py-1 text-xs font-semibold text-foreground-muted hover:text-foreground transition-colors cursor-default"
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
