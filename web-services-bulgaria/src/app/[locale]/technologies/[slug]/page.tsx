"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";
import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
  AnthropicIcon,
  MUIIcon,
  StripeIcon,
} from "@/utility/icons";

const TECHNOLOGIES_DATA = {
  nextjs: {
    name: "Next.js",
    icon: NextIcon,
    shortDescription: {
      bg: "Бързи и надеждни уеб приложения",
      en: "Fast and reliable web applications",
    },
    description: {
      bg: "Използваме Next.js за създаване на бързи, надеждни и мащабируеми уеб решения. Технологията ни позволява да изграждаме сайтове и приложения, които работят отлично както за вашите потребители, така и за търсачките.",
      en: "We use Next.js to build fast, reliable, and scalable web solutions. It allows us to create websites and applications that perform well for both your users and search engines.",
    },
    whyWeChose: {
      bg: [
        "Бързо зареждане и плавно потребителско изживяване",
        "Добра основа за SEO и по-добра видимост в търсачките",
        "Подходящ за малки сайтове и големи бизнес платформи",
        "Лесно разширяване при развитие на вашия бизнес",
        "Надеждна технология, използвана от водещи компании",
      ],
      en: [
        "Fast loading and a smooth user experience",
        "A strong foundation for SEO and better search visibility",
        "Suitable for both small websites and large business platforms",
        "Easy to expand as your business grows",
        "A reliable technology trusted by leading companies",
      ],
    },
    benefits: {
      bg: [
        "Вашият сайт се зарежда бързо и изглежда професионално",
        "Потребителите получават плавно и удобно изживяване",
        "По-лесно достигате до нови клиенти чрез търсачките",
        "Можем да добавяме нови функции без да изграждаме сайта отначало",
        "Получавате стабилна основа за дългосрочно развитие",
      ],
      en: [
        "Your website loads quickly and looks professional",
        "Users get a smooth and convenient experience",
        "It is easier to reach new customers through search engines",
        "New features can be added without rebuilding the entire website",
        "You get a stable foundation for long-term growth",
      ],
    },
    useCases: {
      bg: [
        "Фирмени уебсайтове",
        "Онлайн магазини",
        "Бизнес платформи",
        "SaaS приложения",
        "Уеб приложения с високи изисквания към скоростта",
      ],
      en: [
        "Business websites",
        "Online stores",
        "Business platforms",
        "SaaS applications",
        "Web applications with high performance requirements",
      ],
    },
  },

  typescript: {
    name: "TypeScript",
    icon: TypescriptIcon,
    shortDescription: {
      bg: "По-надежден и предвидим софтуер",
      en: "More reliable and predictable software",
    },
    description: {
      bg: "TypeScript ни помага да изграждаме по-надеждни приложения и да откриваме потенциални проблеми още по време на разработката. Това намалява риска от неочаквани грешки и улеснява поддръжката на проекта в дългосрочен план.",
      en: "TypeScript helps us build more reliable applications and identify potential issues during development. This reduces the risk of unexpected errors and makes the project easier to maintain in the long term.",
    },
    whyWeChose: {
      bg: [
        "Намалява вероятността от грешки в приложението",
        "Прави проекта по-лесен за поддръжка",
        "Помага ни да работим по-предвидимо при големи проекти",
        "Улеснява добавянето на нови функции",
        "Подходящ за проекти, които трябва да се развиват с времето",
      ],
      en: [
        "Reduces the likelihood of application errors",
        "Makes the project easier to maintain",
        "Helps us work more predictably on larger projects",
        "Makes adding new features easier",
        "Well suited for projects that need to evolve over time",
      ],
    },
    benefits: {
      bg: [
        "По-малко неочаквани проблеми за вашите потребители",
        "По-стабилно поведение на приложението",
        "По-лесно добавяне на нови функционалности",
        "По-бързо откриване и отстраняване на проблеми",
        "По-сигурна основа за дългосрочно развитие",
      ],
      en: [
        "Fewer unexpected issues for your users",
        "More stable application behavior",
        "Easier addition of new features",
        "Faster identification and resolution of issues",
        "A more reliable foundation for long-term growth",
      ],
    },
    useCases: {
      bg: [
        "Бизнес приложения",
        "SaaS платформи",
        "Административни системи",
        "Онлайн магазини",
        "Дългосрочни дигитални продукти",
      ],
      en: [
        "Business applications",
        "SaaS platforms",
        "Administrative systems",
        "Online stores",
        "Long-term digital products",
      ],
    },
  },

  tailwind: {
    name: "Tailwind CSS",
    icon: Tailwind,
    shortDescription: {
      bg: "Модерен и адаптивен дизайн",
      en: "Modern and responsive design",
    },
    description: {
      bg: "Използваме Tailwind CSS за създаване на модерни интерфейси, които изглеждат добре и работят правилно на различни устройства. Това ни позволява бързо да адаптираме дизайна към вашия бранд и нуждите на вашите потребители.",
      en: "We use Tailwind CSS to create modern interfaces that look great and work well across different devices. It allows us to quickly adapt the design to your brand and your users' needs.",
    },
    whyWeChose: {
      bg: [
        "Позволява създаването на уникален дизайн",
        "Работи отлично на телефони, таблети и компютри",
        "Улеснява поддържането на единен визуален стил",
        "Позволява бързи промени по дизайна",
        "Подходящ за съвременни и мащабируеми интерфейси",
      ],
      en: [
        "Allows us to create unique designs",
        "Works well on phones, tablets, and computers",
        "Makes it easier to maintain a consistent visual style",
        "Allows for quick design changes",
        "Well suited for modern and scalable interfaces",
      ],
    },
    benefits: {
      bg: [
        "Вашият сайт изглежда добре на всякакъв размер екран",
        "Получавате дизайн, съобразен с вашия бранд",
        "Промените по визията могат да се правят бързо",
        "Всички страници запазват единен и професионален вид",
        "Получавате бърз и лек интерфейс",
      ],
      en: [
        "Your website looks great on every screen size",
        "You get a design tailored to your brand",
        "Visual changes can be made quickly",
        "All pages maintain a consistent and professional look",
        "You get a fast and lightweight interface",
      ],
    },
    useCases: {
      bg: [
        "Фирмени сайтове",
        "Онлайн магазини",
        "SaaS платформи",
        "Административни панели",
        "Персонализирани уеб приложения",
      ],
      en: [
        "Business websites",
        "Online stores",
        "SaaS platforms",
        "Administrative dashboards",
        "Custom web applications",
      ],
    },
  },

  react: {
    name: "React",
    icon: ReactIcon,
    shortDescription: {
      bg: "Интерактивни и удобни приложения",
      en: "Interactive and user-friendly applications",
    },
    description: {
      bg: "React ни позволява да създаваме интерактивни уеб приложения, които реагират бързо на действията на потребителя. Благодарение на него можем да изграждаме удобни интерфейси, които правят сложните процеси по-лесни за използване.",
      en: "React allows us to create interactive web applications that respond quickly to user actions. It helps us build intuitive interfaces that make complex processes easier to use.",
    },
    whyWeChose: {
      bg: [
        "Позволява създаването на удобни и интерактивни интерфейси",
        "Подходящ за сложни бизнес процеси",
        "Улеснява развитието на приложението с времето",
        "Осигурява плавно взаимодействие с потребителите",
        "Има голяма екосистема и дългосрочна поддръжка",
      ],
      en: [
        "Allows us to create intuitive and interactive interfaces",
        "Suitable for complex business processes",
        "Makes it easier to evolve the application over time",
        "Provides smooth interaction for users",
        "Has a large ecosystem and long-term support",
      ],
    },
    benefits: {
      bg: [
        "Потребителите получават бърза реакция при всяко действие",
        "Сложните процеси могат да бъдат представени по лесен начин",
        "Приложението може да се развива според нуждите на бизнеса",
        "По-удобен интерфейс за служители и клиенти",
        "Стабилна основа за дългосрочни дигитални продукти",
      ],
      en: [
        "Users get a fast response to every action",
        "Complex processes can be presented in a simple way",
        "The application can evolve with your business needs",
        "A more convenient interface for employees and customers",
        "A stable foundation for long-term digital products",
      ],
    },
    useCases: {
      bg: [
        "Уеб приложения",
        "Административни системи",
        "Клиентски портали",
        "SaaS продукти",
        "Интерактивни бизнес платформи",
      ],
      en: [
        "Web applications",
        "Administrative systems",
        "Customer portals",
        "SaaS products",
        "Interactive business platforms",
      ],
    },
  },

  shadcn: {
    name: "shadcn/ui",
    icon: ShadcnIcon,
    shortDescription: {
      bg: "Красиви и удобни интерфейси",
      en: "Beautiful and intuitive interfaces",
    },
    description: {
      bg: "Използваме shadcn/ui като основа за създаване на качествени и последователни интерфейси. Това ни позволява да комбинираме готови решения с уникален дизайн, съобразен изцяло с вашия бизнес.",
      en: "We use shadcn/ui as a foundation for creating high-quality and consistent interfaces. It allows us to combine ready-made solutions with a unique design tailored to your business.",
    },
    whyWeChose: {
      bg: [
        "Ускорява създаването на качествени интерфейси",
        "Позволява пълна адаптация към вашия бранд",
        "Помага за създаването на единен визуален стил",
        "Подходящ за сложни бизнес системи",
        "Фокусира се върху удобството на потребителя",
      ],
      en: [
        "Speeds up the creation of high-quality interfaces",
        "Allows full adaptation to your brand",
        "Helps create a consistent visual style",
        "Suitable for complex business systems",
        "Focuses on user convenience",
      ],
    },
    benefits: {
      bg: [
        "Получавате професионален и последователен интерфейс",
        "Вашият бранд може да бъде представен по уникален начин",
        "Потребителите лесно се ориентират в приложението",
        "Новите екрани и функции могат да се добавят по-бързо",
        "Интерфейсът остава лесен за използване дори при сложни системи",
      ],
      en: [
        "You get a professional and consistent interface",
        "Your brand can be presented in a unique way",
        "Users can easily navigate the application",
        "New screens and features can be added faster",
        "The interface remains easy to use even in complex systems",
      ],
    },
    useCases: {
      bg: [
        "Административни панели",
        "Бизнес приложения",
        "Клиентски портали",
        "SaaS платформи",
        "Персонализирани интерфейси",
      ],
      en: [
        "Administrative dashboards",
        "Business applications",
        "Customer portals",
        "SaaS platforms",
        "Custom interfaces",
      ],
    },
  },

  zustand: {
    name: "Zustand",
    icon: ZustandIcon,
    shortDescription: {
      bg: "Плавна работа и последователно изживяване",
      en: "Smooth performance and consistent experience",
    },
    description: {
      bg: "Zustand ни помага да управляваме информацията в приложенията по лесен и надежден начин. Това е особено полезно при по-сложни системи, където различни части на приложението трябва да работят заедно.",
      en: "Zustand helps us manage information within applications in a simple and reliable way. This is especially useful for complex systems where different parts of the application need to work together.",
    },
    whyWeChose: {
      bg: [
        "Подходящ за приложения с много интерактивни функции",
        "Помага за по-плавна работа на интерфейса",
        "Улеснява управлението на потребителските настройки",
        "Подходящ за мащабиращи се приложения",
        "Позволява по-лесна поддръжка на проекта",
      ],
      en: [
        "Suitable for applications with many interactive features",
        "Helps provide a smoother interface experience",
        "Makes managing user preferences easier",
        "Suitable for applications that need to scale",
        "Makes the project easier to maintain",
      ],
    },
    benefits: {
      bg: [
        "Потребителските настройки се запазват и използват последователно",
        "Различните части на приложението работят синхронизирано",
        "Интерфейсът реагира бързо на действията на потребителя",
        "Добавянето на нови функции е по-лесно",
        "Получавате по-предвидимо поведение на приложението",
      ],
      en: [
        "User preferences are preserved and used consistently",
        "Different parts of the application work in sync",
        "The interface responds quickly to user actions",
        "Adding new features is easier",
        "You get more predictable application behavior",
      ],
    },
    useCases: {
      bg: [
        "SaaS платформи",
        "Административни панели",
        "Клиентски портали",
        "Онлайн магазини",
        "Интерактивни уеб приложения",
      ],
      en: [
        "SaaS platforms",
        "Administrative dashboards",
        "Customer portals",
        "Online stores",
        "Interactive web applications",
      ],
    },
  },

  anthropic: {
    name: "Claude API",
    icon: AnthropicIcon,
    shortDescription: {
      bg: "Интелигентни AI решения за вашия бизнес",
      en: "Intelligent AI solutions for your business",
    },
    description: {
      bg: "Claude API ни позволява да добавяме интелигентни AI функции към уебсайтове и приложения. Използваме го за автоматизация, обработка на информация и създаване на решения, които могат да спестят време и да улеснят ежедневната работа.",
      en: "Claude API allows us to add intelligent AI features to websites and applications. We use it for automation, information processing, and creating solutions that can save time and simplify everyday work.",
    },
    whyWeChose: {
      bg: [
        "Позволява автоматизиране на повтарящи се задачи",
        "Помага при обработката на големи количества информация",
        "Подходящ за създаване на интелигентни асистенти",
        "Може да бъде адаптиран към конкретните нужди на бизнеса",
        "Позволява добавянето на AI без да променяме основната система",
      ],
      en: [
        "Allows us to automate repetitive tasks",
        "Helps process large amounts of information",
        "Suitable for creating intelligent assistants",
        "Can be adapted to specific business needs",
        "Allows AI to be added without changing the core system",
      ],
    },
    benefits: {
      bg: [
        "Спестявате време от ръчни и повтарящи се задачи",
        "Получавате по-бърз достъп до важна информация",
        "AI може да помага на служители и клиенти",
        "Можем да автоматизираме части от вашите бизнес процеси",
        "Получавате персонализирано AI решение според вашите нужди",
      ],
      en: [
        "Save time on manual and repetitive tasks",
        "Get faster access to important information",
        "AI can assist both employees and customers",
        "We can automate parts of your business processes",
        "Get a customized AI solution based on your needs",
      ],
    },
    useCases: {
      bg: [
        "AI асистенти",
        "Автоматизация на бизнес процеси",
        "Анализ на документи и информация",
        "Интелигентна обработка на клиентски запитвания",
        "AI функционалности в SaaS продукти",
      ],
      en: [
        "AI assistants",
        "Business process automation",
        "Document and information analysis",
        "Intelligent customer inquiry processing",
        "AI features in SaaS products",
      ],
    },
  },

  mui: {
    name: "MUI",
    icon: MUIIcon,
    shortDescription: {
      bg: "Готова основа за модерен интерфейс",
      en: "A strong foundation for modern interfaces",
    },
    description: {
      bg: "MUI ни помага да създаваме модерни и удобни интерфейси по-бързо. Използваме го, когато проектът има нужда от много различни екрани и функции, без да правим компромис с визията и удобството.",
      en: "MUI helps us create modern and intuitive interfaces faster. We use it when a project needs many different screens and features without compromising on design or usability.",
    },
    whyWeChose: {
      bg: [
        "Ускорява създаването на сложни интерфейси",
        "Помага за поддържане на единен дизайн",
        "Подходящ за бизнес приложения с много функционалности",
        "Позволява адаптиране към вашия бранд",
        "Осигурява добра основа за дългосрочно развитие",
      ],
      en: [
        "Speeds up the creation of complex interfaces",
        "Helps maintain a consistent design",
        "Suitable for business applications with many features",
        "Allows adaptation to your brand",
        "Provides a strong foundation for long-term growth",
      ],
    },
    benefits: {
      bg: [
        "Получавате професионален и подреден интерфейс",
        "Приложението е удобно за използване на различни устройства",
        "Новите екрани и функции могат да се добавят по-бързо",
        "Всички части на приложението изглеждат последователно",
        "Подходящо решение за по-големи и сложни бизнес системи",
      ],
      en: [
        "You get a professional and well-organized interface",
        "The application is easy to use across different devices",
        "New screens and features can be added faster",
        "All parts of the application maintain a consistent look",
        "A suitable solution for larger and more complex business systems",
      ],
    },
    useCases: {
      bg: [
        "Административни панели",
        "ERP и CRM системи",
        "Бизнес приложения",
        "SaaS платформи",
        "Клиентски портали",
      ],
      en: [
        "Administrative dashboards",
        "ERP and CRM systems",
        "Business applications",
        "SaaS platforms",
        "Customer portals",
      ],
    },
  },

  stripe: {
    name: "Stripe",
    icon: StripeIcon,
    shortDescription: {
      bg: "Сигурни и удобни онлайн плащания",
      en: "Secure and convenient online payments",
    },
    description: {
      bg: "Stripe ни позволява да добавяме надеждни онлайн плащания към вашия сайт или приложение. Така клиентите ви могат да плащат удобно, а бизнесът ви получава стабилна основа за управление на транзакции и абонаменти.",
      en: "Stripe allows us to add reliable online payments to your website or application. Your customers can pay conveniently while your business gets a solid foundation for managing transactions and subscriptions.",
    },
    whyWeChose: {
      bg: [
        "Поддържа различни начини на онлайн плащане",
        "Подходящ за еднократни плащания и абонаменти",
        "Позволява създаването на персонализиран процес за плащане",
        "Подходящ за бизнеси, които работят с клиенти от различни държави",
        "Лесно се интегрира с модерни уеб приложения",
      ],
      en: [
        "Supports different online payment methods",
        "Suitable for one-time payments and subscriptions",
        "Allows us to create a customized payment experience",
        "Suitable for businesses serving customers in different countries",
        "Easily integrates with modern web applications",
      ],
    },
    benefits: {
      bg: [
        "Вашите клиенти могат да плащат бързо и удобно",
        "Подходящ за продажби и абонаментни услуги",
        "Намалява необходимостта от ръчна обработка на плащания",
        "Помага за създаването на по-добро клиентско изживяване",
        "Позволява бизнесът ви да приема плащания онлайн",
      ],
      en: [
        "Your customers can pay quickly and conveniently",
        "Suitable for sales and subscription-based services",
        "Reduces the need for manual payment processing",
        "Helps create a better customer experience",
        "Allows your business to accept payments online",
      ],
    },
    useCases: {
      bg: [
        "Онлайн магазини",
        "SaaS абонаменти",
        "Платени услуги",
        "Онлайн платформи",
        "Marketplace решения",
      ],
      en: [
        "Online stores",
        "SaaS subscriptions",
        "Paid services",
        "Online platforms",
        "Marketplace solutions",
      ],
    },
  },
};

