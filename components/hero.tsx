"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, MapPin, Database, Cpu, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  const codePills = [
    { name: "TypeScript / React / Next.js", color: "from-blue-500/15 to-cyan-500/15 text-blue-400 dark:text-cyan-400 border-blue-500/25" },
    { name: "Python / FastAPI / NLI", color: "from-amber-500/15 to-yellow-500/15 text-amber-500 dark:text-amber-400 border-amber-500/25" },
    { name: "C++17 / Database Engines", color: "from-indigo-500/15 to-purple-500/15 text-indigo-500 dark:text-indigo-400 border-indigo-500/25" },
    { name: "Node.js / NestJS / Express", color: "from-emerald-500/15 to-teal-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25" },
    { name: "PostgreSQL / MongoDB / Prisma", color: "from-cyan-500/15 to-blue-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-500/25" },
    { name: "Docker / CI/CD Pipelines", color: "from-rose-500/15 to-pink-500/15 text-rose-500 dark:text-rose-400 border-rose-500/25" }
  ];

  return (
    <section
      id="top"
      className="relative section-container flex flex-col items-center justify-between gap-12 pt-20 pb-16 md:flex-row md:pt-28 md:pb-24 overflow-visible"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 text-left"
      >
        <motion.div variants={itemVariants} className="inline-flex">
          <span className="tag flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Software Engineering Opportunities</span>
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
            Engineering{" "}
            <span className="bg-linear-to-r from-primary via-indigo-400 to-accent bg-clip-text text-transparent">
              Scalable Systems
            </span>
            ,<br />
            Robust APIs &amp; Modern UIs
          </h1>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span>Nairobi, Kenya • Murang&apos;a University of Technology CS</span>
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg"
        >
          Hi, I&apos;m <span className="font-bold text-foreground">Milton Odhiambo</span>. I am a software engineer focused on building verified end-to-end applications—ranging from transactional database engines in <span className="font-semibold text-foreground">C++17</span> and full-stack monorepos in <span className="font-semibold text-foreground">NestJS &amp; React</span>, to asynchronous AI/NLP pipelines in <span className="font-semibold text-foreground">Python &amp; FastAPI</span>.
        </motion.p>

        {/* Tech Ecosystem Pills */}
        <motion.div variants={itemVariants} className="space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
            Verified Stack &amp; Specializations
          </p>
          <div className="flex flex-wrap gap-2">
            {codePills.map((pill, idx) => (
              <span
                key={idx}
                className={`rounded-xl border bg-linear-to-r ${pill.color} px-3 py-1 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                {pill.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
          <Link href="#projects" className="btn-primary">
            <span>Explore Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Download className="h-4 w-4 text-primary" />
            <span>Download Resume</span>
          </a>
          <div className="flex items-center gap-2 pl-2">
            <a
              href="https://github.com/Miltonnare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="glass p-2.5 rounded-xl hover:text-primary transition-all duration-300"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="glass p-2.5 rounded-xl hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Right Code Card */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
        className="relative flex-1 w-full max-w-lg md:max-w-none"
      >
        <div className="glass rounded-2xl overflow-hidden shadow-soft border-border-subtle bg-slate-950/80 text-slate-100">
          {/* Mock Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Terminal className="h-3.5 w-3.5 text-accent" />
              <span>LuminaDB::WriteAheadLog.cpp</span>
            </div>
            <span className="text-[10px] font-mono rounded bg-primary/20 text-indigo-300 px-2 py-0.5">
              C++17
            </span>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-2 overflow-x-auto">
            <div className="text-slate-500">{"// LuminaDB: Transaction commit with ARIES WAL persistence"}</div>
            <div>
              <span className="text-purple-400">auto</span>{" "}
              <span className="text-blue-400">TransactionManager</span>
              <span className="text-slate-300">::</span>
              <span className="text-amber-300">Commit</span>
              <span className="text-slate-300">(</span>
              <span className="text-emerald-300">TxnId</span> txn_id
              <span className="text-slate-300">) -&gt; </span>
              <span className="text-purple-400">bool</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> lsn_t commit_lsn = wal_manager_-&gt;
              <span className="text-amber-300">AppendRecord</span>({"{"}
            </div>
            <div className="pl-8 text-cyan-300">
              .type = LogType::COMMIT,
            </div>
            <div className="pl-8 text-cyan-300">
              .txn_id = txn_id,
            </div>
            <div className="pl-8 text-cyan-300">
              .prev_lsn = active_txns_.at(txn_id).last_lsn
            </div>
            <div className="pl-4">{"});"}</div>
            
            <div className="pl-4 text-slate-500">{"// Synchronously flush log buffer before releasing locks"}</div>
            <div className="pl-4">
              wal_manager_-&gt;<span className="text-amber-300">FlushToDisk</span>(commit_lsn);
            </div>
            <div className="pl-4">
              buffer_pool_-&gt;<span className="text-amber-300">UnpinDirtyPages</span>(txn_id);
            </div>
            <div className="pl-4">
              <span className="text-purple-400">return</span> <span className="text-emerald-400">true</span>;
            </div>
            <div>{"}"}</div>
          </div>

          {/* Footer Status Bar */}
          <div className="border-t border-slate-800 bg-slate-900/60 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span className="font-mono text-[11px]">ClusterFuzzLite Passing</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <Database className="h-3 w-3 text-cyan-400" />
              <span>ACID Slotted-Page Engine</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
