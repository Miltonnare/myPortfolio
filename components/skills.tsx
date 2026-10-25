"use client";

import { motion } from "framer-motion";
import { Code, Server, Wrench, BrainCircuit, Database, ShieldCheck } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Core Programming Languages",
      icon: <Code className="h-5 w-5 text-indigo-500" />,
      skills: [
        { name: "TypeScript", context: "MicroJob Monorepo, React 19, Next.js" },
        { name: "Python", context: "FastAPI, NLI, Groq Chatbot, Scikit-learn" },
        { name: "C++ (C++17)", context: "LuminaDB Storage Engine & B+Tree" },
        { name: "JavaScript (ES6+)", context: "Node.js, Express REST APIs, DOM" },
        { name: "Java 17", context: "Aura Document Processor & Gradle" },
        { name: "SQL", context: "PostgreSQL, Prisma, Schema Design" }
      ]
    },
    {
      title: "Backend & Systems Architecture",
      icon: <Server className="h-5 w-5 text-cyan-500" />,
      skills: [
        { name: "NestJS / Express.js", context: "Modular Domain APIs & Middleware" },
        { name: "FastAPI", context: "Asynchronous Python Microservices" },
        { name: "Storage Engines", context: "Slotted-Page Files & Buffer Pools" },
        { name: "Transaction Recovery", context: "ARIES Write-Ahead Logging (WAL)" },
        { name: "Authentication Security", context: "Short-lived JWT & HTTP-Only Cookies" },
        { name: "RESTful API Design", context: "Clean Architecture & DTO Validation" }
      ]
    },
    {
      title: "Databases & Data Modeling",
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      skills: [
        { name: "PostgreSQL", context: "Relational Schemas, Constraints & Indexes" },
        { name: "MongoDB & Mongoose", context: "Document Modeling & Compound Indexes" },
        { name: "Prisma ORM", context: "Type-Safe Migrations & Relations" },
        { name: "In-Memory B+Tree", context: "O(log n) Key Lookup & Node Splits" },
        { name: "Concurrency Controls", context: "Optimistic Versioning & Isolation" },
        { name: "Database Seeding", context: "Kenyan Counties & Trade Classification" }
      ]
    },
    {
      title: "AI, Machine Learning & NLP",
      icon: <BrainCircuit className="h-5 w-5 text-rose-500" />,
      skills: [
        { name: "Natural Language Inference", context: "Cross-Encoder Contradiction Scoring" },
        { name: "Vector Similarity Search", context: "Dense Sentence Transformers & Cosine" },
        { name: "Groq LPU Acceleration", context: "Sub-200ms Token Generation" },
        { name: "LangChain", context: "Sliding Conversational Context Buffers" },
        { name: "Scikit-Learn & Pandas", context: "TF-IDF Vectorization & Spotify Dataset" },
        { name: "LLM Benchmarking", context: "Inference Latency & Evaluation" }
      ]
    },
    {
      title: "Frontend Engineering & UI/UX",
      icon: <ShieldCheck className="h-5 w-5 text-amber-500" />,
      skills: [
        { name: "React 18 / 19", context: "Component Architecture & Custom Hooks" },
        { name: "Next.js (App Router)", context: "Server Components & Static Generation" },
        { name: "Tailwind CSS", context: "Design Tokens, Dark/Light Theming" },
        { name: "Progressive Web Apps", context: "Service Workers & Mobile Caching" },
        { name: "Framer Motion", context: "Performance-Conscious Transitions" },
        { name: "Responsive & Accessible", context: "WCAG AA Contrast & Keyboard Navigation" }
      ]
    },
    {
      title: "DevOps, CI/CD & Testing",
      icon: <Wrench className="h-5 w-5 text-purple-500" />,
      skills: [
        { name: "Docker", context: "Multi-Stage Containers & Compose" },
        { name: "GitHub Actions", context: "Automated Supertest CI Pipelines" },
        { name: "Fuzz Testing", context: "ClusterFuzzLite & Jazzer Fuzz Targets" },
        { name: "Cloud Deployments", context: "Vercel, Render & Netlify" },
        { name: "Linux & Bash", context: "Shell Scripting & Process Management" },
        { name: "Git Workflows", context: "Feature Branches, Rebasing & Code Review" }
      ]
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
    <section id="skills" className="section-container section-padding relative">
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="mb-12 space-y-4 text-center">
        <span className="tag">Technical Competencies</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Categorized by Demonstrated Engineering Use
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          No arbitrary percentage bars. Each capability below is substantiated by an active codebase, architectural component, or production service.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-border-subtle pb-4 mb-4">
                <div className="rounded-xl bg-slate-100 dark:bg-slate-900 p-2.5 shadow-inner border border-border-subtle">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-foreground">{skill.name}</span>
                    </div>
                    <p className="text-[11px] text-foreground-muted leading-tight">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
