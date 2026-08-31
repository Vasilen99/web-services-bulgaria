"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import { FULL_FAQ } from "@/lib/faq-data";
import { commonInnerPageSectionStyles } from "@/utility/constants";
import { ContactCtaBottom } from "./contact-cta-bottom";
import { HeadingSection } from "./heading-section";
import { FAQCategoryButtons } from "./faq-category-buttons";
import FaqAccordion from "./faq-accordion";

export const FAQMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>(
    FULL_FAQ[0]?.id || "platform",
  );

  // Memoize the active category data to avoid recalculation
  const activeCategoryData = useMemo(
    () => FULL_FAQ.find((cat) => cat.id === activeCategory),
    [activeCategory],
  );

  // Memoize callback to prevent new function reference on each render
  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <main className={`w-full bg-background ${commonInnerPageSectionStyles}`}>
      <div className="mx-auto max-w-7xl">
        <HeadingSection
          type="inner"
          title={t("faqPageHeadline")}
          subtitle={t("faqPageDescription")}
        />
      </div>

      {/* Main Content */}
      <div className="pt-12">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Two Column Layout: Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Left Sidebar - Categories - Memoized to prevent unnecessary re-renders */}
            <FAQCategoryButtons
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              locale={locale}
            />

            {/* Right Content Area - Only render active category content */}
            {activeCategoryData && (
              <div className="lg:col-span-4">
                <div className="space-y-8">
                  {/* Category Header */}
                  <span className="text-xs font-semibold text-primary-content/60 uppercase tracking-widest">
                    {`${FULL_FAQ.findIndex((c) => c.id === activeCategory) + 1} ${locale === "bg" ? "от" : "of"} ${FULL_FAQ.length}`}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
                    {locale === "bg"
                      ? activeCategoryData.nameBg
                      : activeCategoryData.nameEn}
                  </h2>
                  <div className="w-full h-1.5 bg-primary rounded-full" />

                  {/* Questions List - Accordion items only render when category changes */}
                  <FaqAccordion
                    activeCategoryData={activeCategoryData}
                    locale={locale}
                  />
                </div>
              </div>
            )}
          </div>
          <p className="text-base text-primary w-full leading-relaxed max-w-none mt-12">
            {t("platformIntro")}
          </p>
          <ContactCtaBottom />
        </motion.div>
      </div>
    </main>
  );
};
