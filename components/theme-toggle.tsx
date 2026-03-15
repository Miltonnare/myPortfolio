"use client";

import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/cn";

type Theme = "dark" | "light";

interface ThemeToggleProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-foreground-muted shadow-subtle",
        "hover:text-foreground hover:-translate-y-0.5 transition"
      )}
    >
      <span className="text-xs">{isDark ? "●" : "○"}</span>
      <span className="hidden sm:inline">
        {isDark ? "Dark workspace" : "Light workspace"}
      </span>
    </button>
  );
}

