export interface FAQItem {
  id: string;
  questionBg: string;
  questionEn: string;
  answerBg: string;
  answerEn: string;
}

export interface FAQCategory {
  id: string;
  nameBg: string;
  nameEn: string;
  items: FAQItem[];
}

// Landing page FAQ - 4 most important questions
export const LANDING_PAGE_FAQ: FAQItem[] = [
  {
    id: "landing-1",
    questionBg: "Каква е обичайната времева рамка за проект?",
    questionEn: "What is the typical timeline for a project?",
    answerBg:
      "Времевата рамка варира в зависимост от сложността на проекта. Малки проекти обичайно трават 4-8 седмици, а по-сложни платформи могат да траят 3-6 месеца.",
    answerEn:
      "The timeline depends on project complexity. Small projects typically take 4-8 weeks, while more complex platforms may take 3-6 months.",
  },
  {
    id: "landing-2",
    questionBg: "Какви са вашите цени?",
    questionEn: "What are your pricing options?",
    answerBg:
      "Предлагаме гъвкаво ценообразуване на базата на вашите конкретни потребности. Всеки проект е уникален и ние работим с вас за установяване на справедлива цена.",
    answerEn:
      "We offer flexible pricing based on your specific needs. Every project is unique and we work with you to establish fair pricing.",
  },
  {
    id: "landing-3",
    questionBg: "Предоставляте ли поддръжка след стартирането?",
    questionEn: "Do you provide support after launch?",
    answerBg:
      "Да, ние предоставяме текуща поддръжка и обслужване. Можете да избирате от различни пакети за поддръжка в зависимост от вашите нужди.",
    answerEn:
      "Yes, we provide ongoing support and maintenance. You can choose from different support packages depending on your needs.",
  },
  {
    id: "landing-4",
    questionBg: "Какви технологии използвате?",
    questionEn: "What technologies do you use?",
    answerBg:
      "Специализираме се в React, Next.js, TypeScript, Node.js и Tailwind CSS. Ние избираме технологиите, които най-добре отговарят на вашия проект.",
    answerEn:
      "We specialize in React, Next.js, TypeScript, Node.js, and Tailwind CSS. We choose the technologies that best fit your project.",
  },
];

