"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award, GraduationCap, Code2, ShieldCheck, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function About() {
  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  const experiences = [
    {
      role: "Full-Stack & Systems Developer",
      company: "Independent & Open-Source Projects",
      period: "2024 - Present",
      description: "Architected end-to-end full-stack applications, transactional database storage engines, and high-throughput AI microservices.",
      bulletPoints: [
        "Authored LuminaDB, a transactional database engine in C++17 with slotted-page layout, ARIES WAL crash recovery, and in-memory B+Tree indexing.",
        "Engineered the MicroJob Kenya monorepo with NestJS, Prisma ORM, PostgreSQL, React 19, Docker, and GitHub Actions CI pipelines.",
        "Implemented production dual-token auth (short-lived JWT + HTTP-only cookie refresh rotation) on the Murang'a Events Reloaded platform deployed on Vercel."
      ]
    },
    {
      role: "Software Engineering Fellow",
      company: "Power Learn Project (PLP)",
      period: "2024",
      description: "Immersive pan-African software development track focusing on Python, web technologies, relational databases, and collaborative agile engineering.",
      bulletPoints: [
        "Collaborated on agile sprint teams utilizing Git/GitHub feature branches, code reviews, and automated deployment pipelines.",
        "Engineered full-stack applications with modular API structures, database schemas, and client-side UI optimization."
      ]
    },
    {
      role: "BSc. Computer Science Student",
      company: "Murang'a University of Technology",
      period: "2022 - Present",
      description: "Pursuing theoretical computer science and practical software systems engineering foundations.",
      bulletPoints: [
        "In-depth focus on Data Structures & Algorithms, Systems Programming in C++, Operating System internals, and Database Management Systems (DBMS).",
        "Applied concurrency control principles (optimistic locking, WAL logs, multi-threading) to standalone software engineering implementations."
      ]
    }
  ];

  const certifications = [
    { name: "Software Development Track Certificate", issuer: "Power Learn Project" },
    { name: "Responsive Web Design Certification", issuer: "freeCodeCamp" },
    { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco NetAcad" },
    { name: "Cybersecurity Essentials", issuer: "Cisco NetAcad" }
  ];

  return (
    <section id="about" className="section-container section-padding relative">
      <div className="absolute top-1/2 left-0 h-64 w-64 rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="mb-12 space-y-4 text-center md:text-left">
        <span className="tag">Engineering Background</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Computer Science Foundations &amp; Hands-On Delivery
        </h2>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground-muted md:mx-0 sm:text-base">
          I connect core computer science fundamentals—data structures, disk storage mechanics, and transaction recovery—with modern full-stack application development in TypeScript and Python.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-start">
        {/* Left Column: Profile Card & Certifications */}
        <div className="space-y-6">
          
          {/* Profile Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start"
          >
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-border-subtle shadow-subtle bg-slate-900">
              <Image
                src="/images/prof.png"
                alt="Milton Odhiambo profile photo"
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground">Milton Odhiambo</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Software Engineer
              </p>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Nairobi, Kenya • Murang&apos;a University CS Student • Builder of Systems, Full-Stack Apps &amp; AI Microservices.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold">
                  Full-Stack
                </span>
                <span className="rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 text-[11px] font-semibold">
                  C++ Systems
                </span>
                <span className="rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 px-2.5 py-0.5 text-[11px] font-semibold">
                  FastAPI &amp; AI
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Working Philosophy Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Code2 className="h-4 w-4 text-accent" />
              <span>Engineering Approach &amp; Values</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Evidence Over Claims:</strong> Every project listed has a working repository, tests, container configuration, or live deployment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Defensive Architecture:</strong> From ACID transaction logging to JWT cookie rotation, security and crash consistency are treated as first-class constraints.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Continuous Verification:</strong> Automated CI workflows, Supertest suites, and fuzz testing ensure code remains maintainable and resilient.</span>
              </li>
            </ul>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Award className="h-4 w-4 text-amber-500" />
              <span>Verified Certifications</span>
            </div>
            <div className="space-y-2.5">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs border-b border-border-subtle/40 pb-2 last:border-0 last:pb-0">
                  <span className="font-semibold text-foreground">{cert.name}</span>
                  <span className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            <span>Experience &amp; Technical Track Record</span>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-2xl space-y-4 relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border-subtle/50 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-foreground">{exp.role}</h4>
                    <p className="text-xs font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-foreground-muted font-mono">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 text-xs text-foreground-muted">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
