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
          "Нашата платформа е набор от услуги за проектиране и разработка на уеб приложения. Ние помагаме на компаниите да建立 цифрови решения от начало до край.",
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
    ],
  },
];
