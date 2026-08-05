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

const NAVIGATION_DATA = [
  { name: "Услуги", href: "#services" },
  { name: "Проекти", href: "#work" },
  { name: "За нас", href: "#about" },
  { name: "Контакти", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full h-175 max-h-175 overflow-hidden"
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
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/50 to-primary/20" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navigation */}
        <header className="w-full px-6 lg:px-12 pt-6">
          <div className="backdrop-blur-3xl bg-white/1 border border-white/20 rounded-2xl px-8 py-4 flex items-center justify-between gap-4 w-full shadow-2xl shadow-black/30 before:absolute before:inset-0 before:bg-linear-to-b before:from-white/5 before:to-white/0 before:pointer-events-none before:rounded-2xl">
            {/* Logo */}
            <div className="flex gap-3 items-center shrink-0 relative z-10">
              <p className="font-semibold lg:text-xl text-primary-content text-base tracking-tight">
                Web Services Bulgaria
              </p>
              <Badge className="border-green-400/50 bg-green-400/20 text-xs text-green-300 rounded-md px-2 py-0.5 font-medium">
                Онлайн
              </Badge>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2 relative z-10">
              {NAVIGATION_DATA.map((item) => (
                <FlipButton variant="link" key={item.name}>
                  <FlipButtonFront>
                    <Link
                      className="text-primary-content/60 hover:text-primary-content/90 text-sm transition-colors"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </FlipButtonFront>
                  <FlipButtonBack>
                    <Link
                      className="text-primary-content text-sm"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </FlipButtonBack>
                </FlipButton>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3 relative">
              <ThemeToggle />
              <FlipButton className="hidden lg:flex rounded-md border border-white/40 text-sm bg-white/10 transition-all">
                <FlipButtonFront className="backdrop-blur-xl bg-transparent text-primary-content hover:bg-transparent cursor-pointer">
                  Нека започнем
                </FlipButtonFront>
                <FlipButtonBack className="backdrop-blur-xl bg-transparent text-primary-content hover:bg-transparent cursor-pointer">
                  Нека започнем
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
                      <span>{item.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="flex lg:flex-row flex-col lg:items-center items-center mx-auto my-auto">
          {/* Hero Content */}
          <div className="flex px-6 lg:px-12 py-12 lg:py-16">
            <div className="flex flex-col justify-between w-full lg:w-[55%]">
              {/* Top: Availability + CTA */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-primary-content/60 uppercase tracking-widest font-medium">
                    Свободни
                  </span>
                </div>
                <FlipButton className="rounded-full border border-primary-content/20 text-xs px-4 py-1.5 h-auto">
                  <FlipButtonFront className="bg-transparent text-primary-content/80 text-xs">
                    Нека говорим
                  </FlipButtonFront>
                  <FlipButtonBack className="bg-primary-content! text-primary text-xs">
                    Нека говорим
                  </FlipButtonBack>
                </FlipButton>
              </div>

              {/* Bottom: Tagline + Description */}
              <div className="space-y-2 mt-3">
                <p className="text-primary-content/40 text-sm uppercase tracking-widest font-medium">
                  Уеб дизайн и разработка
                </p>
                <p className="text-primary-content/60 text-base max-w-sm leading-relaxed">
                  Премиум уеб дизайн, SEO и дигитални услуги, които помагат на
                  вашия бизнес да се открои онлайн.
                </p>
              </div>
            </div>
          </div>

          {/* Big Headline — centered over bottom */}
          <div className="px-6 lg:px-12 pb-16 h-fit">
            <h1 className="text-6xl font-bold text-primary-content leading-tight max-w-3xl">
              Уебсайт, който оставя трайно впечатление!
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <FlipButton className="rounded-full border border-primary-content/20 px-6 py-2.5">
                <FlipButtonFront className="bg-transparent text-primary-content text-sm font-medium">
                  За нас
                </FlipButtonFront>
                <FlipButtonBack className="bg-primary-content! text-primary text-sm font-medium">
                  За нас
                </FlipButtonBack>
              </FlipButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
