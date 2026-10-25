# Murang'a Events Reloaded — Distributed Event & Ticketing Platform

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/API-Express.js-000000?style=flat&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat&logo=mongodb)](https://mongodb.com/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=flat&logo=vercel)](https://murangaeventsreloaded.vercel.app/)

Live Production Deployment: **[murangaeventsreloaded.vercel.app](https://murangaeventsreloaded.vercel.app/)**

A production-grade full-stack event orchestration and ticketing system featuring short-lived JWT access tokens with secure HTTP-only refresh cookies, Cloudinary dynamic image pipelines, tiered ticket inventory management, and QR code ticket generation.

---

## 🔒 Production Security Architecture

* **Dual-Token Session Security:**
  * Short-lived JWT Access Tokens (15-minute lifespan) sent via Authorization header.
  * Long-lived Refresh Tokens (7-day lifespan) stored exclusively in **HTTP-only, Secure, SameSite=Strict cookies**, completely neutralizing cross-site scripting (XSS) token interception.
* **Brute-Force & Lockout Protection:**
  * Accounts temporarily lock after 5 consecutive failed login attempts with exponential backoff.
* **Seat & Inventory Concurrency Control:**
  * Utilizes Mongoose optimistic concurrency control (version keys `__v`) and atomic decrement operators (`$inc: { capacity: -1 }`) with non-negative constraints to eliminate ticket double-selling during flash traffic surges.

---

## 🌟 Key Features

1. **Multi-Tier Ticketing Engine:** Free, Early-Bird, Paid, and VIP tiers with separate inventory allocations and dynamic pricing increments as early tiers sell out.
2. **Cloudinary Asset Optimization:** Automatic image format negotiation (converting uploaded posters to modern WebP) and responsive resizing based on client viewport.
3. **QR Code Verification:** Generates cryptographic QR codes for every confirmed attendee ticket, verified at event entrance scanner gates.
4. **Vercel Serverless Production Deployment:** Configured for instant global edge scaling.

---

## 🚀 Local Development Setup

### Server Setup:
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### Client Setup:
```bash
cd client
npm install
npm start
```
Client runs on `http://localhost:3000` and proxies requests to Express backend on `http://localhost:5000`.

---

## 🧪 Testing
```bash
cd server
npm run test
```
Tests cover JWT cookie rotation, authentication middleware guards, and concurrent seat reservation transactions.
