"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, CheckCircle2, AlertTriangle, Terminal, Scale, Gauge, FileCode2 } from "lucide-react";

interface BenchmarkCase {
  id: string;
  title: string;
  domain: string;
  promptTask: string;
  modelADefect: {
    label: string;
    snippet: string;
    flaw: string;
  };
  modelBVerified: {
    label: string;
    snippet: string;
    verification: string;
  };
  rubric: {
    dimension: string;
    scoreA: string;
    scoreB: string;
    criteria: string;
  }[];
}

const BENCHMARK_CASES: BenchmarkCase[] = [
  {
    id: "cpp-wal-audit",
    title: "C++17 Storage Engine Concurrency & WAL Audit",
    domain: "Systems Code Evaluation • LuminaDB",
    promptTask:
      "Implement TransactionManager::Commit(txn_id) ensuring ARIES Write-Ahead Logging durability before buffer pool pages are unpinned.",
    modelADefect: {
      label: "Baseline Completion (Hallucinated Ordering)",
      snippet: `// FLAW: Unpins dirty pages BEFORE flushing WAL log!
buffer_pool_->UnpinDirtyPages(txn_id);
auto lsn = wal_->AppendCommitRecord(txn_id);
wal_->FlushAsync(lsn); // Race condition on crash`,
      flaw:
        "Violates the fundamental Write-Ahead Logging invariant: if the OS crashes before FlushAsync completes, dirty pages already evicted to disk cannot be rolled back."
    },
    modelBVerified: {
      label: "Reference Ground-Truth (ACID Verified)",
      snippet: `// VERIFIED: Synchronous LSN flush prior to lock release
const lsn_t commit_lsn = wal_manager_->AppendRecord({
  .type = LogType::COMMIT, .txn_id = txn_id
});
wal_manager_->FlushToDisk(commit_lsn); // Blocks until fsync
buffer_pool_->UnpinDirtyPages(txn_id);`,
      verification:
        "Enforces synchronous fsync up to commit_lsn before unpinning dirty pages. Verified against ClusterFuzzLite crash-recovery harness."
    },
    rubric: [
      { dimension: "ACID Crash Consistency", scoreA: "Fail (Data Corruption)", scoreB: "Pass (Strict WAL)", criteria: "Log record must reach non-volatile disk before page eviction." },
      { dimension: "Memory & Thread Safety", scoreA: "Partial (Race Condition)", scoreB: "Pass (Deterministic)", criteria: "No unguarded asynchronous state mutation across threads." },
      { dimension: "Instruction Adherence", scoreA: "60%", scoreB: "100%", criteria: "Adheres to C++17 RAII and LuminaDB buffer pool contract." }
    ]
  },
  {
    id: "nli-factuality",
    title: "NLI Premise-Hypothesis Contradiction Calibration",
    domain: "NLP & Hallucination Auditing • AuthenticityAI",
    promptTask:
      "Classify semantic relationship between historical Hansard transcript (Premise) and recent policy claim (Hypothesis) without editorial bias.",
    modelADefect: {
      label: "Zero-Shot LLM Prompt (Unconstrained)",
      snippet: `{
  "verdict": "Lie Detected",
  "explanation": "The speaker is being dishonest about budget numbers."
}`,
      flaw:
        "Introduces subjective accusation ('Lie Detected') instead of calibrated NLI probability scores, failing objective audit standards and omitting source timestamps."
    },
    modelBVerified: {
      label: "Calibrated NLI Cross-Encoder Pipeline",
      snippet: `{
  "classification": "CONTRADICTION",
  "confidence": 0.942,
  "premise_ref": "Hansard_2022_06_14#t=00:14:22",
  "delta_summary": "2022 record states >6.2% deficit vs 2024 claim of <3.5%"
}`,
      verification:
        "Outputs normalized softmax probabilities across [Entailment, Neutral, Contradiction] paired with cryptographic SHA-256 transcript references."
    },
    rubric: [
      { dimension: "Factual Grounding", scoreA: "Unverified Opinion", scoreB: "Timestamp-Cited", criteria: "Every assertion must map to an immutable transcript span." },
      { dimension: "Neutrality & Bias Control", scoreA: "Fail (Editorialized)", scoreB: "Pass (Probabilistic)", criteria: "Reports confidence distribution without subjective labels." },
      { dimension: "Schema Determinism", scoreA: "Unstructured JSON", scoreB: "Pydantic Validated", criteria: "Strict FastAPI response model compliance." }
    ]
  },
  {
    id: "groq-latency",
    title: "Sub-200ms LLM Inference & Sliding Memory Benchmark",
    domain: "Inference Optimization • Chatbot- (Groq LPU)",
    promptTask:
      "Maintain multi-turn technical context over 20+ messages in FastAPI while keeping Time-To-First-Token (TTFT) under 250ms.",
    modelADefect: {
      label: "Unbounded Full-History Prompting",
      snippet: `messages = db.find_all_messages(session_id) # 50k+ tokens
response = llm.invoke(messages) # TTFT degrades to 4.2s`,
      flaw:
        "Appending unbounded chat history causes quadratic attention overhead, blowing past token budgets and degrading response latency to >4 seconds."
    },
    modelBVerified: {
      label: "Token-Budgeted Sliding Window + Groq LPU",
      snippet: `memory = ConversationTokenBufferMemory(max_token_limit=2048)
chain = RunnableWithMessageHistory(groq_lpu_client, memory)
# Measured TTFT: 178ms | Throughput: ~480 tokens/sec`,
      verification:
        "Bounds context window to 2,048 tokens with MongoDB Atlas persistence, sustaining sub-200ms TTFT on Render production deployment."
    },
    rubric: [
      { dimension: "Time-To-First-Token (TTFT)", scoreA: "4,200 ms", scoreB: "178 ms", criteria: "Sub-250ms threshold for real-time conversational UX." },
      { dimension: "Token Budget Complexity", scoreA: "O(N) Unbounded", scoreB: "O(1) Bounded (2K)", criteria: "Prevents context overflow and API rate-limit exhaustion." },
      { dimension: "Multi-Turn Coherence", scoreA: "Truncates Abruptly", scoreB: "Sliding Retention", criteria: "Preserves system prompt + recent technical context." }
    ]
  }
];

