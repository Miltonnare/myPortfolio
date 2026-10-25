"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Calendar, ExternalLink, Code2 } from "lucide-react";
import { Github } from "@/components/brand-icons";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "LuminaDB",
    description: "Transactional Relational Database Engine in C++17 (B+Tree, WAL, Slotted Page Files).",
    html_url: "https://github.com/Miltonnare/LuminaDB",
    stargazers_count: 0,
    forks_count: 0,
    language: "C++",
    updated_at: "2026-10-24T19:42:05Z"
  },
  {
    id: 2,
    name: "MicroJob_Project",
    description: "Enterprise-grade digital marketplace monorepo for Kenya's informal workforce.",
    html_url: "https://github.com/Miltonnare/MicroJob_Project",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-10-24T19:44:09Z"
  },
  {
    id: 3,
    name: "AuthenticityAI",
    description: "Evidence-first political statement consistency registry powered by NLI and vector search.",
    html_url: "https://github.com/Miltonnare/AuthenticityAI",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    updated_at: "2026-10-24T19:45:28Z"
  },
  {
    id: 4,
    name: "EVENTMANAGEMENT",
    description: "Full-stack event registration and ticketing system with production JWT cookie authentication.",
    html_url: "https://github.com/Miltonnare/EVENTMANAGEMENT",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-10-21T08:49:20Z"
  },
  {
    id: 5,
    name: "NyumbaF",
    description: "Kenya-first furniture ecommerce showcase with doorway spatial clearance calculations.",
    html_url: "https://github.com/Miltonnare/NyumbaF",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-10-10T08:21:17Z"
  },
  {
    id: 6,
    name: "Chatbot-",
    description: "Low-latency conversational AI microservice with Groq LPU and LangChain memory.",
    html_url: "https://github.com/Miltonnare/Chatbot-",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    updated_at: "2026-02-22T12:00:00Z"
  }
];

export function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Miltonnare/repos?sort=pushed&per_page=6"
        );
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          }
        }
      } catch (err) {
        console.error("Error fetching github repos, using verified fallback:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } catch {
      return "Recent";
    }
  };

  return (
    <section className="section-container section-padding space-y-10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      {/* Title */}
      <div className="space-y-4 text-center">
        <span className="tag flex items-center gap-1.5 w-fit mx-auto">
          <Github className="h-3.5 w-3.5" />
          <span>Synchronized GitHub Feed</span>
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Active GitHub Repositories
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          Direct feed of repositories actively pushed and maintained on my GitHub profile.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-5 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-foreground-muted group-hover:text-primary transition-colors" />
              </div>

              <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed">
                {repo.description || "Open-source software repository by Milton Odhiambo."}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-semibold">{repo.language || "TypeScript"}</span>
              </span>

              <span className="flex items-center gap-1 font-mono text-[10px]">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(repo.updated_at)}</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center pt-2">
        <a
          href="https://github.com/Miltonnare?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
        >
          <span>View all 50+ repositories on GitHub</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
