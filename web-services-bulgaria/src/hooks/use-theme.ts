"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check initial theme from localStorage or DOM
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDarkTheme = savedTheme === "dark";
      setTheme(isDarkTheme ? "dark" : "light");
    } else {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }

    // Listen for localStorage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        const isDarkTheme = e.newValue === "dark";
        setTheme(isDarkTheme ? "dark" : "light");
      }
    };

    // Create observer for DOM class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    window.addEventListener("storage", handleStorageChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  return { theme, mounted };
}
