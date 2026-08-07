"use client";
import Link from "next/link";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/components/buttons/flip";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { FacebookIcon } from "@/components/icons/facebook";
import { LinkedinIcon } from "@/components/icons/linkedin";
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
      {/* CTA Band */}
      <div className="border-t border-primary-foreground px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-primary-content/40 text-xs uppercase tracking-[0.2em] font-medium mb-4">
                Нека говорим
              </p>
              <p className="text-primary-content/60 text-base max-w-xs leading-relaxed">
                Нека направим вашия уебсайт да блести.
              </p>
            </div>
            <FlipButton className="rounded-full border border-primary-content/20 px-8 py-3 self-start lg:self-auto shrink-0">
              <FlipButtonFront className="bg-transparent text-primary-content font-semibold text-sm tracking-widest uppercase hover:bg-transparent">
                Свържете се с нас
              </FlipButtonFront>
              <FlipButtonBack className="bg-transparent text-primary-content font-semibold text-sm tracking-widest uppercase hover:bg-transparent">
                Свържете се с нас
              </FlipButtonBack>
            </FlipButton>
          </div>
        </div>
      </div>

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
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary-foreground text-xs uppercase tracking-widest hover:text-primary-foreground/80 cursor-pointer transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <p className="text-xs">Към началото</p>
          </Button>
        </div>
      </div>
    </footer>
  );
}
