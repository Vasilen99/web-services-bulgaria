"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/components/buttons/flip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/animate-ui/components/radix/dropdown-menu";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { LanguageToggle } from "@/components/language-toggle";
import { contactUsLinks, technologiesMainLink } from "@/utility/links";
import { GlassCardWrapper as GlassCard } from "@/components/glass-card-wrapper";
import Image from "next/image";
export const NAVIGATION_DATA = [
  // { name: "services", href: "#services" },
  // { name: "projects", href: "#work" },
  { name: "technologies", href: technologiesMainLink },
  { name: "contact", href: contactUsLinks },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations();

  return (
    <header className="absolute top-0 left-0 right-0 w-full px-6 lg:px-12 py-6 max-w-screen z-50">
      <GlassCard
        blur={1}
        distortion={0}
        borderSize={0}
        borderRadius={30}
        backgroundColor="var(--primary)"
        backgroundOpacity={0.20000000000000004}
        innerLightColor="var(--primary-foreground)"
        innerLightSpread={1}
        innerLightBlur={7}
        innerLightOpacity={0.4}
        outerLightColor="var(--primary)"
        outerLightSpread={0}
        outerLightBlur={15}
        outerLightOpacity={0.5}
        brightness={151}
        className="w-full!"
      >
        {/* Logo */}
        <div className="px-8 flex items-center justify-between gap-4 w-full">
          <div className="flex gap-3 items-center shrink-0 relative z-10">
            <Link className="" href={`/${locale}`}>
              <Image
                src="/logos/WS-logo-correct.png"
                alt="Web Services Bulgaria Logo"
                width={50}
                height={50}
                className="w-auto h-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 relative z-10">
            {NAVIGATION_DATA.map((item) => (
              <FlipButton variant="link" key={item.name}>
                <FlipButtonFront>
                  <Link
                    className="text-primary text-base"
                    href={`/${locale}${item.href}`}
                  >
                    {t(item.name)}
                  </Link>
                </FlipButtonFront>
                <FlipButtonBack>
                  <Link
                    className="text-primary text-base"
                    href={`/${locale}${item.href}`}
                  >
                    {t(item.name)}
                  </Link>
                </FlipButtonBack>
              </FlipButton>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="lg:flex hidden gap-3">
            <LanguageToggle />
            <ThemeTogglerButton
              variant="outline"
              size="icon"
              className="bg-primary-foreground/5 hover:bg-primary-foreground/20 rounded-lg border border-primary size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md"
              title="Toggle theme"
            />
            {/* <FlipButton className="hidden lg:flex rounded-md border border-white/40 text-sm bg-primary-foreground transition-all">
                <FlipButtonFront className="bg-transparent text-primary hover:bg-transparent cursor-pointer">
                  {t("letsStart")}
                </FlipButtonFront>
                <FlipButtonBack className="bg-transparent text-primary hover:bg-transparent cursor-pointer">
                  {t("letsStart")}
                </FlipButtonBack>
              </FlipButton> */}
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button className="bg-white/10 hover:bg-white/20 rounded-lg lg:hidden flex border border-white/30 size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md">
                  <div
                    className="absolute transition-opacity duration-300"
                    style={{ opacity: !isMenuOpen ? 1 : 0 }}
                  >
                    <AlignJustify className="size-5 text-primary-foreground" />
                  </div>
                  <div
                    className="absolute transition-opacity duration-300"
                    style={{ opacity: isMenuOpen ? 1 : 0 }}
                  >
                    <X className="size-5 text-primary-foreground" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 backdrop-blur-3xl bg-white/10 border border-white/30 rounded-2xl mt-3 shadow-2xl shadow-black/40">
                {NAVIGATION_DATA.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    className="text-primary-content/80 hover:text-primary-content focus:bg-white/10 transition-colors"
                    onClick={() => (window.location.href = item.href)}
                  >
                    <span>{t(item.name)}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <ThemeTogglerButton
                    variant="outline"
                    size="sm"
                    className="w-full"
                    modes={["light", "dark"]}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LanguageToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </GlassCard>
    </header>
  );
}
