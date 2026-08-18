"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FULL_FAQ } from "@/lib/faq-data";
import { commonInnerPageSectionStyles } from "@/utility/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";
import { ContactCtaBottom } from "./contact-cta-bottom";
import { HeadingSection } from "./heading-section";
import { Button } from "@/components/animate-ui/components/buttons/button";

export const FAQMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>(
    FULL_FAQ[0]?.id || "platform",
  );

  const activeCategoryData = FULL_FAQ.find((cat) => cat.id === activeCategory);

  return (
    <main
      className={`w-full min-h-screen bg-background ${commonInnerPageSectionStyles}`}
    >
      {/* Page Header Section */}
      <div className={` mx-auto max-w-7xl`}>
        <HeadingSection
          type="inner"
          title={t("faqPageHeadline")}
          subtitle={t("faqPageDescription")}
        />
      </div>

      {/* Main Content */}
      <div className="pt-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout: Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Left Sidebar - Categories */}
            <aside className="lg:col-span-1 space-y-2">
              {FULL_FAQ.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border-l-2 ${
                    activeCategory === category.id
                      ? "border-primary-foreground bg-primary text-primary-foreground font-medium"
                      : "border-primary text-primary bg-primary-foreground hover:border-primary/50"
                  }`}
                >
                  {locale === "bg" ? category.nameBg : category.nameEn}
                </Button>
              ))}
            </aside>

            {/* Right Content Area */}
            <div className="lg:col-span-4">
              {activeCategoryData && (
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

                  {/* Questions List */}
                  <Accordion type="single" collapsible className="mt-12">
                    {activeCategoryData.items.map((item, idx) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border-primary-content/10 bg-transparent"
                      >
                        <AccordionTrigger className="px-0 py-4 hover:bg-transparent data-[state=open]:bg-transparent">
                          <div className="flex items-start gap-4 flex-1 text-left">
                            <span className="text-sm font-semibold text-primary-content/50 shrink-0 mt-0.5">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg font-medium leading-tight text-primary-content group-data-[state=open]:text-primary transition-colors">
                              {locale === "bg"
                                ? item.questionBg
                                : item.questionEn}
                            </h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-0 py-4 text-base text-primary-content/70 leading-relaxed ml-12">
                          {locale === "bg" ? item.answerBg : item.answerEn}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          </div>
          <ContactCtaBottom />
        </div>
      </div>
    </main>
  );
};
