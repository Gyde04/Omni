"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial: Theme =
      stored === "light" || stored === "dark"
        ? (stored as Theme)
        : prefersDark
        ? "dark"
        : "light";

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card-soft)] p-1 transition hover:border-[var(--muted-2)]"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="relative h-3.5 w-7 rounded-full border border-[var(--border)] bg-[var(--page-bg)] transition">
        <span
          className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-sm transition ${
            isDark ? "left-0.5" : "left-3.5"
          }`}
        />
      </span>
    </button>
  );
}
