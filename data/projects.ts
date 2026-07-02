export type ProjectCategory = "frontend" | "fullstack" | "api" | "experiment";

export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string;
  solution: string;
  image: string;
  github: string;
  live?: string;
  category: ProjectCategory;
  featured?: boolean;
  flagship?: boolean;
  metrics?: {
    stars: number;
    forks: number;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: "notes-ai-integrated",
    title: "NotesAI Integrated – Enterprise Document Intelligence & RAG Engine",
    description: "AI-powered study workspace using Retrieval-Augmented Generation (RAG) to transcribe audio lectures, index PDF corpora, and conduct context-aware semantic chat.",
    problemSolved: "Students and professionals face cognitive overload when parsing hour-long video lectures and massive PDF textbooks, losing hours extracting key technical details.",
    role: "Lead AI Systems Architect",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "OpenAI API", "Pinecone", "LangChain", "Tailwind CSS"],
    keyFeatures: [
      "Whisper AI asynchronous audio transcription pipelines",
      "RAG-powered semantic chatbot referencing local document context",
      "Automated markdown notes and interactive flashcard generation",
      "Local vector caching for high-speed offline query matching"
    ],
    challenges: "Processing large technical files (100MB+ PDFs) and complex audio transcriptions within standard serverless API execution timeout limits.",
    solution: "Designed an asynchronous task broker using Celery, Redis, and WebSockets. Moved CPU-heavy text chunking and vector embedding pipelines to background workers, streaming live compilation progress back to client frontends.",
    image: "/images/registra.png",
    github: "https://github.com/Miltonnare/NotesAIIntegrated",
    live: "#",
    category: "api",
    featured: true,
    flagship: true,
    metrics: { stars: 12, forks: 4, status: "Active" }
  },
  {
    id: "kajulu-tours",
    title: "Kajulu Tours – Dynamic Travel Booking Platform",
    description: "A high-performance tours and travel booking platform featuring real-time availability scheduling, geolocation mapping, and integrated secure payments.",
    problemSolved: "Tour operators suffer from booking collisions, calendar sync discrepancies, and high transaction failure rates during peak travel seasons.",
    role: "Lead Full-Stack Developer",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Mapbox API", "Stripe"],
    keyFeatures: [
      "Interactive booking calendar with visual inventory locks",
      "Mapbox API geolocation mapping for guides and routes",
      "Stripe payment gateway integration supporting card transactions",
      "Automated booking invoice receipt and email scheduler"
    ],
    challenges: "Preventing race conditions where multiple tourists attempt to book the final guide slot at the exact same millisecond.",
    solution: "Developed optimistic locking controls via Mongoose version keys combined with a Redis-backed pre-check transaction lock, ensuring zero double-bookings and improving check-out response times by 35%.",
    image: "/images/coffee.png",
    github: "https://github.com/Miltonnare/Kajulu-Tours",
    live: "#",
    category: "fullstack",
    featured: true,
    metrics: { stars: 8, forks: 2, status: "Completed" }
  },
  {
    id: "resumatch-ai",
    title: "ResuMatch AI – Cognitive PDF Resume Scorer",
    description: "An intelligent applicant parser that extracts skills, experience, and education from PDF resumes using NLP and scores them against job requirements.",
    problemSolved: "Recruiters spend hours manually scanning resumes, often missing high-quality candidates due to non-standard layouts or inconsistent formatting.",
    role: "AI & Full-Stack Developer",
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "SpaCy", "MongoDB"],
    keyFeatures: [
      "NLP parsing engine utilizing custom NER entities",
      "Semantic matching scores via TF-IDF vector similarity metrics",
      "Intelligent skill taxonomy auto-mapping",
      "Recruiter analytics dashboard with interactive data plots"
    ],
    challenges: "Unstructured, multi-column PDF layouts resulted in loss of text reading order, making basic regex-based parser pipelines extremely inaccurate.",
    solution: "Developed visual block parsing using pdfplumber, combined with a custom-trained SpaCy NER model that isolates resume sections (experience, education, skills) before scoring similarity.",
    image: "/images/auth-api.png",
    github: "https://github.com/Miltonnare/ResuMatch-AI",
    live: "#",
    category: "api",
    featured: true,
    metrics: { stars: 15, forks: 3, status: "Completed" }
  },
  {
    id: "event-management-system",
    title: "Distributed Event Orchestration Platform",
    description: "A high-performance event platform that handles registration, capacity scheduling, and real-time coordinator dashboards.",
    problemSolved: "Event organizers face coordination bottlenecks, scheduling collisions, and server resource lock issues when hundreds of users register simultaneously.",
    role: "Backend Architect",
    techStack: ["Node.js", "Express.js", "MongoDB", "REST API", "Mongoose"],
    keyFeatures: [
      "Optimistic concurrency control for seat reservation",
      "Custom MongoDB indexing schema optimizing search queries",
      "Real-time registration capacity counters and alerts",
      "Automated PDF ticket receipt generator"
    ],
    challenges: "Handling database performance degradation and avoiding ticket double-selling during heavy concurrent registration spikes.",
    solution: "Utilized MongoDB transactions combined with optimistic concurrency controls (version flags) and index optimizations, successfully reducing API query response latency by 45%.",
    image: "/images/event-system.png",
    github: "https://github.com/Miltonnare/Event-Management-System",
    live: "#",
    category: "api",
    featured: true,
    metrics: { stars: 10, forks: 1, status: "Completed" }
  },
  {
    id: "jobs-parlour",
    title: "Jobs Parlour – Premium MERN Job Portal",
    description: "Enterprise-grade recruiting engine providing role-based dashboard matching, secure candidate tracking, and real-time job posting utilities.",
    problemSolved: "Recruiters and job seekers struggle with slow communication, unstructured applicant tracking systems (ATS), and insecure credential handling.",
    role: "Lead Full-Stack Developer",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    keyFeatures: [
      "Role-based authentication & secure session routing",
      "Interactive applicant management pipeline (Pending, Shortlisted, Rejected)",
      "Instant debounced search & tag-based filters for jobs",
      "Dynamic dashboard analytics for posting engagement"
    ],
    challenges: "Ensuring secure role-based dashboard access and preventing unauthorized read/write access to sensitive candidate resumes and employer analytics.",
    solution: "Implemented JWT tokens stored in HTTP-only, secure cookies combined with robust middleware-level routing authorization in Express. Added React Router guard components on the client-side to handle automatic redirection.",
    image: "/images/jobs-parlour.png",
    github: "https://github.com/Miltonnare/Jobs-Parlour",
    live: "#",
    category: "fullstack",
    featured: true,
    metrics: { stars: 14, forks: 5, status: "Completed" }
  }
];