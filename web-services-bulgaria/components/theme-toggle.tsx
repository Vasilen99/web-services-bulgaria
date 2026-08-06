"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDarkTheme = savedTheme === "dark";
      setIsDark(isDarkTheme);
      document.documentElement.classList.toggle("dark", isDarkTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    // Save preference
    localStorage.setItem("theme", newIsDark ? "dark" : "light");

    // Apply theme
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  if (!mounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      className="relative bg-primary/5 hover:bg-primary/20 rounded-lg flex border border-primary-foreground size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md"
      title={isDark ? "Switch to dark mode" : "Switch to light mode"}
    >
      <div
        className="absolute transition-opacity duration-300"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        <Moon className="size-5 text-primary-foreground" />
      </div>
      <div
        className="absolute transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 1 }}
      >
        <Sun className="size-5 text-primary" />
      </div>
    </Button>
  );
}