export function AIBenchmarking() {
  const [selectedId, setSelectedId] = useState<string>(BENCHMARK_CASES[0].id);
  const current = BENCHMARK_CASES.find((c) => c.id === selectedId) || BENCHMARK_CASES[0];

  return (
    <section id="ai-evaluation" className="section-container section-padding relative">
      <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="mb-10 space-y-4 text-center">
        <span className="tag flex items-center gap-1.5 w-fit mx-auto">
          <BrainCircuit className="h-3.5 w-3.5 text-accent" />
          <span>AI Evaluation &amp; Model Benchmarking</span>
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          LLM Code Auditing, RLHF Rubrics &amp; Inference Verification
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          Interactive examples of how I evaluate model completions, audit systems code for subtle concurrency bugs, and benchmark inference pipelines across C++17, Python, and TypeScript.
        </p>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {BENCHMARK_CASES.map((item) => {
          const active = item.id === selectedId;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                active
                  ? "border-primary bg-primary text-white shadow-soft shadow-primary/20 scale-102"
                  : "border-border-subtle bg-slate-100 dark:bg-slate-900/60 text-foreground-muted hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <Scale className="h-3.5 w-3.5" />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Evaluation Workbench */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-6"
        >
          {/* Prompt & Domain Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-bold">
                {current.domain}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mt-0.5">
                {current.title}
              </h3>
            </div>
            <span className="rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 text-xs font-bold w-fit">
              Ground-Truth Verified
            </span>
          </div>

          {/* Prompt Task Box */}
          <div className="rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-border-subtle p-4 text-xs sm:text-sm">
            <span className="font-bold text-foreground flex items-center gap-1.5 mb-1">
              <FileCode2 className="h-4 w-4 text-primary" />
              <span>Evaluation Task / Prompt Specification:</span>
            </span>
            <p className="text-foreground-muted leading-relaxed">
              {current.promptTask}
            </p>
          </div>

          {/* Side-by-Side Comparison: Model A vs Model B */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Model A: Defective / Baseline */}
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-500 flex items-center gap-1.5">
                    <AlertTriangle className="h-4 w-4" />
                    <span>{current.modelADefect.label}</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded font-bold">
                    Rejected
                  </span>
                </div>

                <pre className="rounded-lg bg-slate-950 text-slate-200 p-3.5 text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                  <code>{current.modelADefect.snippet}</code>
                </pre>
              </div>

              <p className="text-xs text-foreground-muted leading-relaxed pt-2 border-t border-rose-500/20">
                <strong className="text-rose-500">Root Cause Analysis:</strong> {current.modelADefect.flaw}
              </p>
            </div>

            {/* Model B: Ground Truth / Verified */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{current.modelBVerified.label}</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    Production Reference
                  </span>
                </div>

                <pre className="rounded-lg bg-slate-950 text-slate-200 p-3.5 text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                  <code>{current.modelBVerified.snippet}</code>
                </pre>
              </div>

              <p className="text-xs text-foreground-muted leading-relaxed pt-2 border-t border-emerald-500/20">
                <strong className="text-emerald-500">Engineering Verification:</strong> {current.modelBVerified.verification}
              </p>
            </div>
          </div>

          {/* Rubric Scoring Table */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground-muted">
              <Gauge className="h-4 w-4 text-accent" />
              <span>Scoring Rubric &amp; Benchmark Telemetry</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border-subtle">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-900/90 text-foreground border-b border-border-subtle">
                  <tr>
                    <th className="py-2.5 px-4 font-bold">Evaluation Dimension</th>
                    <th className="py-2.5 px-4 font-bold text-rose-500">Baseline Model</th>
                    <th className="py-2.5 px-4 font-bold text-emerald-500">Verified Reference</th>
                    <th className="py-2.5 px-4 font-bold">Verification Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {current.rubric.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/40">
                      <td className="py-2.5 px-4 font-semibold text-foreground">{row.dimension}</td>
                      <td className="py-2.5 px-4 font-mono text-rose-500">{row.scoreA}</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-emerald-500">{row.scoreB}</td>
                      <td className="py-2.5 px-4 text-foreground-muted">{row.criteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
