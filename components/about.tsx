"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award, GraduationCap, Code2, ShieldAlert } from "lucide-react";

export function About() {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="section-container section-padding relative">
      <div className="absolute top-1/2 left-0 h-[250px] w-[250px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="mb-12 space-y-4 text-center md:text-left">
        <span className="tag">My Background</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Bridging CS Theory with Practical Execution
        </h2>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground-muted md:mx-0 sm:text-base">
          I combine academic foundations in Computer Science with the speed and adaptiveness of modern software engineering. My goal is to build secure, robust applications that solve real-world problems.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] items-start">
        {/* Profile Card & Journey Details */}
        <div className="space-y-6">
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
                Full-Stack Software Developer
              </p>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                Self-taught innovator, problem solver, and builder. I focus on developing clean APIs, structured databases, and accessible interfaces.
              </p>
            </div>
          </motion.div>

          {/* Education & Fellowship Grids */}
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-5 rounded-2xl space-y-2 hover:border-primary/20"
            >
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Education</h4>
              </div>
              <h5 className="text-sm font-bold text-foreground">BSc. Computer Science</h5>
              <p className="text-xs text-foreground-muted">
                Murang&apos;a University of Technology. Focused on Data Structures & Algorithms, Object-Oriented Programming (C++), and Database systems.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-5 rounded-2xl space-y-2 hover:border-primary/20"
            >
              <div className="flex items-center gap-2 text-accent">
                <Award className="h-5 w-5" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Fellowship</h4>
              </div>
              <h5 className="text-sm font-bold text-foreground">Power Learn Project</h5>
              <p className="text-xs text-foreground-muted">
                Advanced software track. Specialized in Python ecosystems, web applications, SQL & NoSQL architectures, and product development lifecycles.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Narrative & Career Aspirations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Personal Journey Narrative */}
          <div className="glass p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground-muted flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              <span>My Coding Philosophy</span>
            </h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              I started coding because I was fascinated by how a few lines of script could automate tasks and build tools used by millions. This curiosity quickly evolved into a passion for full-stack engineering. 
            </p>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              I believe software should be written for people first. Whether it&apos;s optimizing API response rates or making a layout screen reader friendly, I take pride in sweating the small details that make a product feel polished and professional.
            </p>
          </div>

          {/* Technical Targets / Focus Areas */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground-muted flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-accent" />
              <span>Core Interest & Research Areas</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "System Architecture",
                "Python Backend",
                "NLP & AI Models",
                "API Security",
                "NoSQL Datastores",
                "Cloud Infrastructures"
              ].map((interest, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border-subtle bg-slate-950/45 px-3 py-2.5 text-center text-xs font-semibold text-foreground-muted hover:border-primary hover:text-foreground hover:bg-slate-900/60 transition-all duration-300"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter Focus */}
          <div className="glass p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <ShieldAlert className="h-4 w-4" />
              <span>Recruiter Scan-Ready</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-foreground-muted">
              <li>• Available for internships, junior full-stack roles, or contract projects.</li>
              <li>• Strong foundation in version control, code review standards, and CI/CD.</li>
              <li>• Able to write maintainable code using TypeScript, React/Next.js, Node.js, and Python.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
