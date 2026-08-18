"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { LANDING_PAGE_FAQ } from "@/lib/faq-data";
import { HeadingSection } from "@/app/components/heading-section";

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
        type="landing"
      />
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {/* Right Column - FAQ Accordion */}
          <div className="space-y-3">
            {LANDING_PAGE_FAQ.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.1 }}
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
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus className="w-5 h-5 text-primary-content/60 shrink-0 mt-0.5" />
                      </motion.div>
                    </div>

                    {/* Answer - Collapsible */}
                    <motion.div
                      initial={false}
                      animate={
                        isOpen
                          ? { maxHeight: 500, opacity: 1 }
                          : { maxHeight: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden ml-12"
                    >
                      <p className="text-sm text-primary-content/70 leading-relaxed pr-6 pt-4">
                        {locale === "bg" ? item.answerBg : item.answerEn}
                      </p>
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
