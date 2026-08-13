import {
  NextIcon,
  ReactIcon,
  ZustandIcon,
  Tailwind,
  TypescriptIcon,
  StripeIcon,
  ShadcnIcon,
  MUIIcon,
} from "../icons";

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
    title: "Основаването",
    description:
      "Web Services Bulgaria е основана с визия да доставя високо качествени дигитални решения.",
    year: "2019",
  },
  {
    id: 2,
    title: "Първи успешен проект",
    description:
      "Завършихме първия ни SaaS продукт, който трансформира работата на над 100 фирми.",
    year: "2020",
  },
  {
    id: 3,
    title: "Разширяване на екипа",
    description:
      "Привикохме талантливи дизайнери и разработчици, които разделят нашата визия.",
    year: "2021",
  },
  {
    id: 4,
    title: "Лидерство в иновациите",
    description:
      "Внедрихме първите AI-управлявани работни процеси за автоматизация на бизнеса.",
    year: "2022",
  },
  {
    id: 5,
    title: "Глобално разширяване",
    description:
      "Нашите решения сега помагат на клиенти от Европа и САЩ да оптимизират операциите.",
    year: "2023",
  },
  {
    id: 6,
    title: "Водещ доставчик",
    description:
      "Признати като един от водещите разработчици, работим с 50+ компании.",
    year: "2024",
  },
];
