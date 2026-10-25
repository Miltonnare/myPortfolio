# Milton Odhiambo — Senior Developer Portfolio & Engineering Case Studies

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat)](LICENSE)

Live Production URL: **[miltonnaresportfolio.netlify.app](https://miltonnaresportfolio.netlify.app/)**  
GitHub Profile: **[github.com/Miltonnare](https://github.com/Miltonnare)**

---

## 🌟 Overview & Technical Positioning

This repository contains the source code for the developer portfolio and engineering showcase of **Milton Odhiambo**, a software engineer with strengths in full-stack web platforms, transactional database engines in C++17, and asynchronous AI/NLP pipelines in Python.

Unlike generic developer templates, this portfolio is built around **evidence-based engineering case studies**, documenting real problems, system architectures, concurrency trade-offs, and verified production repositories.

### Key Highlights
* **Zero Broken Links:** All project links connect directly to verified, public repositories and live deployments.
* **Dual-Theme Design System:** Accessible, WCAG AA contrast-compliant dark and light theme tokens with smooth transitions.
* **Architecture-First Case Studies:** Detailed technical breakdowns including slotted-page storage mechanics, ARIES WAL logging, and NestJS domain-driven monorepos.
* **Live GitHub Sync:** Dynamically synchronized repository feed with fallback resilience.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with Custom Design Tokens |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons |
| **Deployment** | Netlify Edge / Vercel Static Export |

---

## 📁 Repository Structure

```
├── app/
│   ├── globals.css          # Dual-theme tokens, typography, glassmorphism styles
│   ├── layout.tsx           # Metadata, OpenGraph cards, Outfit font, ThemeProvider
│   └── page.tsx             # Home view orchestrating section modules
├── components/
│   ├── hero.tsx             # Engineering positioning & interactive C++ code card
│   ├── trust-strip.tsx      # Verified engineering metrics & ecosystem ribbon
│   ├── about.tsx            # Academic background (Murang'a CS), PLP fellowship, certs
│   ├── skills.tsx           # Competencies grouped by demonstrated project use
│   ├── engineering-capabilities.tsx # Systems, API design, storage engines & AI
│   ├── projects.tsx         # Flagship showcase & domain-based category filters
│   ├── project-card.tsx     # Expandable case study deep-dives with trade-offs
│   ├── github-repos.tsx     # Dynamic GitHub API integration with fallback
│   ├── contact.tsx          # Direct verified channels & client-validated form
│   ├── navbar.tsx           # Responsive navigation with mobile drawer
│   ├── footer.tsx           # Social links & copyright
│   └── theme-toggle.tsx     # Dark/light theme switcher
├── data/
│   └── projects.ts          # Strongly typed project definitions & case studies
├── public/
│   ├── images/              # Project diagrams, bespoke SVG previews & profile photo
│   └── CV.pdf               # Verified curriculum vitae
├── package.json
└── tsconfig.json
```

---

## 🚀 Local Development Setup

### Prerequisites
* **Node.js**: v18.17.0 or higher (v22+ recommended)
* **npm**: v9 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Miltonnare/myPortfolio.git
   cd myPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run production build & typecheck:**
   ```bash
   npm run build
   ```

---

## 🌍 Deployment Instructions

### Deploying to Netlify (Current Host)
1. Link your GitHub repository to your Netlify dashboard.
2. Configure build settings:
   * **Build command:** `npm run build`
   * **Publish directory:** `.next` (or static export `out` if configured)
3. Ensure Environment Variables (if any) are configured in Site Settings.
4. Deploy!

### Deploying to Vercel
```bash
npx vercel
```

---

## 👤 Author & Contact

**Milton Odhiambo**  
* Location: Nairobi, Kenya  
* Email: [miltonnareblessed@gmail.com](mailto:miltonnareblessed@gmail.com)  
* GitHub: [@Miltonnare](https://github.com/Miltonnare)  
* LinkedIn: [linkedin.com/in/milton-odhiambo-14a662261](https://www.linkedin.com/in/milton-odhiambo-14a662261)
