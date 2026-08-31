"use client";

import { memo, useCallback, useMemo } from "react";
import { FULL_FAQ } from "@/lib/faq-data";
import { Button } from "@/components/animate-ui/components/buttons/button";

interface FAQCategoryButtonsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  locale: string;
}

export const FAQCategoryButtons = memo(
  ({ activeCategory, onCategoryChange, locale }: FAQCategoryButtonsProps) => {
    const handleClick = useCallback(
      (categoryId: string) => {
        onCategoryChange(categoryId);
      },
      [onCategoryChange],
    );

    // Memoize the button list to avoid recalculation
    const buttons = useMemo(
      () =>
        FULL_FAQ.map((category) => ({
          id: category.id,
          label: locale === "bg" ? category.nameBg : category.nameEn,
        })),
      [locale],
    );

    return (
      <aside className="lg:col-span-1 space-y-2">
        {buttons.map((button) => (
          <Button
            key={button.id}
            onClick={() => handleClick(button.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border-l-2 ${
              activeCategory === button.id
                ? "border-primary-foreground bg-primary text-primary-foreground font-medium"
                : "border-primary text-primary bg-primary-foreground hover:bg-primary/50! hover:border-primary/50 hover:text-primary"
            }`}
          >
            {button.label}
          </Button>
        ))}
      </aside>
    );
  },
);

FAQCategoryButtons.displayName = "FAQCategoryButtons";
