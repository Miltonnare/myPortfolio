"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Calendar, Code, ExternalLink } from "lucide-react";
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

export function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Miltonnare/repos?sort=updated&per_page=6"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        // Map data into Repo interface, filtered for public repositories
        setRepos(data);
      } catch (err) {
        console.error("Error fetching github repos:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const skeletonVariants = {
    pulse: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="section-container section-padding space-y-10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-75 w-75 rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      {/* Title */}
      <div className="space-y-4 text-center">
        <span className="tag">Open Source</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Live GitHub Repositories
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          Dynamically synchronized repository feed tracking my latest open-source contributions and active scripts.
        </p>
      </div>

      {loading ? (
        /* Loading Skeletons */
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              variants={skeletonVariants}
              animate="pulse"
              className="glass p-5 rounded-2xl h-44 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-4 bg-slate-800 rounded-md w-2/3" />
                <div className="space-y-1.5">
                  <div className="h-3 bg-slate-800 rounded-md w-full" />
                  <div className="h-3 bg-slate-800 rounded-md w-5/6" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-3 bg-slate-800 rounded-md w-1/4" />
                <div className="h-3 bg-slate-800 rounded-md w-1/4" />
              </div>
            </motion.div>
          ))}
        </div>
      ) : error || repos.length === 0 ? (
        /* Graceful Fallback if API fails/throttles */
        <div className="glass p-8 rounded-2xl text-center max-w-xl mx-auto space-y-4">
          <Github className="h-10 w-10 mx-auto text-foreground-muted animate-bounce" />
          <h3 className="text-base font-bold text-foreground">GitHub Feed Temporarily Offline</h3>
          <p className="text-xs text-foreground-muted leading-relaxed">
            The API limit may have been reached, or there was a connection interruption. You can inspect my active works directly on my GitHub profile.
          </p>
          <a
            href="https://github.com/Miltonnare"
            target="_blank"
            className="btn-outline inline-flex"
          >
            <span>Explore Miltonnare Profile</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      ) : (
        /* Live Repos Grid */
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass p-5 rounded-2xl flex flex-col justify-between hover:border-primary/20 hover:bg-slate-900/50 hover:shadow-soft"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-foreground truncate max-w-[80%] hover:text-primary transition-colors">
                    <a href={repo.html_url} target="_blank">
                      {repo.name}
                    </a>
                  </h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="text-foreground-muted hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed h-8">
                  {repo.description || "No description provided for this repository."}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between border-t border-border-subtle/20 pt-3 mt-4 text-[10px] font-semibold text-foreground-muted">
                <div className="flex gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <Code className="h-3.5 w-3.5 text-primary" />
                      <span>{repo.language}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-0.5">
                    <Star className="h-3.5 w-3.5 text-amber-500" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-0.5">
                    <GitFork className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(repo.updated_at)}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
