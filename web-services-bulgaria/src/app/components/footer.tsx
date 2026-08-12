"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Mail } from "lucide-react";
const NAV_LINKS = [
  { name: "Начало", href: "#hero" },
  { name: "Услуги", href: "#services" },
  { name: "Проекти", href: "#work" },
  { name: "Процес", href: "#process" },
  { name: "За нас", href: "#about" },
  { name: "Контакти", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    icon: <Mail />,
    href: "mailto:info@webservicesbg.com",
    name: "info@webservicesbg.com",
  },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-background">
      {/* Footer Nav + Socials */}
      <div className="border-t border-primary px-6 lg:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Brand */}
          <div>
            <p className="text-primary-content font-semibold text-lg tracking-tight mb-2">
              Web Services Bulgaria
            </p>
            <p className="text-primary-content/40 text-sm">
              Премиум уеб услуги за вашия бизнес.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-primary-content/40 text-xs uppercase tracking-widest font-medium mb-4">
              Страници
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    type="email"
                    href={link.href}
                    className="text-primary text-sm hover:text-primary-content transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-primary-content/40 text-xs uppercase tracking-widest font-medium mb-4">
              Контакти
            </p>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary text-sm hover:text-primary-content transition-colors flex items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground bg-primary-foreground px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="text-primary text-xs">
            © {new Date().getFullYear()} Web Services Bulgaria.{" "}
            {t(translations.allRightsReserved)}
          </p>
        </div>
      </div>
    </footer>
  );
}
