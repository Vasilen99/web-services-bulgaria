"use client";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { useParams, usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) || "bg";
  
  const language = (currentLocale as "bg" | "en") || "bg";

  const toggleLanguage = () => {
    const newLanguage = language === "bg" ? "en" : "bg";

    // Replace the current locale in the pathname with the new one
    const newPathname = pathname.replace(
      `/${currentLocale}`,
      `/${newLanguage}`,
    );

    // Navigate to the new locale
    router.push(newPathname || `/${newLanguage}`);
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="relative bg-primary-foreground/5 hover:bg-primary-foreground/20 rounded-lg flex border border-primary size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md"
      title={language === "bg" ? "Switch to English" : "Превключи на български"}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs font-bold text-primary">
            {language.toUpperCase()}
          </span>
        </div>
      </div>
    </Button>
  );
}
