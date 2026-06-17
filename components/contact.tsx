"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Final validation checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("A valid email is required.");
      return;
    }

    setLoading(true);

    // Simulate sending email API route delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-container section-padding relative">
      <div className="absolute top-1/4 right-0 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Grid wrapper */}
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] items-start">
        
        {/* Contact info column */}
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="tag">Get In Touch</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Build Something Impactful
            </h2>
            <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
              I am open to early-career positions, technical internships, freelance projects, and open-source collaborations. Drop me a line, and let&apos;s talk engineering.
            </p>
          </div>

          {/* Social cards list */}
          <div className="space-y-3 pt-2">
            {[
              {
                label: "Email Address",
                value: "miltonnareblessed@gmail.com",
                href: "mailto:miltonnareblessed@gmail.com",
                icon: <Mail className="h-5 w-5 text-indigo-500" />
              },
              {
                label: "GitHub Profile",
                value: "github.com/Miltonnare",
                href: "https://github.com/Miltonnare",
                icon: <Github className="h-5 w-5 text-cyan-400" />
              },
              {
                label: "LinkedIn Profile",
                value: "linkedin.com/in/milton-odhiambo",
                href: "https://www.linkedin.com/in/milton-odhiambo-14a662261",
                icon: <Linkedin className="h-5 w-5 text-blue-500" />
              }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                className="glass p-4 rounded-xl flex items-center gap-4 hover:border-primary/20 hover:bg-slate-900/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="rounded-xl bg-slate-900/80 p-2.5 shadow-inner border border-border-subtle/30">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-foreground-muted/70">
                    {contact.label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground truncate hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form column */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={onSubmit}
                className="glass rounded-2xl p-6 space-y-4 hover:border-primary/10 bg-slate-950/50"
              >
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  Send a Direct Message
                </h3>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground-muted">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border-subtle bg-slate-950/60 px-4 py-3 text-xs text-foreground outline-none focus:border-primary focus:bg-slate-950 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground-muted">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-xs text-foreground outline-none focus:border-primary focus:bg-slate-950 transition-all duration-300 ${
                      emailError ? "border-rose-500/50 focus:border-rose-500" : "border-border-subtle"
                    }`}
                    placeholder="you@example.com"
                  />
                  {emailError && (
                    <p className="flex items-center gap-1 text-[10px] text-rose-500 font-semibold mt-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{emailError}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-foreground-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border-subtle bg-slate-950/60 px-4 py-3 text-xs text-foreground outline-none focus:border-primary focus:bg-slate-950 transition-all duration-300"
                    placeholder="Project Inquiry, Internship Opportunity..."
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground-muted">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-border-subtle bg-slate-950/60 px-4 py-3 text-xs text-foreground outline-none focus:border-primary focus:bg-slate-950 transition-all duration-300"
                    placeholder="Describe your project, role, or proposal..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading || !!emailError}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success screen card */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass rounded-2xl p-8 text-center bg-slate-950/50 space-y-4 border border-emerald-500/20"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Message Transmitted Successfully</h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. Your message has been dispatched, and I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline inline-flex text-xs font-semibold px-5 py-2.5 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
