"use client";
import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<"bg" | "en">("bg");

  useEffect(() => {
    setMounted(true);
    // Check initial language from localStorage
    const savedLanguage = localStorage.getItem("language") as
      | "bg"
      | "en"
      | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Default to Bulgarian
      setLanguage("bg");
      localStorage.setItem("language", "bg");
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "bg" ? "en" : "bg";
    setLanguage(newLanguage);

    // Save preference
    localStorage.setItem("language", newLanguage);

    // Dispatch custom event for language change
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: newLanguage }),
    );
  };

  if (!mounted) return null;

  return (
    <Button
      onClick={toggleLanguage}
      className="relative bg-primary/5 hover:bg-primary/20 rounded-lg flex border border-primary-foreground size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md"
      title={language === "bg" ? "Switch to English" : "Превключи на български"}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs font-bold text-primary-content">
            {language.toUpperCase()}
          </span>
        </div>
      </div>
    </Button>
  );
}
