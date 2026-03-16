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
    id: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "A lightweight BMI calculator that helps users quickly determine their body mass index with instant feedback.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/bmi-calc.png",
    github: "https://github.com/Miltonnare/BMI-Calculator.git",
    live: "#",
    category: "frontend"
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    description:
      "Interactive quiz experience with multiple-choice questions, scoring, and progress visualization.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/quizjs.png",
    github: "https://github.com/Miltonnare/QuizApp.git",
    live: "#",
    category: "frontend"
  },
  {
    id: "calendar-app",
    title: "Calendar Application",
    description:
      "A functional calendar application to explore dates and basic scheduling interactions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/calender.png",
    github: "https://github.com/Miltonnare/calender.git",
    live: "#",
    category: "frontend"
  },
  {
    id: "car-auctioner",
    title: "Car Auctioner Landing Page",
    description:
      "Landing page concept for a car auction platform with emphasis on clear hierarchy and CTA design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/car-auctioner.png",
    github: "https://github.com/Miltonnare/carAuctioner.git",
    live: "#",
    category: "frontend"
  },
  {
    id: "typing-speed",
    title: "Typing Speed Tester",
    description:
      "Typing speed tester with multiple difficulty levels and real-time WPM tracking.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/typing.png",
    github: "https://github.com/Miltonnare/TypingSpeed.git",
    live: "#",
    category: "frontend"
  },
  {
    id: "coffee-landing",
    title: "Coffee Landing Page",
    description:
      "Aesthetic landing page for a coffee brand showcasing visual hierarchy and typography.",
    techStack: ["HTML", "CSS"],
    image: "/images/coffee.png",
    github: "https://github.com/Miltonnare/Coffe-Landing-Page.git",
    live: "#",
    category: "frontend"
  },
  {
    id: "quote-generator",
    title: "Quote Generator App",
    description: "Random quote generator that surfaces a new quote on each interaction.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/quote.png",
    github: "https://github.com/Miltonnare/QuoteGenerator.git",
    live: "#",
    category: "experiment"
  },
  {
    id: "registration-localstorage",
    title: "Input Registration",
    description: "Registration form that persists user input using browser local storage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/registra.png",
    github: "https://github.com/Miltonnare/Registration.git",
    live: "#",
    category: "experiment"
  },
  {
    id: "survey-form",
    title: "Survey Form",
    description:
      "Accessible survey form implementing core input components and validation patterns.",
    techStack: ["HTML", "CSS"],
    image: "/images/survey.png",
    github: "https://github.com/Miltonnare/Simple-Survey-Form.git",
    live: "#",
    category: "frontend"
  }
];

