"use client";
import Link from "next/link";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/components/buttons/flip";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ArrowUp } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/utility/icons";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
const NAV_LINKS = [
  { name: "Начало", href: "#hero" },
  { name: "Услуги", href: "#services" },
  { name: "Проекти", href: "#work" },
  { name: "Процес", href: "#process" },
  { name: "За нас", href: "#about" },
  { name: "Контакти", href: "#contact" },
];

const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "#", icon: <InstagramIcon /> },
  { name: "FACEBOOK", href: "#", icon: <FacebookIcon /> },
  { name: "LINKEDIN", href: "#", icon: <LinkedinIcon /> },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-background">
      {/* Big Headline */}
      <div className="border-t border-primary-foreground px-6 lg:px-12 py-20 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-8xl font-bold text-primary leading-tight">
            Уебсайт, който оставя трайно впечатление!
          </h2>
        </div>
      </div>

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
              Социални мрежи
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
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary text-xs">
            © {new Date().getFullYear()} Web Services Bulgaria.{" "}
            {t(translations.allRightsReserved)}
          </p>
          <LiquidButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary text-xs uppercase cursor-pointer transition-colors bg-primary-foreground"
          >
            <ArrowUp className="w-4 h-4" />
            <p className="text-xs">Към началото</p>
          </LiquidButton>
        </div>
      </div>
    </footer>
  );
}
