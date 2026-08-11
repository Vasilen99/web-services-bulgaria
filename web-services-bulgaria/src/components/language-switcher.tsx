"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/en") ? "en" : "bg";

  const nextLocale: Locale = currentLocale === "bg" ? "en" : "bg";

  // Replace the current locale with the next locale in the pathname
  const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);

  return (
    <Link
      href={newPath}
      className="text-sm font-medium hover:opacity-75 transition-opacity"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
