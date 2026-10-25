# theeBloggers — Modern SaaS Publishing Platform & Notion-Style Block Editor

[![Next.js 16](https://img.shields.io/badge/Framework-Next.js_16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?style=flat&logo=prisma)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?style=flat&logo=postgresql)](https://postgresql.org/)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?style=flat&logo=stripe)](https://stripe.com/)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini_1.5_Flash-8E75B2?style=flat&logo=google)](https://ai.google.dev/)

Repository: **[github.com/Miltonnare/feb-2025-final-project-and-deployment-Miltonnare](https://github.com/Miltonnare/feb-2025-final-project-and-deployment-Miltonnare)**

A production-grade, SaaS-ready publishing platform built to compete directly with Substack, Medium, Ghost, and Hashnode. Engineered as the **Power Learn Project (PLP) Capstone**, theeBloggers features a Notion-style block editor, Google Gemini AI writing assistance, and Stripe-powered creator monetization.

---

## 🚀 Key Features

* **✍️ Notion-Style Block Editor:** Custom block types (paragraphs, headings, blockquotes, code blocks, images) with a floating `/` command selector menu and Markdown keyboard shortcuts.
* **🤖 Google Gemini AI Assistant:** Writing companion powered by `gemini-1.5-flash` providing click-worthy title suggestions, automated SEO excerpts, and constructive readability feedback.
* **💳 Creator Paywall & Monetization:** Built-in paywall toggle on individual posts with Stripe Checkout integration and automated webhook reconciliation.
* **🔒 Enterprise Authentication:** NextAuth v5 paired with Prisma adapter, role-based access control, and secure HTTP session cookies.
* **⚡ Modern Performance:** Next.js 16 App Router with Incremental Static Regeneration (ISR) and React 19 Server Actions.

---

## 📁 Architecture Overview

```
src/
├── app/
│   ├── (auth)/             # Login, Registration, Session Handling
│   ├── (platform)/         # Notion Editor, Author Dashboards, Post Feed
│   ├── api/
│   │   ├── ai/             # Gemini 1.5 Flash Completion Pipelines
│   │   └── webhooks/       # Stripe Checkout Event Reconciliation
│   ├── globals.css         # Tailwind v4 Design Tokens
│   └── layout.tsx          # Root Context & Session Providers
├── components/             # Reusable UI Tokens, Blocks & Navigation
├── features/               # Block Editor Mechanics & Slash Command Handlers
├── lib/
│   ├── prisma.ts           # Global Prisma Client Instance
│   ├── auth.ts             # NextAuth Configuration & Credentials Guards
│   └── stripe.ts           # Stripe SDK & Customer Billing Helpers
└── middleware.ts           # Edge Authentication Route Protection
```

---

## 🛠️ Local Development Setup

### Prerequisites
* Node.js v20+
* PostgreSQL database instance
* Google Gemini API Key (`GEMINI_API_KEY`)
* Stripe API Keys (`STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`)

### Installation
```bash
# 1. Clone repository
git clone https://github.com/Miltonnare/feb-2025-final-project-and-deployment-Miltonnare.git
cd feb-2025-final-project-and-deployment-Miltonnare

# 2. Install dependencies
npm install

# 3. Configure environment variables (.env)
cp .env.example .env

# 4. Generate Prisma schema and run migrations
npx prisma generate
npx prisma migrate dev

# 5. Start development server
npm run dev
```
Open `http://localhost:3000` in your browser.
