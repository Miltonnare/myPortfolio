"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="glass flex items-center justify-center rounded-xl p-2.5 text-foreground-muted hover:text-foreground transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] cursor-pointer"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-500 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-500 transition-transform duration-500 hover:-rotate-12" />
      )}
    </button>
  );
}
