"use client";

import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { LANDING_PAGE_FAQ } from "@/lib/faq-data";

export default function FAQSection() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "bg";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 lg:py-24 px-4 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header & Description */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold text-primary-content/60 uppercase tracking-widest">
                  {t({ bg: "Често задавани въпроси", en: "FAQ" })}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-3 leading-tight">
                  {t({
                    bg: "Отговори на вашите въпроси",
                    en: "Answers to Your Questions",
                  })}
                </h2>
              </div>
              <p className="text-primary-content/70 text-base leading-relaxed max-w-md">
                {t({
                  bg: "Отговори на най-често задаваните въпроси. Ако не намерите отговора, свържете се с нас.",
                  en: "Answers to the most common questions. If you don't find what you're looking for, feel free to reach out.",
                })}
              </p>
              <Link
                href={`/${locale}/faq`}
                className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium group"
              >
                {t({ bg: "Виж всички", en: "View All" })}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>

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
