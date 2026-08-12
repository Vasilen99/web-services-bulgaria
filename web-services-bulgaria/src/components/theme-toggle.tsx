"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDarkTheme = savedTheme === "dark";
      document.documentElement.classList.toggle("dark", isDarkTheme);
      return isDarkTheme;
    }
    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    return prefersDark;
  });

  useEffect(() => {
    // Listen for storage changes from other tabs/windows
    const handleStorageChange = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        const isDarkTheme = savedTheme === "dark";
        setIsDark(isDarkTheme);
        document.documentElement.classList.toggle("dark", isDarkTheme);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    // Save preference
    localStorage.setItem("theme", newIsDark ? "dark" : "light");

    // Apply theme
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <Button
      onClick={toggleTheme}
      className="relative bg-primary-foreground/5 hover:bg-primary-foreground/20 rounded-lg flex border border-primary size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md"
      title={isDark ? "Switch to dark mode" : "Switch to light mode"}
    >
      <div
        className="absolute transition-opacity duration-300"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        <Moon className="size-5 text-primary" />
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
