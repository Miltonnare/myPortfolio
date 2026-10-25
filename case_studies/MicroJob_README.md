# MicroJob Kenya — Informal Workforce Digital Marketplace Monorepo

[![MicroJob CI Pipeline](https://github.com/Miltonnare/MicroJob_Project/actions/workflows/ci.yml/badge.svg)](https://github.com/Miltonnare/MicroJob_Project/actions)
[![NestJS](https://img.shields.io/badge/Backend-NestJS-E0234E?style=flat&logo=nestjs)](https://nestjs.com/)
[![React 19](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?style=flat&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?style=flat&logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Containers-Docker-2496ED?style=flat&logo=docker)](https://www.docker.com/)

MicroJob Kenya is an enterprise-grade digital marketplace monorepo built specifically to address unemployment, wage insecurity, and middleman exploitation among Kenya's informal workforce ("fundis", casual laborers, masons, carpenters, plumbers, cleaners, mechanics, and artisans).

---

## 📁 Monorepo Structure

```
MicroJob_Project/
├── frontend/             # Modern React 19 + TypeScript + Vite + TailwindCSS app
│   ├── src/              # Components, stores, services, interactive Kenyan county maps
│   ├── public/           # Static PWA assets & offline manifest
│   └── Dockerfile        # Multi-stage production Nginx static container
│
├── backend/              # NestJS + TypeScript + Prisma ORM + PostgreSQL API
│   ├── src/              # Auth, Jobs, Workers, Escrow, Applications, Moderation
│   ├── prisma/           # Schema & seed data (47 Kenyan Counties & Vocational Trades)
│   ├── test/             # Supertest E2E integration test suite
│   └── Dockerfile        # Multi-stage production NestJS container
│
├── .github/
│   └── workflows/ci.yml  # Automated GitHub Actions CI pipeline
├── docker-compose.yml    # Full-stack local development orchestration
└── README.md
```

---

## 🌟 Key Features

1. **Kenyan Informal Sector Classification:** Seed database models mapping all 47 Kenyan Counties (Nairobi, Mombasa, Kisumu, Kiambu, Nakuru, etc.) and standardized trade specializations (NITA certified plumbers, domestic electricians, tile setters).
2. **Escrow Milestone State Machine:** Prevents payment defaults and wage disputes by locking funds before task dispatch and releasing payments upon client sign-off.
3. **PWA Offline Mode:** Lightweight client caching designed for low-bandwidth 3G mobile networks common in informal settlements.
4. **Automated CI/CD:** GitHub Actions pipeline validating Prisma migrations, unit tests, and Supertest API suites on every pull request.

---

## 🚀 Quickstart & Installation

### Using Docker Compose (Recommended)
```bash
# 1. Clone repository
git clone https://github.com/Miltonnare/MicroJob_Project.git
cd MicroJob_Project

# 2. Configure environment
cp .env.example .env

# 3. Spin up PostgreSQL, Backend API, and Frontend
docker compose up --build
```
The frontend is available at `http://localhost:3000` and the NestJS REST API at `http://localhost:4000/api`.

### Manual Local Setup

#### Backend Setup:
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npx ts-node prisma/seed.ts
npm run start:dev
```

#### Frontend Setup:
```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Testing Instructions

```bash
cd backend
# Run unit tests
npm run test

# Run end-to-end integration tests with Supertest
npm run test:e2e
```

---

## 🔒 Security & Concurrency
* **Authentication:** JWT tokens signed with RS256 paired with role-based access control guards (`@Roles('CLIENT', 'WORKER', 'MODERATOR')`).
* **Concurrency:** Database transactions run with serializable isolation on milestone releases to prevent double-disbursement race conditions.
