"use client";

import { X, Menu } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Button } from "@/components/animate-ui/components/buttons/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { NAVIGATION_DATA } from "@/app/components/header";
import { LanguageToggle } from "@/app/components/language-toggle";
import ThemeToggle from "@/app/components/theme-button";

export default function MobileNavDrawer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations();

  return (
    <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} direction="right">
      <DrawerTrigger
        aria-label="Отвори страничното навигация"
        onClick={() => setIsMenuOpen(true)}
        className="border-2 border-primary-foreground bg-primary-foreground rounded-lg p-1"
      >
        <Menu className="size-5 stroke-primary" />
      </DrawerTrigger>

      <DrawerContent className="bg-primary-foreground">
        <DrawerHeader>
          <div className="text-end">
            <Button
              autoFocus
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Затвори менюто"
              className="text-primary"
            >
              <X className="stroke-primary-foreground" />
            </Button>
          </div>
        </DrawerHeader>
        <nav className="grid grid-cols-1 px-4 pb-3 gap-3 text-sm text-primary">
          {NAVIGATION_DATA.map((item) => (
            <Link
              className="flex! items-center h-10"
              key={item.name}
              href={`/${locale}${item.href}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>
        <div className="grid grid-cols-1 gap-4 py-3 px-4 border-t border-base-200">
          <ThemeToggle showAsText={true} className="border border-primary" />
          <LanguageToggle showAsText={true} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
