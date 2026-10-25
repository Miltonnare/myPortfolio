"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle, Copy, Check, MapPin, Clock, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [lastSubmitted, setLastSubmitted] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailError, setEmailError] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("miltonnareblessed@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  const buildMailtoUrl = (data: FormData) => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    return `mailto:miltonnareblessed@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("A valid email address is required.");
      return;
    }

    setLoading(true);
    setLastSubmitted(formData);

    try {
      const payload = new URLSearchParams({
        "form-name": "portfolio-contact",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }).toString();

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload
      });

      if (!res.ok) {
        // Fallback: trigger mailto client so message is never dropped
        window.location.href = buildMailtoUrl(formData);
      }
    } catch {
      window.location.href = buildMailtoUrl(formData);
    } finally {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section-container section-padding relative">
      <div className="absolute top-1/4 right-0 h-72 w-72 rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      {/* Grid wrapper */}
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] items-start">
        
        {/* Contact Info Column */}
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="tag">Get In Touch</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Discuss Engineering Opportunities
            </h2>
            <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
              I am actively seeking software engineering positions, international remote opportunities, freelance backend contracts, and technical AI benchmark roles. Feel free to reach out directly.
            </p>
          </div>

          {/* Quick info cards */}
          <div className="space-y-3 pt-2">
            {/* Email Card with Copy button */}
            <div className="glass p-4 rounded-xl flex items-center justify-between hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-100 dark:bg-slate-900 p-2 text-primary border border-border-subtle">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-xs text-foreground-muted">Direct Email</p>
                  <a
                    href="mailto:miltonnareblessed@gmail.com"
                    className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    miltonnareblessed@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2 text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/Miltonnare"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3.5 rounded-xl flex items-center gap-2.5 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="rounded-lg bg-slate-100 dark:bg-slate-900 p-2 text-foreground group-hover:text-primary transition-colors border border-border-subtle">
                  <Github className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground-muted">GitHub</p>
                  <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">@Miltonnare</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3.5 rounded-xl flex items-center gap-2.5 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="rounded-lg bg-slate-100 dark:bg-slate-900 p-2 text-blue-500 border border-border-subtle">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground-muted">LinkedIn</p>
                  <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">Milton Odhiambo</p>
                </div>
              </a>
            </div>

            {/* Location & Timezone info */}
            <div className="glass p-3.5 rounded-xl flex items-center justify-between text-xs text-foreground-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>EAT (UTC+3)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="glass p-6 sm:p-8 rounded-2xl relative">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Send an Inquiry
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-4"
            >
              <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-foreground">Inquiry Logged Successfully</h4>
              <p className="text-xs text-foreground-muted max-w-sm mx-auto">
                Your message has been dispatched via Netlify Forms. You can also send a direct copy via your email client below for immediate priority.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {lastSubmitted && (
                  <a
                    href={buildMailtoUrl(lastSubmitted)}
                    className="btn-primary text-xs py-2.5 px-4"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Open Direct Email Copy</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs py-2.5 px-4"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          ) : (
            <form
              name="portfolio-contact"
              method="POST"
              data-netlify="true"
              onSubmit={onSubmit}
              className="space-y-4 text-xs sm:text-sm"
            >
              <input type="hidden" name="form-name" value="portfolio-contact" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-semibold text-foreground">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border-subtle bg-slate-50 dark:bg-slate-900/80 px-3.5 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-semibold text-foreground">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border-subtle bg-slate-50 dark:bg-slate-900/80 px-3.5 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {emailError && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 pt-0.5">
                      <AlertCircle className="h-3 w-3" />
                      <span>{emailError}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-semibold text-foreground">
                  Subject / Role Description
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="e.g. Full-Stack Engineer Role / AI Evaluation Contract"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border-subtle bg-slate-50 dark:bg-slate-900/80 px-3.5 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-semibold text-foreground">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Share details about the project, role requirements, or collaboration..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border-subtle bg-slate-50 dark:bg-slate-900/80 px-3.5 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Dispatching Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Engineering Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
