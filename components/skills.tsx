"use client";

import { motion } from "framer-motion";
import { Code, Server, Wrench, BrainCircuit, Check } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5 text-indigo-400" />,
      skills: [
        { name: "React / React Native", level: "Advanced" },
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Advanced" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5 text-cyan-400" />,
      skills: [
        { name: "Node.js / Express.js", level: "Advanced" },
        { name: "Python / FastAPI", level: "Intermediate" },
        { name: "MongoDB / Mongoose", level: "Advanced" },
        { name: "PostgreSQL / SQL", level: "Intermediate" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "JWT & Session Security", level: "Advanced" }
      ]
    },
    {
      title: "Dev Tools & Infrastructure",
      icon: <Wrench className="h-5 w-5 text-amber-400" />,
      skills: [
        { name: "Git & GitHub workflows", level: "Advanced" },
        { name: "Postman / API Testing", level: "Advanced" },
        { name: "Linux / Shell Scripting", level: "Intermediate" },
        { name: "Vercel / Netlify / Render", level: "Advanced" },
        { name: "Docker Basics", level: "Familiar" },
        { name: "CI / CD Pipelines", level: "Familiar" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <BrainCircuit className="h-5 w-5 text-rose-400" />,
      skills: [
        { name: "Natural Language Processing", level: "Intermediate" },
        { name: "SpaCy NLP Engine", level: "Intermediate" },
        { name: "Python Data Workflows", level: "Intermediate" },
        { name: "Pandas & NumPy Data", level: "Familiar" },
        { name: "Scikit-Learn ML Basics", level: "Familiar" },
        { name: "Vector Embeddings & Search", level: "Familiar" }
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
      <div className="absolute bottom-0 right-0 h-75 w-75 rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="mb-12 space-y-4 text-center">
        <span className="tag">My Skillset</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ecosystem Mastery & Tech Proficiency
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          I choose the right tool for the job. Here is my current stack categorization, structured by practical competence.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 hover:bg-slate-900/50"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-border-subtle/30 pb-4 mb-4">
                <div className="rounded-xl bg-slate-900/80 p-2.5 shadow-inner border border-border-subtle/30">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between rounded-xl bg-slate-950/40 border border-border-subtle/20 p-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span className="text-xs font-semibold text-foreground-muted hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider rounded-md px-1.5 py-0.5 border ${
                        skill.level === "Advanced"
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                          : skill.level === "Intermediate"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                      }`}
                    >
                      {skill.level}
                    </span>
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
