"use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder submit – you can wire this to EmailJS or an API route later.
    setStatus("Thanks for reaching out — I’ll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      className="section-container section-padding grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start"
    >
      <div className="space-y-4">
        <p className="tag">Contact</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Have a role, project, or idea in mind?
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          I&apos;m interested in internships, junior engineering roles, and meaningful
          side projects. Tell me a bit about what you&apos;re building and how I can
          help.
        </p>
        <div className="space-y-2 text-sm text-foreground-muted">
          <p>
            <span className="font-medium text-foreground">Email:</span>{" "}
            <a
              href="mailto:miltonnareblessed@gmail.com"
              className="text-primary underline-offset-2 hover:underline"
            >
              miltonnareblessed@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium text-foreground">GitHub:</span>{" "}
            <a
              href="https://github.com/Miltonnare"
              target="_blank"
              className="text-primary underline-offset-2 hover:underline"
            >
              github.com/Miltonnare
            </a>
          </p>
          <p>
            <span className="font-medium text-foreground">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/milton-odhiambo-14a662261"
              target="_blank"
              className="text-primary underline-offset-2 hover:underline"
            >
              linkedin.com/in/milton-odhiambo-14a662261
            </a>
          </p>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="glass space-y-3 rounded-3xl p-5 text-sm shadow-subtle"
      >
        <h3 className="text-base font-semibold text-foreground">
          Contact me on any projects
        </h3>
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs text-foreground-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-border-subtle bg-slate-950/60 px-3 py-2 text-xs text-foreground outline-none focus:border-primary"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs text-foreground-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border-subtle bg-slate-950/60 px-3 py-2 text-xs text-foreground outline-none focus:border-primary"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="subject" className="text-xs text-foreground-muted">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            className="w-full rounded-lg border border-border-subtle bg-slate-950/60 px-3 py-2 text-xs text-foreground outline-none focus:border-primary"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-xs text-foreground-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full resize-none rounded-lg border border-border-subtle bg-slate-950/60 px-3 py-2 text-xs text-foreground outline-none focus:border-primary"
          />
        </div>
        <button type="submit" className="btn-primary w-full text-center">
          Send message
        </button>
        {status && (
          <p className="text-xs text-primary" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