// Full FAQ page - organized by categories
export const FULL_FAQ: FAQCategory[] = [
  {
    id: "platform",
    nameBg: "За платформата",
    nameEn: "About Platform",
    items: [
      {
        id: "platform-1",
        questionBg: "Каквa е вашата платформа и как работи?",
        questionEn: "What is your platform and how does it work?",
        answerBg:
          "Нашата платформа е набор от услуги за проектиране и разработка на уеб приложения. Ние помагаме на компаниите да изградят цифрови решения от начало до край.",
        answerEn:
          "Our platform is a set of services for designing and developing web applications. We help companies build digital solutions from start to finish.",
      },
      {
        id: "platform-2",
        questionBg: "Каква е разликата между вашите услуги и конкурентите?",
        questionEn: "What makes your services different from competitors?",
        answerBg:
          "Ние фокусираме вниманието си върху качество, прозрачност и партньорство. Не ви третираме като просто клиент - вие сте партньор в процеса.",
        answerEn:
          "We focus on quality, transparency, and partnership. We don't treat you as just a client - you're a partner in the process.",
      },
      {
        id: "platform-3",
        questionBg: "Можете ли да работите с моя съществуваща платформа?",
        questionEn: "Can you work with my existing platform?",
        answerBg:
          "Да, имаме опит с интеграция и модернизиране на съществуващи приложения. Можем да помогнем с всичко - от миграция на данни до редизайн на UI.",
        answerEn:
          "Yes, we have experience integrating and modernizing existing applications. We can help with everything from data migration to UI redesign.",
      },
      {
        id: "platform-4",
        questionBg: "За какви типове бизнеси са подходящи вашите услуги?",
        questionEn: "What types of businesses are your services suitable for?",
        answerBg:
          "Работим с компании от всякакъв размер - от стартъпи до утвърдени бизнеси. Нашите решения се адаптират към вашия мащаб и индустрия.",
        answerEn:
          "We work with companies of all sizes - from startups to established businesses. Our solutions adapt to your scale and industry.",
      },
      {
        id: "platform-5",
        questionBg: "Предлагате ли изработка на онлайн магазини?",
        questionEn: "Do you offer e-commerce development?",
        answerBg:
          "Да, разработваме пълнофункционални онлайн магазини с интеграция на плащания, управление на продукти, инвентаризация и анализи на продажбите.",
        answerEn:
          "Yes, we develop fully functional online stores with payment integration, product management, inventory, and sales analytics.",
      },
      {
        id: "platform-6",
        questionBg: "Мобилно оптимизирани ли са вашите уебсайтове?",
        questionEn: "Are your websites mobile-optimized?",
        answerBg:
          "Абсолютно. Всички наши проекти са изградени с подход 'mobile-first' и работят безупречно на всички устройства и размери на екрани.",
        answerEn:
          "Absolutely. All our projects are built with a mobile-first approach and work flawlessly on all devices and screen sizes.",
      },
      {
        id: "platform-7",
        questionBg: "Помагате ли с SEO оптимизация?",
        questionEn: "Do you help with SEO optimization?",
        answerBg:
          "Да, всички наши уебсайтове са изградени със SEO най-добри практики - бърза скорост на зареждане, семантична структура, мета тагове и структурирани данни.",
        answerEn:
          "Yes, all our websites are built with SEO best practices - fast loading speed, semantic structure, meta tags, and structured data.",
      },
    ],
  },
  {
    id: "process",
    nameBg: "За процеса",
    nameEn: "About Process",
    items: [
      {
        id: "process-1",
        questionBg: "Как започваме работата?",
        questionEn: "How do we get started?",
        answerBg:
          "Всичко започва със консултация. Дискутираме вашите нужди, целите и бюджет. След това ние разработваме предложение и временен график.",
        answerEn:
          "We start with a consultation. We discuss your needs, goals, and budget. Then we develop a proposal and timeline.",
      },
      {
        id: "process-2",
        questionBg: "Как често се получават обновления за прогреса?",
        questionEn: "How often do I get updates on progress?",
        answerBg:
          "Ние предоставяме седмични обновления и редовни демонстрации на прогреса. Вие имате достъп до системата за управление на проекти в реално време.",
        answerEn:
          "We provide weekly updates and regular progress demos. You have access to our project management system in real-time.",
      },
      {
        id: "process-3",
        questionBg: "Какво се случва, ако искам промени по време на проекта?",
        questionEn: "What happens if I want changes during the project?",
        answerBg:
          "Промените са естествена част от процеса. Малки корекции са включени, а за по-големи промени обсъждаме влиянието им върху графика и бюджета прозрачно.",
        answerEn:
          "Changes are a natural part of the process. Small adjustments are included, and for larger changes we transparently discuss their impact on timeline and budget.",
      },
      {
        id: "process-4",
        questionBg: "Каква информация трябва да предоставя преди старта?",
        questionEn: "What information do I need to provide before we start?",
        answerBg:
          "Основно вашите бизнес цели, целева аудитория и предпочитания за дизайн. Ако имате лого, брандинг материали или съдържание - още по-добре. Ние ви водим през целия процес.",
        answerEn:
          "Mainly your business goals, target audience, and design preferences. If you have a logo, branding materials, or content - even better. We guide you through the entire process.",
      },
      {
        id: "process-5",
        questionBg: "Как протича тестването преди стартиране?",
        questionEn: "How does testing work before launch?",
        answerBg:
          "Извършваме цялостно тестване - функционалност, съвместимост с браузъри, мобилни устройства и производителност. Вие също получавате достъп за преглед и одобрение преди пускането.",
        answerEn:
          "We perform comprehensive testing - functionality, browser compatibility, mobile devices, and performance. You also get access for review and approval before launch.",
      },
      {
        id: "process-6",
        questionBg: "Можете ли да работите с моя вътрешен екип?",
        questionEn: "Can you work with my in-house team?",
        answerBg:
          "Да, често си сътрудничим с вътрешни екипи - дизайнери, маркетинг специалисти или разработчици. Адаптираме процеса си към вашата работна среда.",
        answerEn:
          "Yes, we often collaborate with in-house teams - designers, marketers, or developers. We adapt our process to your working environment.",
      },
      {
        id: "process-7",
        questionBg: "Какво се случва след завършване на проекта?",
        questionEn: "What happens after the project is completed?",
        answerBg:
          "Предаваме ви целия проект с документация и обучение. След това можете да изберете пакет за поддръжка или да продължите самостоятелно - изборът е ваш.",
        answerEn:
          "We hand over the entire project with documentation and training. After that, you can choose a support package or continue on your own - the choice is yours.",
      },
    ],
  },
  {
    id: "tech",
    nameBg: "За технологиите",
    nameEn: "About Technology",
    items: [
      {
        id: "tech-1",
        questionBg: "Дали мога да получа достъп до изходния код?",
        questionEn: "Do I get access to the source code?",
        answerBg:
          "Да, вие сте собственик на всичкия изходен код. Ние ви предоставяме пълен достъп и документация.",
        answerEn:
          "Yes, you own all the source code. We provide you with full access and documentation.",
      },
      {
        id: "tech-2",
        questionBg: "Как осигурявате сигурност и конфиденциалност?",
        questionEn: "How do you ensure security and privacy?",
        answerBg:
          "Ние следваме индустриски стандарти за сигурност, включително шифриране, редовни аудити и тестване на безопасност.",
        answerEn:
          "We follow industry security standards including encryption, regular audits, and security testing.",
      },
      {
        id: "tech-3",
        questionBg: "Каква е структурата на базата данни?",
        questionEn: "What is the database structure?",
        answerBg:
          "Ние използваме модерни, мащабируеми бази данни като PostgreSQL или MongoDB, в зависимост от вашите нужди. Всичко е документирано и оптимизирано за производителност.",
        answerEn:
          "We use modern, scalable databases like PostgreSQL or MongoDB, depending on your needs. Everything is documented and optimized for performance.",
      },
      {
        id: "tech-4",
        questionBg: "Къде се хоства уебсайтът ми?",
        questionEn: "Where is my website hosted?",
        answerBg:
          "Използваме надеждни облачни платформи като Vercel, AWS или DigitalOcean. Помагаме ви да изберете най-подходящото решение според трафика и бюджета ви.",
        answerEn:
          "We use reliable cloud platforms like Vercel, AWS, or DigitalOcean. We help you choose the most suitable solution based on your traffic and budget.",
      },
      {
        id: "tech-5",
        questionBg: "Мога ли сам да управлявам съдържанието на сайта си?",
        questionEn: "Can I manage my website content myself?",
        answerBg:
          "Да, интегрираме удобни CMS системи, които ви позволяват лесно да редактирате текстове, изображения и страници без технически познания.",
        answerEn:
          "Yes, we integrate user-friendly CMS systems that allow you to easily edit texts, images, and pages without technical knowledge.",
      },
      {
        id: "tech-6",
        questionBg: "Правите ли интеграции с външни услуги?",
        questionEn: "Do you build integrations with external services?",
        answerBg:
          "Да, интегрираме платежни системи, CRM, имейл маркетинг, аналитични инструменти и всякакви API услуги, необходими за вашия бизнес.",
        answerEn:
          "Yes, we integrate payment systems, CRM, email marketing, analytics tools, and any API services needed for your business.",
      },
      {
        id: "tech-7",
        questionBg: "Колко бърз ще бъде моят уебсайт?",
        questionEn: "How fast will my website be?",
        answerBg:
          "Скоростта е приоритет за нас. Използваме модерни техники като статично генериране, оптимизация на изображения и CDN, за да постигнем отлични резултати в Core Web Vitals.",
        answerEn:
          "Speed is a priority for us. We use modern techniques like static generation, image optimization, and CDN to achieve excellent Core Web Vitals scores.",
      },
    ],
  },
];
