"use client";

import { motion } from "framer-motion";
import { Server, Database, ShieldCheck, Cpu, GitBranch, Terminal, CheckCircle2, ArrowRight } from "lucide-react";

export function EngineeringCapabilities() {
  const capabilities = [
    {
      title: "API Design & Concurrency Control",
      icon: <Server className="h-5 w-5 text-indigo-500" />,
      tag: "REST & Scalability",
      description: "Building production-grade RESTful APIs with strict boundary validation, rate limiting, and optimistic concurrency controls.",
      highlights: [
        "Dual-token authentication: Short-lived JWT access tokens + HTTP-only cookie refresh rotation.",
        "Optimistic concurrency control with Mongoose/Prisma version keys to prevent race conditions during ticket booking and job escrows.",
        "Strict DTO schema validation and uniform error serialization across NestJS and Express."
      ],
      evidence: "Verified in MicroJob Kenya & Murang'a Events Reloaded"
    },
    {
      title: "Database Modeling & Storage Engines",
      icon: <Database className="h-5 w-5 text-cyan-500" />,
      tag: "C++17 & Relational DBs",
      description: "Deep understanding of how databases actually work under the hood—from disk page layouts to index traversals.",
      highlights: [
        "Engineered slotted-page disk management allocating variable-length records on 4KB OS filesystem blocks.",
        "Implemented in-memory B+Tree indexing with automatic internal/leaf node splitting for O(log n) lookups.",
        "Designed relational PostgreSQL schemas with Prisma and high-throughput compound MongoDB indexes."
      ],
      evidence: "Verified in LuminaDB (C++17) & PostgreSQL Monorepo"
    },
    {
      title: "AI, NLP & Inference Optimization",
      icon: <Cpu className="h-5 w-5 text-rose-500" />,
      tag: "FastAPI & Embeddings",
      description: "Developing evidence-first AI applications and optimizing inference latency for responsive user workflows.",
      highlights: [
        "Natural Language Inference (NLI) pipelines classifying statement consistency without editorial bias.",
        "Dense vector embeddings via Sentence Transformers and cosine similarity nearest-neighbor search.",
        "Sub-200ms LLM token generation utilizing Groq's LPU acceleration with LangChain conversational memory."
      ],
      evidence: "Verified in AuthenticityAI & Chatbot- on Render"
    },
    {
      title: "Systems Reliability, CI/CD & Fuzzing",
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      tag: "DevOps & Quality",
      description: "Ensuring applications are defensively engineered, tested against malicious inputs, and containerized for deployment.",
      highlights: [
        "Write-Ahead Logging (WAL) with ARIES recovery ensuring zero state corruption after process crashes.",
        "Automated GitHub Actions CI pipelines executing Supertest E2E integration test suites on pull requests.",
        "Continuous fuzz testing harness integrated via ClusterFuzzLite and Jazzer to detect memory safety bugs."
      ],
      evidence: "Verified in LuminaDB, MicroJob CI & Aura Document Processor"
    }
  ];

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 12 }
    }
  };

  return (
    <section className="section-container section-padding relative">
      <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="mb-12 space-y-4 text-center">
        <span className="tag">Engineering Depth</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Core Architectural Capabilities
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          How I approach system design, database mechanics, security boundaries, and automated quality assurance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-slate-100 dark:bg-slate-900 p-2.5 shadow-inner border border-border-subtle group-hover:scale-105 transition-transform duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {cap.title}
                  </h3>
                </div>
                <span className="rounded-lg bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 text-[11px] font-bold">
                  {cap.tag}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {cap.description}
              </p>

              <ul className="space-y-2 text-xs text-foreground-muted leading-relaxed">
                {cap.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-foreground-muted font-mono">
              <span>{cap.evidence}</span>
              <span className="text-emerald-500 font-bold">✓ Verified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
