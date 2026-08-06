"use client";
import Link from "next/link";
import Image from "next/image";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const NAVIGATION_DATA = [
  { name: "services", href: "#services" },
  { name: "projects", href: "#work" },
  { name: "about", href: "#about" },
  { name: "contact", href: "#contact" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full h-auto max-h-700 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image-hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-primary-foreground via-primary-foreground/50 to-primary-foreground/20" />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col">
        {/* Navigation */}
        <header className="w-full px-6 lg:px-12 pt-6">
          <div className="backdrop-blur-xs bg-primary-foreground/5 border border-primary-foreground/15 rounded-2xl px-8 py-4 flex items-center justify-between gap-4 w-full shadow-2xl shadow-black/20 before:absolute before:inset-0 before:bg-linear-to-b before:from-white/1 before:to-transparent before:pointer-events-none before:rounded-2xl">
            {/* Logo */}
            <div className="flex gap-3 items-center shrink-0 relative z-10">
              <p className="font-semibold text-primary-content text-base tracking-tight">
                Web Services Bulgaria
              </p>
              <Badge className="border-success bg-success/20 text-xs text-success-content rounded-md px-2 py-0.5 font-medium">
                {t(translations.online)}
              </Badge>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2 relative z-10">
              {NAVIGATION_DATA.map((item) => (
                <FlipButton variant="link" key={item.name}>
                  <FlipButtonFront>
                    <Link
                      className="text-primary text-sm transition-colors"
                      href={item.href}
                    >
                      {t(translations[item.name])}
                    </Link>
                  </FlipButtonFront>
                  <FlipButtonBack>
                    <Link className="text-primary text-sm" href={item.href}>
                      {t(translations[item.name])}
                    </Link>
                  </FlipButtonBack>
                </FlipButton>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3 relative">
              <LanguageToggle />
              <ThemeToggle />
              <FlipButton className="hidden lg:flex rounded-md border border-white/40 text-sm bg-white/10 transition-all">
                <FlipButtonFront className="backdrop-blur-xl bg-transparent text-primary-content hover:bg-transparent cursor-pointer">
                  {t(translations.letsStart)}
                </FlipButtonFront>
                <FlipButtonBack className="backdrop-blur-xl bg-transparent text-primary-content hover:bg-transparent cursor-pointer">
                  {t(translations.letsStart)}
                </FlipButtonBack>
              </FlipButton>

              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-white/10 hover:bg-white/20 rounded-lg lg:hidden flex border border-white/30 size-10 p-0 overflow-hidden transition-all duration-300 backdrop-blur-md">
                    <div
                      className="absolute transition-opacity duration-300"
                      style={{ opacity: !isMenuOpen ? 1 : 0 }}
                    >
                      <AlignJustify className="size-5 text-primary-content" />
                    </div>
                    <div
                      className="absolute transition-opacity duration-300"
                      style={{ opacity: isMenuOpen ? 1 : 0 }}
                    >
                      <X className="size-5 text-primary-content" />
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
                      <span>{t(translations[item.name])}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="flex lg:flex-row flex-col w-full items-center lg:justify-around justify-center">
          <div className="flex flex-col-reverse w-full lg:w-fit lg:my-auto lg:mx-0 mx-auto my-0 items-center lg:items-start gap-3">
            {/* Hero Content */}
            <div className="flex flex-col w-full lg:w-[55%] lg:items-center items-center">
              {/* Top: Availability + CTA */}
              <div className="flex items-center gap-4 lg:justify-start justify-center w-full">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-content animate-pulse" />
                  <span className="text-xs text-primary-content/60 uppercase tracking-widest font-medium">
                    {t(translations.available)}
                  </span>
                </div>
                <FlipButton className="rounded-full border border-primary text-xs px-4 py-1.5 h-auto">
                  <FlipButtonFront className="bg-transparent text-primary text-xs">
                    {t(translations.letsTalk)}
                  </FlipButtonFront>
                  <FlipButtonBack className="bg-transparent! text-primary text-xs">
                    {t(translations.letsTalk)}
                  </FlipButtonBack>
                </FlipButton>
              </div>

              {/* Bottom: Tagline + Description */}
              <div className="space-y-2 mt-3 w-full flex flex-col lg:items-start items-center lg:text-start text-center">
                <p className="text-primary text-sm font-medium">
                  {t(translations.webDesignDev)}
                </p>
                <p className="text-primary text-base max-w-sm leading-relaxed">
                  {t(translations.heroDescription)}
                </p>
              </div>
            </div>

            {/* Big Headline — centered over bottom */}
            <div className="h-fit flex flex-col gap-3 justify-center lg:justify-start lg:items-start items-center w-full lg:mt-0 mt-6">
              <h1 className="text-primary lg:text-start text-center max-w-3xl">
                {t(translations.heroHeadline)}
              </h1>
              <FlipButton variant="link">
                <FlipButtonFront>
                  <Link
                    className="text-primary text-sm transition-colors"
                    href="/"
                  >
                    {t(translations.about)}
                  </Link>
                </FlipButtonFront>
                <FlipButtonBack>
                  <Link className="text-primary text-sm" href="/">
                    {t(translations.about)}
                  </Link>
                </FlipButtonBack>
              </FlipButton>
            </div>
          </div>
          <div className="relative top-29">
            <DotLottieReact
              src="/animations/hero-section.json"
              loop
              speed={0.5}
              autoplay
              style={{
                width: "500px",
                height: "500px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
