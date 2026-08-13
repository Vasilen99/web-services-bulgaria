"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { FULL_FAQ } from "@/lib/faq-data";
import { Button } from "@/components/ui/button";

export const FAQMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    FULL_FAQ[0]?.id || "platform",
  );

  const activeCategoryData = FULL_FAQ.find((cat) => cat.id === activeCategory);

  return (
    <main className="w-full min-h-screen bg-background">
      {/* Top Spacing for navbar */}
      <div className="h-24 lg:h-32" />

      {/* Page Header Section */}
      <div className="px-4 lg:px-12 pb-16 border-b border-primary-content/5">
        <div className="max-w-7xl mx-auto mt-12">
          {/* Back Button */}
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("about")}
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                {t("faqPageHeadline")}
              </h1>
              <p className="text-lg text-primary-content/70 leading-relaxed">
                {t("faqPageDescription")}
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="flex flex-col space-y-3">
                {FULL_FAQ.map((category, idx) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-semibold">
                      {idx + 1}
                    </div>
                    <span className="text-primary-content/70">
                      {locale === "bg" ? category.nameBg : category.nameEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout: Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Left Sidebar - Categories */}
            <aside className="lg:col-span-1">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary-content/60 uppercase tracking-widest mb-6 pl-4">
                  {t("faqCategoryPlatform")}
                </p>
                <div className="space-y-2">
                  {FULL_FAQ.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border-l-2 ${
                        activeCategory === category.id
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-transparent text-primary-content/70 hover:text-primary hover:border-primary/50"
                      }`}
                    >
                      {locale === "bg" ? category.nameBg : category.nameEn}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="lg:col-span-4">
              {activeCategoryData && (
                <div className="space-y-8">
                  {/* Category Header */}
                  <div>
                    <span className="text-xs font-semibold text-primary-content/60 uppercase tracking-widest">
                      {`${FULL_FAQ.findIndex((c) => c.id === activeCategory) + 1} of ${FULL_FAQ.length}`}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
                      {locale === "bg"
                        ? activeCategoryData.nameBg
                        : activeCategoryData.nameEn}
                    </h2>
                    <div className="w-16 h-1.5 bg-primary rounded-full" />
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6 mt-12">
                    {activeCategoryData.items.map((item, idx) => {
                      const isExpanded = expandedId === item.id;

                      return (
                        <Button
                          key={item.id}
                          onClick={() =>
                            setExpandedId(isExpanded ? null : item.id)
                          }
                          className="w-full text-left group"
                        >
                          <div className="pb-6 border-b border-primary-content/10 transition-all duration-300 group-hover:border-primary/30">
                            {/* Question */}
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4 flex-1">
                                <span className="text-sm font-semibold text-primary-content/50 shrink-0 mt-0.5">
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3
                                  className={`text-lg font-medium leading-tight transition-colors ${
                                    isExpanded
                                      ? "text-primary"
                                      : "text-primary-content group-hover:text-primary"
                                  }`}
                                >
                                  {locale === "bg"
                                    ? item.questionBg
                                    : item.questionEn}
                                </h3>
                              </div>
                              <ChevronDown
                                className={`w-5 h-5 text-primary-content/60 shrink-0 transition-transform duration-300 mt-0.5 ${
                                  isExpanded ? "rotate-180 text-primary" : ""
                                }`}
                              />
                            </div>

                            {/* Answer - Collapsible */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                isExpanded
                                  ? "max-h-96 opacity-100 mt-4 ml-12"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <p className="text-base text-primary-content/70 leading-relaxed">
                                {locale === "bg"
                                  ? item.answerBg
                                  : item.answerEn}
                              </p>
                            </div>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact CTA - Bottom */}
          <div className="mt-24 pt-16 border-t border-primary-content/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {t("contactHeadline")}
                </h3>
                <p className="text-primary-content/70 text-base leading-relaxed max-w-lg">
                  {t("contactDescription")}
                </p>
              </div>
              <div className="flex items-center lg:justify-end">
                <Link
                  href={`/${locale}/contact-us`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  {t("letsTalk")} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
