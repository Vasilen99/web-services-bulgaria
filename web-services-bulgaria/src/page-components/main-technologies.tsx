"use client";

import { motion } from "motion/react";
import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
  StripeIcon,
  MUIIcon,
  AnthropicIcon,
} from "@/utility/icons";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";
import {
  Tilt,
  TiltContent,
} from "@/components/animate-ui/primitives/effects/tilt";
import { server } from "@/utility/server";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { technologiesMainLink } from "@/utility/links";
interface Technology {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  slug: string;
  description: {
    bg: string;
    en: string;
  };
  benefits: {
    bg: string[];
    en: string[];
  };
}

const TECHNOLOGIES: Technology[] = [
  {
    icon: NextIcon,
    name: "Next.js",
    slug: "nextjs",
    description: {
      bg: "Next.js е лесна платформа за изграждане на бързи и интерактивни уебсайтове. Всичко, което трябва, е вградено – от най-простите до най-сложните функции.",
      en: "Next.js is an easy platform for building fast and interactive websites. Everything you need is built-in—from the simplest to the most complex features.",
    },
    benefits: {
      bg: [
        "Вашият сайт зарежда бързо, което подобрява потребителския опит",
        "Автоматично се оптимизира за мобилни устройства",
        "Лесно се свързва със социални мрежи и други инструменти",
        "Подобрена видимост в Google и другите търсачки",
      ],
      en: [
        "Your website loads quickly, which improves user experience",
        "Automatically optimized for mobile devices",
        "Easily connects with social networks and other tools",
        "Better visibility in Google and other search engines",
      ],
    },
  },
  {
    icon: ReactIcon,
    name: "React",
    slug: "react",
    description: {
      bg: "React е библиотека, която прави уебсайтовете интерактивни и отзивчиви. Когато щракнете, напишете или се преместите, всичко се случва без спиране.",
      en: "React is a library that makes websites interactive and responsive. When you click, type, or move, everything happens smoothly without interruption.",
    },
    benefits: {
      bg: [
        "Интерактивни елементи, които отговарят незабавно на ваши действия",
        "Намалени натоварване на интернета при использвание",
        "Лесна поддръжка и обновяване на функциите",
        "Согласувано поведение на всички браузъри",
      ],
      en: [
        "Interactive elements that respond immediately to your actions",
        "Reduced internet load when using the site",
        "Easy maintenance and feature updates",
        "Consistent behavior across all browsers",
      ],
    },
  },
  {
    icon: TypescriptIcon,
    name: "TypeScript",
    slug: "typescript",
    description: {
      bg: "TypeScript помага разработчиците да пишат по-безопасен код. Той намирането грешки още преди сайтът да бъде пуснат, което означава по-малко проблеми за вас.",
      en: "TypeScript helps developers write safer code. It finds errors before the site goes live, which means fewer problems for you.",
    },
    benefits: {
      bg: [
        "По-малко грешки и неочаквани проблеми",
        "Лесна разширяване на функциите без страх от счупване",
        "По-бързо развитие благодарение на по-добрата подкрепа на инструментите",
        "По-добра документация и разбиране на кода",
      ],
      en: [
        "Fewer errors and unexpected issues",
        "Easy to expand features without fear of breaking things",
        "Faster development thanks to better tool support",
        "Better documentation and code understanding",
      ],
    },
  },
  {
    icon: Tailwind,
    name: "Tailwind CSS",
    slug: "tailwind",
    description: {
      bg: "Tailwind CSS е инструмент, който прави дизайнирането на уебсайтове по-бързо и по-лесно. Стилът се прилага директно без писане на много код.",
      en: "Tailwind CSS is a tool that makes designing websites faster and easier. Styling is applied directly without writing lots of code.",
    },
    benefits: {
      bg: [
        "Красив дизайн, който работи на всички устройства – телефон, таблет, компютър",
        "Възможност за тъмен режим, който е лес за очите",
        "Бързо правене на промени без необходимост от перестартиране",
        "Малко файлове означават по-бързо зареждане",
      ],
      en: [
        "Beautiful design that works on all devices—phone, tablet, computer",
        "Dark mode capability that's easy on the eyes",
        "Quick changes without the need to restart",
        "Small files mean faster loading",
      ],
    },
  },
  {
    icon: ShadcnIcon,
    name: "shadcn/ui",
    slug: "shadcn",
    description: {
      bg: "shadcn/ui е колекция от готови компоненти, които могат да бъдат използвани веднага. Това ускорява разработката и гарантира единствен дизайн.",
      en: "shadcn/ui is a collection of ready-made components that can be used immediately. This speeds up development and ensures a consistent design.",
    },
    benefits: {
      bg: [
        "Всички бутони, форми и менюта изглеждат професионално",
        "Достъпни за всички, включително хора със зрителни затруднения",
        "Възможност за лесна приспособяване на цветовете и стилът",
        "Консистентна работа на всички браузъри и устройства",
      ],
      en: [
        "All buttons, forms, and menus look professional",
        "Accessible to everyone, including people with visual impairments",
        "Ability to easily customize colors and style",
        "Consistent functionality across all browsers and devices",
      ],
    },
  },
  {
    icon: ZustandIcon,
    name: "Zustand",
    slug: "zustand",
    description: {
      bg: "Zustand е просто решение за управление на данни. Позволява различни части на сайта да работят заедно без сложност.",
      en: "Zustand is a simple solution for managing data. It allows different parts of the website to work together without complexity.",
    },
    benefits: {
      bg: [
        "Данните остават синхронизирани на всички части на сайта",
        "Вашите предпочитания се запомнят дори след затваряне на браузъра",
        "Лесно добавяне на нови функции без проблеми",
        "Дебъгване е по-лесно благодарение на ясната структура",
      ],
      en: [
        "Data stays synchronized across all parts of the website",
        "Your preferences are remembered even after closing the browser",
        "Easy to add new features without problems",
        "Debugging is easier thanks to the clear structure",
      ],
    },
  },
  {
    icon: StripeIcon,
    name: "Stripe",
    description: {
      bg: "Stripe е платформа за онлайн плащания, която улеснява интеграцията на различни методи за плащане и осигурява сигурни транзакции.",
      en: "Stripe is an online payment platform that makes it easy to integrate various payment methods and ensures secure transactions.",
    },
    slug: "stripe",
    benefits: {
      bg: [
        "Лесна интеграция с различни платежни методи",
        "Сигурни транзакции и защита на данните",
        "Поддръжка на абонаментни модели",
        "Гъвкави API за персонализирани решения",
        "Отлична документация и developer experience",
        "Мащабируемост за големи проекти",
      ],
      en: [
        "Easy integration with various payment methods",
        "Secure transactions and data protection",
        "Support for subscription models",
        "Flexible APIs for custom solutions",
        "Excellent documentation and developer experience",
        "Scalability for large projects",
      ],
    },
  },
  {
    icon: MUIIcon,
    name: "MUI",
    description: {
      bg: "MUI е библиотека от готови компоненти за React, която улеснява създаването на модерни и отзивчиви потребителски интерфейси.",
      en: "MUI is a library of ready-made components for React that makes it easy to create modern and responsive user interfaces.",
    },
    slug: "mui",
    benefits: {
      bg: [
        "Модерен и професионален вид на сайта",
        "Удобно използване на всички устройства – телефон, таблет и компютър",
        "Бързо създаване на нови страници и функции",
        "Еднакъв и подреден дизайн във всички части на сайта",
        "Лесно адаптиране на визията според вашия бранд",
      ],
      en: [
        "Modern and professional-looking website",
        "Easy to use on all devices—phone, tablet, and computer",
        "Faster creation of new pages and features",
        "Consistent and well-organized design across the website",
        "Easy to adapt the look to match your brand",
      ],
    },
  },
  {
    icon: AnthropicIcon,
    name: "Anthropic Claude API",
    slug: "claude-api",
    description: {
      bg: "Anthropic Claude API позволява добавянето на интелигентни AI функции към уебсайтове и приложения. Подходящ е за автоматизация, анализ на информация и създаване на интелигентни решения.",
      en: "The Anthropic Claude API makes it possible to add intelligent AI features to websites and applications. It is suitable for automation, information analysis, and building intelligent solutions.",
    },
    benefits: {
      bg: [
        "Автоматизиране на повтарящи се задачи и процеси",
        "Бърз анализ и обработка на големи количества информация",
        "Интелигентни функции, които улесняват работата на потребителите",
        "Възможност за създаване на персонализирани AI решения",
        "По-бързо обслужване и по-добро потребителско изживяване",
      ],
      en: [
        "Automation of repetitive tasks and processes",
        "Fast analysis and processing of large amounts of information",
        "Intelligent features that make users' work easier",
        "Ability to create customized AI solutions",
        "Faster service and a better user experience",
      ],
    },
  },
];

