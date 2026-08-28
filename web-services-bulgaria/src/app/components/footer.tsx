"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Phone } from "lucide-react";
import { NAVIGATION_DATA } from "./header";
import { LinkedinIcon } from "@/utility/icons";
import dynamic from "next/dynamic";
import { useTheme } from "@/hooks/use-theme";

const LogoFooterBlack = dynamic(
  () => import("@/utility/icons").then((mod) => mod.WebServicesLogoFooterBlack),
  { ssr: false },
);

const LogoFooterWhite = dynamic(
  () => import("@/utility/icons").then((mod) => mod.WebServicesLogoFooterWhite),
  { ssr: false },
);
const SOCIAL_LINKS = [
  {
    icon: <Mail />,
    href: "mailto:info@webservicesbg.com",
    name: "info@webservicesbg.com",
  },
  {
    icon: <Phone />,
    href: "tel:+359892203616",
    name: "+359 89 220 3616",
  },
  {
    icon: <LinkedinIcon size={24} />,
    href: "https://www.linkedin.com/in/vasilen-minkov-9117011b0/",
    name: "LinkedIn",
  },
];

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const { theme } = useTheme();

  return (
    <footer id="contact" className="bg-foreground">
      {/* Footer Nav + Socials */}
      <div className="border-t border-primary px-6 lg:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12 gap-6">
          {/* Brand */}
          <div className="relative flex flex-col lg:justify-start justify-center lg:bottom-12 bottom-6">
            {theme === "dark" ? <LogoFooterWhite /> : <LogoFooterBlack />}
            <p className="text-primary-foreground text-base relative lg:bottom-5">
              {t("footerDescription")}
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-primary-foreground text-xs uppercase tracking-widest font-medium mb-4">
              {t("pages")}
            </p>
            <ul className="space-y-2">
              {NAVIGATION_DATA.map((link) => (
                <li key={link.name}>
                  <Link
                    type="email"
                    href={`/${locale}${link.href}`}
                    className="text-primary-foreground text-sm hover:text-primary-foreground/70 transition-colors"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-primary-foreground text-xs uppercase tracking-widest font-medium mb-4">
              {t("contact")}
            </p>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground text-sm hover:text-primary-foreground/70 transition-colors flex items-center gap-2"
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
      <div className="max-w-7xl flex justify-center mx-auto lg:pt-12 pt-6 pb-6">
        <p className="text-primary-foreground text-xs">
          © {new Date().getFullYear()} Web Services Bulgaria.{" "}
          {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}
