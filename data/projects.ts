export type ProjectCategory = "frontend" | "fullstack" | "api" | "experiment";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  live?: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: "jobs-parlour",
    title: "Jobs Parlour – Job Portal Platform",
    description:
      "A full-stack job portal built with the MERN stack where employers can post jobs and job seekers can apply. Features authentication, role-based dashboards, protected routes, job search, and applicant management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    image: "/images/jobs-parlour.png",
    github: "https://github.com/Miltonnare/Jobs-Parlour",
    live: "#",
    category: "fullstack"
  },

  {
    id: "event-management-system",
    title: "Event Management System",
    description:
      "A full-stack event platform that allows users to register, browse events, and interact with organizers. Built with Node.js and MongoDB with secure backend APIs and scalable architecture.",
    techStack: ["Node.js", "Express", "MongoDB", "REST API"],
    image: "/images/event-system.png",
    github: "https://github.com/Miltonnare/Event-Management-System",
    live: "#",
    category: "fullstack"
  },

  {
    id: "bookstore-api",
    title: "Bookstore REST API",
    description:
      "A RESTful API for managing books, authors, and inventory with advanced MongoDB queries, indexing, aggregation pipelines, pagination, and filtering.",
    techStack: ["Node.js", "Express", "MongoDB"],
    image: "/images/bookstore-api.png",
    github: "https://github.com/Miltonnare/Bookstore-API",
    category: "api"
  },

  {
    id: "auth-api",
    title: "User Authentication API",
    description:
      "Secure authentication system using JWT and bcrypt with protected routes, user login, registration, and profile endpoints.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    image: "/images/auth-api.png",
    github: "https://github.com/Miltonnare/Auth-API",
    category: "api"
  },

  {
    id: "task-manager-react",
    title: "Task Manager (React + Tailwind)",
    description:
      "Modern task management app with dark/light theme switching, reusable components, local storage persistence, and responsive design using React and Tailwind CSS.",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    image: "/images/task-manager.png",
    github: "https://github.com/Miltonnare/TaskManager",
    live: "#",
    category: "frontend"
  },

  {
    id: "blog-app",
    title: "Blog App with API Integration",
    description:
      "A blog platform that dynamically loads posts from APIs with search, filtering, and responsive UI components.",
    techStack: ["JavaScript", "HTML", "CSS", "REST API"],
    image: "/images/blog.png",
    github: "https://github.com/Miltonnare/Blog-App",
    live: "#",
    category: "frontend"
  },

  {
    id: "typing-speed",
    title: "Typing Speed Tester",
    description:
      "Interactive typing speed tester with real-time WPM calculation, accuracy tracking, and dynamic text generation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/typing.png",
    github: "https://github.com/Miltonnare/TypingSpeed",
    live: "#",
    category: "frontend"
  },

  {
    id: "quiz-app",
    title: "Quiz Application",
    description:
      "Interactive quiz app with multiple question sets, score tracking, and dynamic UI feedback.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/quizjs.png",
    github: "https://github.com/Miltonnare/QuizApp",
    live: "#",
    category: "frontend"
  },

  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "A simple health calculator that determines Body Mass Index and provides instant feedback based on results.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/bmi-calc.png",
    github: "https://github.com/Miltonnare/BMI-Calculator",
    live: "#",
    category: "experiment"
  },

  {
    id: "quote-generator",
    title: "Random Quote Generator",
    description:
      "A lightweight application that generates random inspirational quotes using JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/quote.png",
    github: "https://github.com/Miltonnare/QuoteGenerator",
    live: "#",
    category: "experiment"
  }
];