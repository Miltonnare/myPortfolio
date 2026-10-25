export type ProjectCategory = "all" | "fullstack" | "systems" | "ai" | "frontend";

export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  problemSolved: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  architecture: string;
  challenges: string;
  solution: string;
  tradeoffs: string;
  validation: string;
  image: string;
  github: string;
  live?: string;
  category: "fullstack" | "systems" | "ai" | "frontend";
  featured?: boolean;
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    id: "microjob-kenya",
    title: "MicroJob Kenya – Informal Workforce Digital Marketplace",
    badge: "Full-Stack Monorepo • CI/CD",
    description: "An enterprise-grade monorepo marketplace bridging Kenya's informal workforce (fundis, electricians, masons, carpenters) with verified clients, secure milestones, and county-specific geo-dispatching.",
    problemSolved: "Over 80% of Kenya's working population operates in the informal sector, facing rampant wage insecurity, payment defaults, zero verified credentials, and high middleman exploitation.",
    role: "Full-Stack Architect & Monorepo Engineer",
    techStack: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "React 19", "Vite", "Tailwind CSS", "Docker", "GitHub Actions"],
    keyFeatures: [
      "Modular NestJS API with domain-driven design (Auth, Jobs, Workers, Escrow, Moderation)",
      "47 Kenyan Counties & standardized vocational trade classification seed schema",
      "Automated CI/CD pipeline executing Supertest E2E integration test suites on pull requests",
      "Multi-stage Docker containers with production Nginx static caching for React 19 frontend",
      "PWA offline-ready interface for low-bandwidth mobile devices in rural areas"
    ],
    architecture: "Decoupled monorepo with NestJS backend, Prisma ORM communicating with PostgreSQL, and React 19 + TypeScript frontend. Includes database seeding for all 47 Kenyan counties and Docker containerization.",
    challenges: "Handling unreliable network connectivity in informal Kenyan settlements while preventing worker double-booking and payment fraud.",
    solution: "Implemented client-side optimistic UI updates backed by an escrow milestone state machine in NestJS with database-level transaction isolation, guaranteeing that worker payouts are secured before job commencement.",
    tradeoffs: "Adopted a monorepo structure with Prisma rather than separate microservice repos to maintain single-command local development ergonomics and type sharing across backend DTOs and frontend API clients.",
    validation: "Verified via GitHub Actions continuous integration pipeline running automated Supertest API suites, Prisma schema migrations, and multi-stage container builds.",
    image: "/images/microjob-preview.svg",
    github: "https://github.com/Miltonnare/MicroJob_Project",
    category: "fullstack",
    featured: true,
    flagship: true
  },
  {
    id: "luminadb-engine",
    title: "LuminaDB – Transactional Relational Database Engine in C++17",
    badge: "Systems Programming • C++17",
    description: "A transactional relational-style database engine built from scratch in C++17, featuring slotted-page file layouts, in-memory B+Tree primary key indexing, ARIES-style Write-Ahead Logging (WAL), and a SQL parser/executor.",
    problemSolved: "Traditional lightweight file stores lack ACID crash recovery, while standard SQL engines are monolithic black boxes that obscure low-level disk I/O, cache management, and lock contention.",
    role: "Systems & Database Internals Engineer",
    techStack: ["C++17", "CMake", "GoogleTest", "ClusterFuzzLite", "Data Structures", "Systems Architecture"],
    keyFeatures: [
      "Slotted-page storage manager allocating variable-length records on 4KB OS filesystem blocks",
      "In-memory B+Tree index supporting O(log n) point queries and range-based index scans with node splits",
      "ARIES-style Write-Ahead Log (WAL) executing Redo for committed transactions and Undo for aborted mutations upon restart",
      "Recursive descent SQL tokenizer and execution tree supporting SELECT, INSERT, and WHERE filters",
      "Continuous fuzz testing harness integrated via ClusterFuzzLite to detect memory safety bugs"
    ],
    architecture: "Decoupled 5-layer systems architecture: (1) Type-Length-Value (TLV) bounds-checked serialization; (2) Slotted-Page Disk & Buffer Manager; (3) ARIES WAL logging engine; (4) Dynamic B+Tree index; (5) SQL Lexer and AST execution pipeline.",
    challenges: "Preventing database file corruption and uncommitted memory leaks when the host process terminates unexpectedly mid-write.",
    solution: "Engineered strict Write-Ahead Logging where page mutations are only persisted to disk after their corresponding log records are flushed to non-volatile storage with verified Log Sequence Numbers (LSNs).",
    tradeoffs: "Chose in-memory B+Tree indexing coupled with on-disk slotted pages to maximize read lookup throughput while keeping the serialization boundary clean for transaction rollbacks.",
    validation: "ClusterFuzzLite fuzzing harness and comprehensive unit tests covering page splitting, record compaction, and crash recovery rollbacks.",
    image: "/images/luminadb-preview.svg",
    github: "https://github.com/Miltonnare/LuminaDB",
    category: "systems",
    featured: true
  },
  {
    id: "theebloggers-platform",
    title: "theeBloggers – Modern SaaS Publishing Platform & Notion Block Editor",
    badge: "Full-Stack SaaS • Gemini AI • Stripe",
    description: "A production-grade SaaS publishing platform built to compete directly with Substack and Medium, featuring a Notion-style block editor, Google Gemini AI writing assistance, and Stripe creator paywalls.",
    problemSolved: "Independent writers and journalists struggle with restrictive publishing platforms that charge exorbitant platform fees, lack modern block-editing ergonomics, and offer zero built-in AI writing workflows.",
    role: "Lead Full-Stack Developer (PLP Capstone)",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL", "Stripe", "NextAuth v5", "Gemini 1.5 Flash", "Tailwind CSS", "Zod"],
    keyFeatures: [
      "Notion-style block editor supporting custom markdown shortcuts, blockquotes, code blocks, and slash (/) menu commands",
      "Google Gemini 1.5 Flash integration generating automated SEO excerpts, click-worthy titles, and readability insights",
      "Stripe Checkout paywall integration enabling paid subscriber tiers with webhook transaction settlement",
      "NextAuth v5 authentication with Prisma adapter, role-based access control, and secure session management",
      "Incremental Static Regeneration (ISR) and server-side news feed caching protecting external API rate limits"
    ],
    architecture: "Next.js App Router full-stack architecture with React 19 Server Actions, Prisma ORM communicating with PostgreSQL, NextAuth v5 session guards, and Stripe webhook handling for paywall unlocks.",
    challenges: "Building a fluid Notion-style block editor with drag handles, block reordering, and instant markdown parsing without degrading client-side input latency.",
    solution: "Engineered modular block state management using custom React hooks and debounced local state sync, isolating expensive markdown compilations and AI requests from the primary typing thread.",
    tradeoffs: "Leveraged Next.js 16 Server Actions and Prisma rather than a separate Express backend to achieve unified end-to-end type safety between database models and client form validations via Zod.",
    validation: "Deployed and verified with end-to-end user authentication flows, active Gemini AI suggestions, and Stripe test-mode webhook payment verification.",
    image: "/images/theebloggers-preview.svg",
    github: "https://github.com/Miltonnare/feb-2025-final-project-and-deployment-Miltonnare",
    category: "fullstack",
    featured: true
  },
  {
    id: "authenticity-ai",
    title: "AuthenticityAI – Evidence-First Political Statement Registry & NLI Engine",
    badge: "AI/NLP • FastAPI • Vector Search",
    description: "An open-source political accountability platform tracking public assertions over time using Natural Language Inference (NLI) and semantic vector similarity search without subjective editorial bias.",
    problemSolved: "Political discourse suffers from widespread contradictions and historical misquotes with no tamper-resistant, evidence-backed tool for citizens and journalists to verify consistency across years.",
    role: "Lead AI & Backend Systems Developer",
    techStack: ["Python", "FastAPI", "Sentence Transformers", "NLI Cross-Encoders", "PostgreSQL", "Docker Compose"],
    keyFeatures: [
      "Semantic vector indexing converting raw political speeches and hansards into dense embeddings",
      "Natural Language Inference (NLI) pipeline classifying candidate statement pairs as Entailment, Neutral, or Contradiction",
      "Tamper-resistant audit log with cryptographic statement hashing and timestamped audio/transcript links",
      "Asynchronous FastAPI REST API with Docker Compose orchestration for localized self-hosting"
    ],
    architecture: "FastAPI asynchronous service orchestrating sentence-transformer vector embeddings, cosine similarity search across historical statement corpora, and cross-encoder inference for contradiction probability scoring.",
    challenges: "Avoiding political bias and false-positive contradiction flags caused by shifting linguistic context and colloquial idioms.",
    solution: "Designed an evidence-first UI displaying exact confidence metrics, side-by-side Hansard/video timestamps, and raw premise/hypothesis scoring rather than unilateral true/false judgments.",
    tradeoffs: "Utilized asynchronous background workers for dense vector embedding computation, preventing synchronous HTTP request starvation during large speech document ingestions.",
    validation: "Evaluated against benchmark political statement datasets with automated integration test suites validating vector retrieval precision and NLI classification thresholds.",
    image: "/images/authenticity-preview.svg",
    github: "https://github.com/Miltonnare/AuthenticityAI",
    category: "ai",
    featured: true
  },
  {
    id: "event-management",
    title: "Murang'a Events Reloaded – Distributed Event & Ticketing Platform",
    badge: "Full-Stack • Deployed on Vercel",
    description: "A production-grade full-stack event orchestration and ticketing system featuring short-lived JWT access tokens with HTTP-only refresh cookies, Cloudinary asset pipelines, and QR code ticket delivery.",
    problemSolved: "Event organizers suffer from registration bottlenecks, ticket overselling during peak traffic surges, and security vulnerabilities associated with local storage token persistence.",
    role: "Full-Stack Engineer & Backend Lead",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Vercel"],
    keyFeatures: [
      "Dual-token authentication: Short-lived JWT access tokens + HTTP-only cookie refresh rotation with brute-force lockout",
      "Dynamic multi-tier ticketing (Free, Early-Bird, Paid, VIP) with automated inventory decrement controls",
      "Cloudinary image ingestion pipeline with on-the-fly format and responsive WebP delivery",
      "Unique ticket ID generation, QR-code validation, and purchase history tracking",
      "Production deployment with automated serverless scaling on Vercel"
    ],
    architecture: "Three-tier architecture with React client, Express RESTful API gateway, and MongoDB database. Utilizes Mongoose schema versioning for seat reservation concurrency control.",
    challenges: "Preventing ticket double-selling during concurrent flash registration windows while ensuring resilient session authentication across client restarts.",
    solution: "Implemented optimistic concurrency controls via MongoDB version keys and atomic decrement operators, combined with secure HTTP-only cookies that prevent cross-site scripting (XSS) token interception.",
    tradeoffs: "Selected MongoDB with compound indexing over SQL to support flexible custom metadata schemas for diverse event formats (academic summits, hackathons, concerts).",
    validation: "Tested under simulated concurrent registration loads and deployed live in production serving active university and community events.",
    image: "/images/event-system.png",
    github: "https://github.com/Miltonnare/EVENTMANAGEMENT",
    live: "https://murangaeventsreloaded.vercel.app/",
    category: "fullstack",
    featured: true
  },
  {
    id: "nyumba-furniture",
    title: "NYUMBA – Kenya-First Editorial Furniture Ecommerce Showcase",
    badge: "Frontend Architecture • Deployed on Vercel",
    description: "An editorial, high-performance ecommerce platform engineered specifically for contemporary Nairobi urban living, featuring interactive doorway spatial clearance calculators and M-Pesa STK push simulation.",
    problemSolved: "Furniture buyers in Nairobi frequently face spatial mismatches (sofas failing to clear apartment elevators or narrow stairwells) and unexpected delivery surcharges.",
    role: "Frontend Engineer & UI/UX Specialist",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite", "Vercel"],
    keyFeatures: [
      "Interactive 'Will It Fit?' doorway and elevator clearance geometry calculator",
      "Nairobi zone-based delivery rate engine (Westlands, Kilimani, Lavington, Karen, Runda)",
      "Simulated M-Pesa Express (STK Push) checkout workflow with status polling states",
      "Material transparency specifications detailing Grevillea hardwoods and Kenyan linen weaves",
      "Accessible keyboard navigation and WCAG AA contrast compliance"
    ],
    architecture: "Client-side single-page application built with React 18 and Vite, utilizing TypeScript interfaces for furniture geometry models and Tailwind CSS design tokens.",
    challenges: "Building a complex spatial dimension calculator that delivers instant visual pass/fail feedback without UI thread lag on mobile viewports.",
    solution: "Engineered pure TypeScript dimensional projection algorithms evaluating bounding box clearances against standard Nairobi apartment building door and stairwell profiles.",
    tradeoffs: "Delivered as an optimized static SPA for instantaneous sub-100ms navigation and zero infrastructure hosting overhead.",
    validation: "Verified on mobile, tablet, and desktop viewports with 100% responsive fidelity and deployed live on Vercel.",
    image: "/images/nyumba-preview.svg",
    github: "https://github.com/Miltonnare/NyumbaF",
    live: "https://nyumba-f.vercel.app",
    category: "frontend",
    featured: true
  },
  {
    id: "chatbot-groq",
    title: "Chatbot- – Low-Latency Conversational Assistant with Groq LPU",
    badge: "AI/FastAPI • Deployed on Render",
    description: "A high-throughput conversational AI microservice built with FastAPI, LangChain, and Groq's LPU acceleration, providing sub-200ms token generation and MongoDB Atlas persistent memory.",
    problemSolved: "Standard cloud LLM endpoints exhibit 2-4 second response latencies that degrade conversational interactivity in technical assistant workflows.",
    role: "AI Backend Engineer",
    techStack: ["Python", "FastAPI", "Groq LPU API", "LangChain", "MongoDB Atlas", "Uvicorn", "Render"],
    keyFeatures: [
      "Sub-200ms token generation leveraging Groq's Language Processing Unit (LPU) architecture",
      "LangChain sliding conversational memory preserving contextual coherence across multi-turn prompts",
      "MongoDB Atlas session persistence for historical transcript retrieval",
      "Non-blocking asynchronous FastAPI endpoints containerized and deployed on Render"
    ],
    architecture: "FastAPI asynchronous service interfacing with Groq API for token streaming, with LangChain managing memory buffers and MongoDB Atlas storing session states.",
    challenges: "Preventing token starvation and maintaining conversational coherence across long technical problem-solving sessions.",
    solution: "Implemented token-budgeted sliding window memory that summarizes earlier conversation turns while maintaining verbatim recent context for inference calls.",
    tradeoffs: "Prioritized Groq inference speed over larger parameter weight models to achieve real-time conversational responsiveness.",
    validation: "Deployed live on Render with active API testing and verifiable screenshot telemetry.",
    image: "/images/chatbot-preview.svg",
    github: "https://github.com/Miltonnare/Chatbot-",
    live: "https://chatbot-0jlz.onrender.com",
    category: "ai",
    featured: false
  },
  {
    id: "song-recommendation",
    title: "Spotify ML Recommendation Engine – TF-IDF & Cosine Similarity",
    badge: "Machine Learning • Python",
    description: "A content-based music recommendation engine using TF-IDF vectorization and cosine similarity scoring over high-dimensional audio metadata.",
    problemSolved: "Collaborative filtering recommendation systems fail for new tracks with zero listening history (the classic cold-start problem).",
    role: "Machine Learning Engineer",
    techStack: ["Python", "FastAPI", "Scikit-Learn", "Pandas", "NumPy"],
    keyFeatures: [
      "Content-based recommendation bypassing user rating dependencies",
      "TF-IDF feature extraction on textual and sonic track metadata",
      "Pairwise cosine similarity matrix ranking for instant nearest-neighbor retrieval",
      "FastAPI endpoint returning ranked recommendation lists with similarity confidence scores"
    ],
    architecture: "Pandas data preprocessing pipeline vectorizing metadata with Scikit-learn's TfidfVectorizer, serving inference results via FastAPI REST routes.",
    challenges: "Handling memory overhead when computing large pairwise cosine similarity matrices across thousands of tracks.",
    solution: "Implemented sparse matrix representation and top-K candidate pruning to reduce memory consumption while maintaining sub-50ms query responses.",
    tradeoffs: "Focused on pure content similarity rather than collaborative filtering to solve cold-start indexing for independent musicians.",
    validation: "Benchmarked against known genre clusters with verified similarity rankings and interactive documentation.",
    image: "/images/auth-api.png",
    github: "https://github.com/Miltonnare/SongReccoendation-TF-IDF",
    category: "ai",
    featured: false
  },
  {
    id: "aura-document-processor",
    title: "Aura Document Processor – Structured Layout Engine in Java",
    badge: "Systems & Compilers • Fuzz-Tested",
    description: "A robust layout engine and binary document processor in Java featuring custom XON configuration parsers, LZ77 and Run-Length compression codecs, DOM graph query evaluation, and ClusterFuzzLite fuzzing.",
    problemSolved: "Parsing complex user-uploaded document layouts often introduces memory corruption, denial-of-service loops, and unhandled edge cases in enterprise document workflows.",
    role: "Core Systems Developer",
    techStack: ["Java 17", "Gradle", "ClusterFuzzLite", "Jazzer", "AST Parsers", "Codecs"],
    keyFeatures: [
      "Custom XON configuration tokenizer and layout template compiler",
      "Integrated compression codecs (LZ77 and Run-Length Encoding)",
      "DOM query expression parser with cycle detection and topological sorting",
      "Jazzer fuzz targets integrated with ClusterFuzzLite for continuous vulnerability detection"
    ],
    architecture: "Modular library structure separating codecs, AST parsers, container readers, layout template compilers, and validation engines.",
    challenges: "Preventing infinite recursion and stack overflow errors when parsing cyclically referenced layout hierarchies.",
    solution: "Engineered topological sorting with cycle detection in the validation pipeline before layout graph compilation.",
    tradeoffs: "Built custom compact tokenizers rather than generic heavy parser generators to minimize runtime footprint and latency.",
    validation: "Verified with continuous fuzz testing via Jazzer and automated Gradle test suites.",
    image: "/images/task-manager.png",
    github: "https://github.com/Miltonnare/jvm_gradlib",
    category: "systems",
    featured: false
  }
];
