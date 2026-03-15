import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        background: {
          DEFAULT: "#020817",
          light: "#f9fafb"
        },
        foreground: {
          DEFAULT: "#e5e7eb",
          muted: "#9ca3af"
        },
        primary: {
          DEFAULT: "#22c55e",
          soft: "rgba(34, 197, 94, 0.1)"
        },
        accent: {
          purple: "#6366f1",
          cyan: "#22d3ee"
        },
        card: {
          DEFAULT: "rgba(15,23,42,0.9)",
          light: "#ffffff"
        },
        border: {
          subtle: "rgba(148,163,184,0.25)"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.65)",
        subtle: "0 10px 30px rgba(15,23,42,0.45)"
      },
      backgroundImage: {
        "radial-soft":
          "radial-gradient(circle at top, rgba(34,197,94,0.15), transparent 60%)",
        "mesh-gradient":
          "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at 100% 0%, rgba(94,92,255,0.25), transparent 55%), radial-gradient(circle at 0% 100%, rgba(236,72,153,0.18), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;

