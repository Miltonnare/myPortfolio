"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, MapPin, Code2, Briefcase } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  const codePills = [
    { name: "React / Next.js", color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30" },
    { name: "TypeScript", color: "from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/30" },
    { name: "Node.js / Express", color: "from-green-600/20 to-emerald-600/20 text-emerald-400 border-emerald-500/30" },
    { name: "Python / FastAPI", color: "from-yellow-600/20 to-amber-600/20 text-amber-400 border-amber-500/30" },
    { name: "MongoDB / SQL", color: "from-green-500/20 to-teal-500/20 text-teal-400 border-teal-500/30" }
  ];

  return (
    <section
      id="top"
      className="relative section-container flex flex-col items-center justify-between gap-12 pt-24 pb-16 md:flex-row md:pt-32 md:pb-24 overflow-visible"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 h-75 w-75 rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 h-62.5 w-62.5 rounded-full bg-accent/10 blur-[100px] pointer-events-none -z-10" />

      {/* Hero Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 text-left"
      >
        <motion.div variants={itemVariants} className="inline-flex">
          <span className="tag flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]"
        >
          Engineering{" "}
          <span className="bg-linear-to-r from-primary via-accent-purple to-accent bg-clip-text text-transparent">
            Scalable APIs
          </span>{" "}
          &{" "}
          <span className="bg-linear-to-r from-accent via-accent-purple to-primary bg-clip-text text-transparent">
            Intuitive UIs
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg"
        >
          Hi, I&apos;m <span className="font-bold text-foreground">Milton Odhiambo</span>. I&apos;m a full-stack developer who turns complex backend logistics and database architectures into elegant, responsive products. I specialize in designing recruiter-ready digital experiences.
        </motion.p>

        {/* Tech Stack Highlights */}
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted/80">
            Core Tech Ecosystem
          </p>
          <div className="flex flex-wrap gap-2">
            {codePills.map((pill, idx) => (
              <span
                key={idx}
                className={`rounded-xl border bg-linear-to-r ${pill.color} px-3 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                {pill.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
          <Link href="#projects" className="btn-primary">
            <span>View My Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/CV.pdf" target="_blank" className="btn-secondary">
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Right Code Card / Mockup */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
        className="relative flex-1 w-full max-w-md md:max-w-none"
      >
        <div className="glass rounded-2xl overflow-hidden shadow-soft border-border-subtle/80 bg-slate-950/70">
          {/* Mock Window Bar */}
          <div className="flex items-center justify-between border-b border-border-subtle/40 bg-slate-900/40 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-foreground-muted">
              <Terminal className="h-3 w-3 text-primary" />
              <span>milton-info.json</span>
            </div>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Card Body */}
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-4">
            <div className="space-y-1">
              <p className="text-accent-purple font-semibold">&gt; const developer = &#123;</p>
              <div className="pl-4 space-y-0.5">
                <p>
                  <span className="text-cyan-400">fullName</span>: <span className="text-amber-300">&quot;Milton Odhiambo&quot;</span>,
                </p>
                <p>
                  <span className="text-cyan-400">role</span>: <span className="text-amber-300">&quot;Full-Stack Engineer&quot;</span>,
                </p>
                <p>
                  <span className="text-cyan-400">education</span>: <span className="text-amber-300">&quot;BSc. Computer Science&quot;</span>,
                </p>
                <p>
                  <span className="text-cyan-400">credentials</span>: <span className="text-amber-300">&quot;Power Learn Project Fellow&quot;</span>,
                </p>
                <p>
                  <span className="text-cyan-400">base</span>: <span className="text-amber-300">&quot;Nairobi, Kenya&quot;</span>,
                </p>
                <p>
                  <span className="text-cyan-400">openTo</span>: <span className="text-slate-300">[</span>
                </p>
                <p className="pl-4 text-amber-300">&quot;Junior Roles&quot;, &quot;Internships&quot;, &quot;Freelance&quot;</p>
                <p className="text-slate-300">],</p>
                <p>
                  <span className="text-cyan-400">interests</span>: <span className="text-slate-300">[</span>
                </p>
                <p className="pl-4 text-amber-300">&quot;Backend APIs&quot;, &quot;AI Integrations&quot;, &quot;Clean UI&quot;</p>
                <p className="text-slate-300">]</p>
              </div>
              <p className="text-accent-purple font-semibold">&#125;;</p>
            </div>

            <div className="border-t border-border-subtle/30 pt-4 space-y-2">
              <div className="flex items-center gap-2 text-foreground-muted">
                <MapPin className="h-4 w-4 text-rose-500" />
                <span>Nairobi, Kenya (GMT+3)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Briefcase className="h-4 w-4 text-amber-500" />
                <span>CS Student @ Murang&apos;a Univ.</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Code2 className="h-4 w-4 text-emerald-500" />
                <span>Full-Stack MERN + Python Stack</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
