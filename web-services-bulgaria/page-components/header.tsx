"use client";
import Link from "next/link";
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
import { TextAlignJustify, TextAlignStart } from "lucide-react";
import { useState } from "react";
const NAVIGATION_DATA = [
  { name: "Услуги", href: "/" },
  { name: "Проекти", href: "/" },
  { name: "За нас", href: "/" },
  { name: "Контакти", href: "/" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/image-hero.jpg')",
          height: "680px",
        }}
      >
        <header className="mx-auto pt-6 w-full max-w-350 px-4 relative z-10">
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex gap-3 items-center text-primary-content w-full">
              <p className="w-fit lg:text-2xl text-lg">Web Services Bulgaria</p>
              <Badge className="border-green-300 bg-green-200/10 text-base text-green-600 bg-none rounded-md! max-w-[86px] max-h-[28px] size-full">
                Онлайн
              </Badge>
            </div>
            <div className="flex items-center gap-3 w-full justify-end">
              <div className="hidden lg:flex items-center gap-4">
                {NAVIGATION_DATA.map((item) => (
                  <FlipButton
                    variant={"link"}
                    key={item.name}
                    className="rounded-2xl"
                  >
                    <FlipButtonFront>
                      <Link
                        className="text-primary-content text-base"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </FlipButtonFront>
                    <FlipButtonBack>
                      <Link
                        className="text-primary-content text-base"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </FlipButtonBack>
                  </FlipButton>
                ))}
              </div>
              <FlipButton className="rounded-2xl border-base-100/30">
                <FlipButtonFront className="bg-cement border-base-100/30">
                  Нека започнем
                </FlipButtonFront>
                <FlipButtonBack className="bg-cement! border-base-100/30">
                  Нека започнем
                </FlipButtonBack>
              </FlipButton>
              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-cement rounded-md lg:hidden flex border border-base-100/30 overflow-hidden">
                    <div
                      className="absolute transition-opacity duration-300 ease-in-out"
                      style={{ opacity: !isMenuOpen ? 1 : 0 }}
                    >
                      <TextAlignJustify className="size-6 text-primary-content" />
                    </div>
                    <div
                      className="absolute transition-opacity duration-300 ease-in-out"
                      style={{ opacity: isMenuOpen ? 1 : 0 }}
                    >
                      <TextAlignStart className="size-6 text-primary-content" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full lg:hidden flex max-w-[200px] bg-base-200! rounded-md border">
                  {NAVIGATION_DATA.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
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
      </section>
    </>
  );
}