export default function TechnologyPage() {
  const params = useParams();
  const { locale } = useLanguage();
  const slug = params?.slug as string;
  const tech = TECHNOLOGIES_DATA[slug as keyof typeof TECHNOLOGIES_DATA];

  if (!tech) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          {locale === "bg" ? "Технология не намерена" : "Technology Not Found"}
        </h1>
        <p className="text-xl mb-8">
          {locale === "bg"
            ? "Технологията, която търсите, не съществува."
            : "The technology you're looking for doesn't exist."}
        </p>
        <Link
          href={`/${locale}/technologies`}
          className="text-primary hover:underline text-lg"
        >
          {locale === "bg"
            ? "← Назад към технологиите"
            : "← Back to Technologies"}
        </Link>
      </div>
    );
  }

  const Icon = tech.icon;

  return (
    <div className="min-h-screen bg-background mt-28 py-12">
      {/* Header with Back Link */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href={`/${locale}/technologies`}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            ← {locale === "bg" ? "Назад" : "Back"}
          </Link>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Title & Icon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-start gap-8"
        >
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center">
              <Icon className="w-14 h-14 fill-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-3 text-foreground">
              {tech.name}
            </h1>
            <p className="text-lg text-foreground/70">
              {tech.shortDescription[locale]}
            </p>
          </div>
        </motion.div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Overview */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Преглед" : "Overview"}
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              {tech.description[locale]}
            </p>
          </motion.section>

          {/* Right Column: Why We Chose */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Защо го избрахме" : "Why We Chose It"}
            </h2>
            <ul className="space-y-3">
              {tech.whyWeChose[locale].map((reason: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    ·
                  </span>
                  <span className="text-sm text-foreground/75">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* Second Row: Benefits & Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Benefits */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg" ? "Ключови предимства" : "Key Benefits"}
            </h2>
            <ul className="space-y-3">
              {tech.benefits[locale].map((benefit: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm text-foreground/75">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Right Column: Use Cases */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              {locale === "bg"
                ? "Типични случаи на употреба"
                : "Common Use Cases"}
            </h2>
            <ul className="space-y-3">
              {tech.useCases[locale].map((useCase: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    →
                  </span>
                  <span className="text-sm text-foreground/75">{useCase}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 justify-center items-center py-12"
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {locale === "bg"
              ? `Готови ли сте да изградите с ${tech.name}?`
              : `Ready to build with ${tech.name}?`}
          </h3>
          <p className="text-foreground/60 text-center">
            {locale === "bg"
              ? "Нека обсъдим как тази технология може да помогне на вашия проект."
              : "Let's discuss how this technology can power your project."}
          </p>
          <Link href={`/${locale}/contact-us`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-300"
            >
              {locale === "bg" ? "Свържете се" : "Get In Touch"}
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
