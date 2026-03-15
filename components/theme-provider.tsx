"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

type Theme = "dark" | "light";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (window.localStorage.getItem("portfolio-theme") as Theme | null)) ||
      null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="relative">
      <div className="fixed right-6 top-5 z-40">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      {children}
    </div>
  );
}

