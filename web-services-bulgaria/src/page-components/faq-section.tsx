"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { LANDING_PAGE_FAQ } from "@/lib/faq-data";
import { HeadingSection } from "@/components/heading-section";

export default function FAQSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-12 px-4 lg:px-12 bg-background">
      <HeadingSection
        title={t("faqHeadline")}
        subtitle={t("faqDescription")}
        textColor="primary"
      />
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {/* Right Column - FAQ Accordion */}
          <div className="space-y-3">
            {LANDING_PAGE_FAQ.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left group"
                >
                  <div className="border-b border-primary-content/10 py-5 transition-all duration-300">
                    {/* Question */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-primary font-semibold text-lg shrink-0 leading-tight mt-0.5">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-base font-medium text-primary group-hover:text-primary/80 transition-colors leading-tight">
                          {locale === "bg" ? item.questionBg : item.questionEn}
                        </h3>
                      </div>
                      <Plus
                        className={`w-5 h-5 text-primary-content/60 shrink-0 transition-transform duration-300 mt-0.5 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </div>

                    {/* Answer - Collapsible */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-96 opacity-100 mt-4 ml-12"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-primary-content/70 leading-relaxed pr-6">
                        {locale === "bg" ? item.answerBg : item.answerEn}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