export default function MainTechnologies() {
  const { locale, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-primary/5">
      {/* Header Section */}
      <div className="relative py-12 mt-23 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {locale === "bg" ? "Технологии" : "Technologies"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "bg"
                ? "Открийте технологиите, които използваме, за да създадем вашия уебсайт. Всяка инструмент е избрана внимателно за вашия успех."
                : "Discover the technologies we use to create your website. Each tool is carefully chosen for your success."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {TECHNOLOGIES.map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <div key={i} className="flex flex-col gap-3 items-center">
                <Tilt key={tech.slug} asChild maxTilt={10} perspective={800}>
                  <motion.div variants={itemVariants} className="group h-full">
                    <TiltContent asChild>
                      <div className="relative h-full rounded-xl border border-primary/20 bg-linear-to-br from-card to-card/50 p-8 hover:border-primary/40 transition-colors duration-300 overflow-hidden flex flex-col">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-primary/5 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Icon and Title */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                              <IconComponent className="w-8 h-8 fill-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold">
                              {tech.name}
                            </h2>
                          </div>

                          {/* Main Description - User Friendly */}
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {tech.description[locale]}
                          </p>

                          {/* Divider */}
                          <div className="h-px bg-linear-to-r from-primary/20 via-primary/20 to-transparent mb-6" />

                          {/* Key Benefits */}
                          <div className="mb-8 grow">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                              {locale === "bg"
                                ? "Какво означава това за вас"
                                : "What this means for you"}
                            </h3>
                            <ul className="space-y-3">
                              {tech.benefits[locale].map((benefit, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm"
                                >
                                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                  <span className="text-foreground/80">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TiltContent>
                  </motion.div>
                </Tilt>
                <div
                  className="pt-4 border-t border-primary/10"
                  style={{ transformStyle: "flat" }}
                >
                  <LiquidButton onClick={() => console.log("clicked")}>
                    <Link
                      href={`${server}/${locale}/${technologiesMainLink}/${tech.slug}`}
                    >
                      {t(translations.learnMore)} {tech.name}
                    </Link>
                  </LiquidButton>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <div className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              {locale === "bg"
                ? "Готови ли сте да започнем?"
                : "Ready to get started?"}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {locale === "bg"
                ? "Нашият екип е готов да обсъди вашия проект и да намери най-добрите решения за вас."
                : "Our team is ready to discuss your project and find the best solutions for you."}
            </p>
            <Link
              href={`/${locale}/contact-us`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              {locale === "bg" ? "Свържете се" : "Contact Us"}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
