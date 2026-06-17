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
}

export const projects: Project[] = [
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
    featured: true
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
    category: "fullstack",
    featured: true
  },
  {
    id: "resumatch-ai",
    title: "ResuMatch AI – Cognitive Parser & Recruiter Tool",
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
    featured: true
  },
  {
    id: "bookstore-api",
    title: "Bookstore REST API",
    description: "A RESTful API for managing books, authors, and inventory with advanced MongoDB queries, indexing, aggregation pipelines, pagination, and filtering.",
    problemSolved: "E-commerce apps require fast inventory searches, paginated listings, and relational aggregation without massive DB overhead.",
    role: "Backend Developer",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    keyFeatures: [
      "Advanced multi-stage aggregation pipelines for analytics",
      "Full-text search indexing on book metadata",
      "Limit-offset pagination with custom pagination cursors"
    ],
    challenges: "Query speeds slowed significantly when joining book reviews with author profiles for large inventory collections.",
    solution: "Designed compound index schemas on matching query filters and pre-aggregated average reviews inside documents, eliminating the need for expensive MongoDB lookups.",
    image: "/images/bookstore-api.png",
    github: "https://github.com/Miltonnare/Bookstore-API",
    category: "api"
  },
  {
    id: "auth-api",
    title: "Enterprise Authentication API",
    description: "Secure authentication system using JWT and bcrypt with protected routes, user login, registration, and profile endpoints.",
    problemSolved: "Security breaches and session hijacking in full-stack applications due to plain-text credentials and loose token management.",
    role: "Security Developer",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    keyFeatures: [
      "Password hashing using salt rounds (bcrypt)",
      "HTTP-only cookie cookie session stores",
      "IP-rate limiting on login attempts to block brute-force attacks"
    ],
    challenges: "JWT tokens stored in local storage are vulnerable to XSS attacks, exposing user credentials.",
    solution: "Migrated token delivery to HTTP-only, secure cookies with SameSite lax constraints, completely neutralizing local storage access vectors.",
    image: "/images/registra.png",
    github: "https://github.com/Miltonnare/Auth-API",
    category: "api"
  },
  {
    id: "task-manager-react",
    title: "Task Manager (React + Tailwind)",
    description: "Modern task management app with dark/light theme switching, reusable components, local storage persistence, and responsive design.",
    problemSolved: "Users need lightweight, instant productivity trackers that load without network latency and function offline.",
    role: "Frontend Developer",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Local Storage"],
    keyFeatures: [
      "Real-time dashboard statistics and completion gauges",
      "Local storage state synchronization",
      "Flexible task categorization and deadline alarms"
    ],
    challenges: "State updates were causing parent component re-renders, causing visual lag on low-end mobile viewports.",
    solution: "Refactored the application state to use localized React Context, wrapping list items in React.memo to minimize unnecessary re-renders.",
    image: "/images/task-manager.png",
    github: "https://github.com/Miltonnare/TaskManager",
    live: "#",
    category: "frontend"
  },
  {
    id: "blog-app",
    title: "Dynamic Blog with API Sync",
    description: "A blog platform that dynamically loads posts from RESTful APIs with debounced search, category filtering, and responsive UI components.",
    problemSolved: "Slow page loads and layout shifts when loading large, image-heavy blog feeds dynamically.",
    role: "Frontend Developer",
    techStack: ["JavaScript", "HTML", "CSS", "REST API"],
    keyFeatures: [
      "Debounced search inputs to prevent API throttling",
      "Skeleton loader screens to prevent content layouts shifts",
      "Responsive CSS grids with adaptive column layouts"
    ],
    challenges: "Typing in the search input triggered API requests on every keystroke, resulting in rate-limiting blocks.",
    solution: "Wrote a custom debouncing utility in vanilla JS that delays network requests until the user stops typing for 300 milliseconds.",
    image: "/images/blog.png",
    github: "https://github.com/Miltonnare/Blog-App",
    live: "#",
    category: "frontend"
  },
  {
    id: "typing-speed",
    title: "Real-time Typing Speed Tester",
    description: "Interactive typing speed tester with real-time WPM calculation, accuracy tracking, and dynamic text generation.",
    problemSolved: "Accurately calculating typing speed while accounting for backspaces, typos, and pacing in a browser environment.",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Dynamic character highlights indicating correct/wrong keys",
      "WPM (Words Per Minute) calculation updating per second",
      "Error percentage tracking and final session analytics"
    ],
    challenges: "Tracking cursor positioning and formatting colors dynamically on massive text fields caused DOM redraw spikes.",
    solution: "Used a virtual hidden textarea to capture raw keyboard inputs, updating standard HTML span tags for color classes on the fly.",
    image: "/images/typing.png",
    github: "https://github.com/Miltonnare/TypingSpeed",
    live: "#",
    category: "frontend"
  }
];