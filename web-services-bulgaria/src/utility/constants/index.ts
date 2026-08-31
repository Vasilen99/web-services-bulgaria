import {
  NextIcon,
  ReactIcon,
  ZustandIcon,
  Tailwind,
  TypescriptIcon,
  StripeIcon,
  ShadcnIcon,
  MUIIcon,
  OpenAIIcon,
  AnthropicIcon,
} from "../icons";
import type { AIWorkflow, AIModel } from "@/page-components/ai-details";

export type FlipCardData = {
  keyFirstName: string;
  keyLastName: string;
  titleKey?: string;
  image: string;
  bioKey: string;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
};

export type PartnerData = {
  id: string;
  keyFirstName: string;
  keyLastName: string;
  titleKey: string;
  image: string;
  bioKey: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  }[];
};

type Technology = {
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
};
export const TECHNOLOGIES_DATA = {
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

export const ACHIEVEMENTS = [
  {
    id: 1,
    titleKey: "achievement1Title",
    descriptionKey: "achievement1Description",
    year: "2024",
  },
  {
    id: 2,
    titleKey: "achievement2Title",
    descriptionKey: "achievement2Description",
    year: "2024",
  },
  {
    id: 3,
    titleKey: "achievement3Title",
    descriptionKey: "achievement3Description",
    year: "2024",
  },
  {
    id: 4,
    titleKey: "achievement4Title",
    descriptionKey: "achievement4Description",
    year: "2025",
  },
  {
    id: 5,
    titleKey: "achievement5Title",
    descriptionKey: "achievement5Description",
    year: "2026",
  },
];

export const TEAM_MEMBERS: FlipCardData[] = [
  {
    keyFirstName: "vasilen",
    keyLastName: "minkov",
    titleKey: "ceoFounder",
    image: "/team/vasilen.jpg",
    bioKey: "vasilenDescription",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vasilen-minkov-9117011b0/",
      facebook: "https://www.facebook.com/vasilen.minkov.1",
      instagram: "https://www.instagram.com/vasilenminkovv/",
    },
  },
  {
    keyFirstName: "miroslav",
    keyLastName: "dimitrov",
    titleKey: "frontEndDeveloper",
    image: "/team/miroslav.jpg",
    bioKey: "miroslavDescription",

    socialLinks: {
      linkedin: "https://www.linkedin.com/in/miroslav-dimitrov-534805263/",
      facebook: "https://www.facebook.com/png.insta",
      instagram: "https://www.instagram.com/21_mir0slav/",
    },
  },
];
export const TECHNOLOGIES: Technology[] = [
  {
    icon: NextIcon,
    name: "Next.js",
    slug: "nextjs",
    description: {
      bg: "Next.js е платформа за изграждане на бързи и интерактивни уебсайтове. Всичко, което трябва, е вградено – от най-простите до най-сложните функции.",
      en: "Next.js is an easy platform for building fast and interactive websites. Everything you need is built-in—from the simplest to the most complex features.",
    },
    benefits: {
      bg: [
        "Вашият сайт зарежда бързо, което подобрява потребителското изживяване",
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
      bg: "React е библиотека, която прави уебсайтовете интерактивни. Когато щракнете, напишете или се преместите, всичко се случва без спиране.",
      en: "React is a library that makes websites interactive and responsive. When you click, type, or move, everything happens smoothly without interruption.",
    },
    benefits: {
      bg: [
        "Интерактивни елементи, които реагират незабавно на ваши действия",
        "Намалено натоварване при използване",
        "Лесна поддръжка и обновяване на функциите",
        "Еднакво поведение на всички браузъри",
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
      bg: "TypeScript помага разработчиците да пишат по-безопасен код. Той намира грешки още преди сайтът да бъде пуснат, което означава по-малко проблеми за вас.",
      en: "TypeScript helps developers write safer code. It finds errors before the site goes live, which means fewer problems for you.",
    },
    benefits: {
      bg: [
        "По-малко грешки и неочаквани проблеми",
        "Лесно разширяване на функциите без страх от счупване",
        "По-бързо разработване благодарение на разнообразието от библиотеки и инструменти",
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
      bg: "Tailwind CSS е инструмент, който прави стилизирането на уебсайтове по-бързо и по-лесно. Унифицирана палитра от цветове, фонтове и поведение",
      en: "Tailwind CSS is a tool that makes designing websites faster and easier. Styling is applied directly without writing lots of code.",
    },
    benefits: {
      bg: [
        "Красив дизайн, който работи на всички устройства",
        "Възможност за тъмен режим, който е лес за очите",
        "Мигновено отразяване на промените без нужда от рестарт",
        "По-малко файлове означават по-бързо зареждане",
      ],
      en: [
        "Beautiful design that works on all devices",
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
      bg: "shadcn/ui е колекция от готови компоненти, които могат да бъдат използвани веднага. Това ускорява разработката и гарантира идентичен дизайн.",
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
        "Удобно използване на всички устройства.",
        "Бързо създаване на нови страници и функции",
        "Еднакъв и подреден дизайн във всички части на сайта",
        "Лесно адаптиране на визията според вашия бранд",
      ],
      en: [
        "Modern and professional-looking website",
        "Easy to use on all devices",
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
export const AI_MODELS: AIModel[] = [
  {
    name: "OpenAI",
    icon: OpenAIIcon,
    overviewKey: "openaiOverview",
    strengthsKey: [
      "openaiStrength1",
      "openaiStrength2",
      "openaiStrength3",
      "openaiStrength4",
    ],
    useCasesKey: ["openaiUseCase1", "openaiUseCase2", "openaiUseCase3"],
  },
  {
    name: "Anthropic Claude",
    icon: AnthropicIcon,
    overviewKey: "anthropicOverview",
    strengthsKey: [
      "anthropicStrength1",
      "anthropicStrength2",
      "anthropicStrength3",
      "anthropicStrength4",
    ],
    useCasesKey: [
      "anthropicUseCase1",
      "anthropicUseCase2",
      "anthropicUseCase3",
    ],
  },
];
export const AI_WORKFLOWS: AIWorkflow[] = [
  {
    id: "research-analysis",
    titleKey: "workflowResearchTitle",
    descriptionKey: "workflowResearchDesc",
    benefitsKey: [
      "workflowResearchBenefit1",
      "workflowResearchBenefit2",
      "workflowResearchBenefit3",
    ],
    modelKey: "usedWithOpenAI",
  },
  {
    id: "content-generation",
    titleKey: "workflowContentTitle",
    descriptionKey: "workflowContentDesc",
    benefitsKey: [
      "workflowContentBenefit1",
      "workflowContentBenefit2",
      "workflowContentBenefit3",
    ],
    modelKey: "usedWithAnthropic",
  },
  {
    id: "data-processing",
    titleKey: "workflowDataTitle",
    descriptionKey: "workflowDataDesc",
    benefitsKey: [
      "workflowDataBenefit1",
      "workflowDataBenefit2",
      "workflowDataBenefit3",
    ],
    modelKey: "usedWithOpenAI",
  },
  {
    id: "customer-interactions",
    titleKey: "workflowCustomerTitle",
    descriptionKey: "workflowCustomerDesc",
    benefitsKey: [
      "workflowCustomerBenefit1",
      "workflowCustomerBenefit2",
      "workflowCustomerBenefit3",
    ],
    modelKey: "usedWithAnthropic",
  },
];

export const PARTNERS_DATA: PartnerData[] = [
  {
    id: "galq-nencheva",
    keyFirstName: "galq",
    keyLastName: "nencheva",
    titleKey: "graficDesigner",
    image: "/partners/galq-snimka.png",
    bioKey: "galqDescription",
    socials: [
      {
        linkedin: "https://www.linkedin.com/in/galyanencheva/",
        facebook: "https://www.facebook.com/galya.nencheva",
        instagram: "https://www.instagram.com/beeluvdpublishing/?hl=bg",
      },
    ],
  },
  {
    id: "plamen-petkov",
    keyFirstName: "plamen",
    keyLastName: "petkov",
    titleKey: "ceoOasisSolutions",
    image: "https://oasisssolutions.com/storage/custom/team/plamen.png",
    bioKey: "plamenDescription",
    socials: [
      {
        linkedin: "https://www.linkedin.com/in/plamen-petkov-4b2096228/",
        facebook: "https://www.facebook.com/profile.php?id=100095255084767",
        instagram: "https://www.instagram.com/pacata_petkov/",
      },
    ],
  },
  {
    id: "natalia-lazarova",
    keyFirstName: "natalia",
    keyLastName: "lazarova",
    titleKey: "marketingSpecialist",
    image: "/partners/nataliq-snimka.png",
    bioKey: "nataliaDescription",
    socials: [
      {
        linkedin: "https://www.linkedin.com/in/nataliya-lazarova-29897b234/",
        facebook: "https://www.facebook.com/profile.php?id=100012502009075",
        instagram: "https://www.instagram.com/nataliyalazarova/",
      },
    ],
  },
];

export const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;

export const commonInnerPageSectionStyles = "relative px-4 sm:px-6 lg:px-8";

export const innerPageMainSectionStyles = "max-w-5xl mx-auto";
