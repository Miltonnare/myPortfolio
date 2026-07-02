"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award, GraduationCap, Code2, ShieldCheck, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function About() {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  const experiences = [
    {
      role: "Freelance Full-Stack Developer",
      company: "Contract / Client Projects",
      period: "2024 - Present",
      description: "Architected end-to-end full-stack SaaS apps, optimized REST APIs, and integrated secure auth systems.",
      bulletPoints: [
        "Implemented secure JWT authentication stored in HTTP-only, secure cookies, mitigating XSS vulnerability vectors.",
        "Designed compound index models on MongoDB collections, reducing read query response latencies by 45%.",
        "Configured Celery asynchronous task queues in Python backends, avoiding API server thread blocks."
      ]
    },
    {
      role: "Software Engineering Fellow",
      company: "Power Learn Project (PLP)",
      period: "2024",
      description: "Immersive software engineering track specializing in Python, SQL/NoSQL databases, and collaborative product lifecycles.",
      bulletPoints: [
        "Built distributed MERN jobs portals featuring debounced search and candidate evaluation pipelines.",
        "Collaborated in agile teams using Git/GitHub version control workflows and feature branch deployments."
      ]
    },
    {
      role: "BSc. Computer Science Student",
      company: "Murang'a University of Technology",
      period: "2022 - Present",
      description: "Acquiring core theoretical computer science and software development foundations.",
      bulletPoints: [
        "In-depth research on Data Structures & Algorithms, Object-Oriented Programming (OOP in C++), and Relational Database Schema Design.",
        "Developed custom PDF layout parsers and optimistic database locking controls for concurrency testing."
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
      <div className="absolute top-1/2 left-0 h-[250px] w-[250px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="mb-12 space-y-4 text-center md:text-left">
        <span className="tag">My Profile</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Professional Background & Career Path
        </h2>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground-muted md:mx-0 sm:text-base">
          I bridge computer science foundations with modern full-stack development, leveraging active problem-solving skills to build secure, robust applications.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
        {/* Left Column: Profile Card & Certifications */}
        <div className="space-y-6">
          
          {/* Profile Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:border-primary/20"
          >
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-border-subtle shadow-subtle bg-slate-900">
              <Image
                src="/images/prof.png"
                alt="Milton profile picture"
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground">Milton Odhiambo</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Full-Stack Software Engineer
              </p>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                Self-driven problem solver and systems designer focused on building secure databases, optimized API nodes, and fluid front-end interfaces.
              </p>
            </div>
          </motion.div>

          {/* Education Summary */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-5 rounded-2xl space-y-3 hover:border-primary/20"
          >
            <div className="flex items-center gap-2 text-primary">
              <GraduationCap className="h-5 w-5" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Academic Education</h4>
            </div>
            <div className="space-y-1">
              <h5 className="text-sm font-bold text-foreground">BSc. Computer Science</h5>
              <p className="text-xs text-foreground-muted font-medium">Murang&apos;a University of Technology (2022 - Present)</p>
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Active student research focusing on Algorithmic complexity analysis, OOP software engineering, database normalization (1NF-3NF), and operating systems logic.
            </p>
          </motion.div>

          {/* Certifications Block */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-5 rounded-2xl space-y-4 hover:border-primary/20"
          >
            <div className="flex items-center gap-2 text-accent">
              <Award className="h-5 w-5" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Industry Certifications</h4>
            </div>
            <div className="grid gap-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2.5 rounded-xl bg-slate-950/40 border border-border-subtle/20 p-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">{cert.name}</p>
                    <p className="text-[10px] text-foreground-muted">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Experience Timeline & Interests */}
        <div className="space-y-6">
          
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass p-6 rounded-2xl space-y-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground-muted flex items-center gap-2">
              <Briefcase className="h-4.5 w-4.5 text-primary" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative border-l border-border-subtle/50 ml-2.5 pl-6 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-primary" />

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-foreground">{exp.role}</h4>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10 w-fit">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-accent font-semibold">{exp.company}</p>
                    <p className="text-xs text-foreground-muted leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-1.5 pt-1 text-xs text-foreground-muted">
                      {exp.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick-Scan Recruiting Summary */}
          <div className="glass p-5 rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/10 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <ShieldCheck className="h-4.5 w-4.5 text-primary" />
              <span>Technical Competency Focus</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-foreground-muted">
              <li>• Available for internships, junior full-stack roles, or core contract projects.</li>
              <li>• Strong version control discipline, clean code conventions, and API schema documentation.</li>
              <li>• Proficient in writing modular, highly testable code structures using TypeScript, React/Next.js, Node.js, and Python.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
