export const translations = {
  // Navigation
  services: { bg: "Услуги", en: "Services" },
  projects: { bg: "Проекти", en: "Projects" },
  about: { bg: "За нас", en: "About Us" },
  contact: { bg: "Контакти", en: "Contact" },

  // Header
  online: { bg: "Онлайн", en: "Online" },
  available: { bg: "Свободни", en: "Available" },
  letsTalk: { bg: "Нека говорим", en: "Let's chat about it" },
  letsStart: { bg: "Нека започнем", en: "Let's Start" },

  // Hero Section
  webDesignDev: {
    bg: "Уеб дизайн и разработка",
    en: "Web Design & Development",
  },
  heroDescription: {
    bg: "Уеб платформи, SaaS продукти, CRM и ERP системи, проектирани и разработени от идея до стартиране.",
    en: "Web platforms, SaaS products, CRM & ERP systems designed and developed from idea to launch.",
  },
  heroHeadline: {
    bg: "Ние създаваме софтуер, който решава реални проблеми.",
    en: "We deliver software that solves real problems.",
  },

  // Common
  learnMore: { bg: "Научете повече", en: "Learn More" },
  readMore: { bg: "Прочетете повече", en: "Read More" },
  viewAll: { bg: "Виж всички", en: "View All" },
  getStarted: { bg: "Започнете", en: "Get Started" },

  // Theme
  switchToDark: { bg: "Превключи на тъмен режим", en: "Switch to dark mode" },
  switchToLight: {
    bg: "Превключи на светъл режим",
    en: "Switch to light mode",
  },

  // Language
  switchToEnglish: { bg: "Switch to English", en: "Switch to English" },
  switchToBulgarian: {
    bg: "Превключи на български",
    en: "Switch to Bulgarian",
  },

  allRightsReserved: {
    bg: "Всички права запазени.",
    en: "All rights reserved.",
  },

  // Contact Page
  contactHeadline: {
    bg: "Нека се свържем.",
    en: "Let's get in touch.",
  },
  contactDescription: {
    bg: "Имате проект или идея? Свържете се с нас и нека го обсъдим.",
    en: "Have a project or idea? Get in touch with us and let's discuss it.",
  },
  yourName: { bg: "Вашето име", en: "Your Name" },
  yourEmail: { bg: "Вашият имейл", en: "Your Email" },
  yourPhone: { bg: "Вашият телефон", en: "Your Phone" },
  subject: { bg: "Тема", en: "Subject" },
  message: { bg: "Съобщение", en: "Message" },
  sendMessage: { bg: "Изпрати съобщение", en: "Send Message" },
  namePlaceholder: { bg: "Иван Иванов", en: "John Doe" },
  emailPlaceholder: { bg: "ivan@example.com", en: "john@example.com" },
  phonePlaceholder: { bg: "+359 888 123 456", en: "+1 234 567 8900" },
  subjectPlaceholder: {
    bg: "Проект за уеб сайт",
    en: "Website Project",
  },
  messagePlaceholder: {
    bg: "Разкажете ни за вашия проект...",
    en: "Tell us about your project...",
  },
  sendingEmail: { bg: "Изпращане ...", en: "Sending..." },
  reactDescription: {
    bg: "Библиотека за изграждане на модерни и интерактивни потребителски интерфейси. Позволява разработката чрез преизползваеми компоненти и ефективно управление на UI.",
    en: "A library for building modern and interactive user interfaces. It enables development through reusable components and efficient UI management.",
  },
  nextDescription: {
    bg: "React framework за изграждане на бързи и мащабируеми уеб приложения. Предлага routing, server-side rendering и множество оптимизации за производителност.",
    en: "A React framework for building fast and scalable web applications. It provides routing, server-side rendering, and various performance optimizations.",
  },
  typescriptDescription: {
    bg: "JavaScript надграждане със статична типизация, което прави кода по-сигурен и предвидим. Помага за откриване на грешки още по време на разработка.",
    en: "A JavaScript superset with static typing that makes code safer and more predictable. It helps identify errors during development before they reach production.",
  },
  tailwindDescription: {
    bg: "Utility-first CSS framework за бързо изграждане на модерни и responsive интерфейси. Позволява стилизиране директно в компонентите без необходимост от големи CSS файлове.",
    en: "A utility-first CSS framework for building modern and responsive interfaces. It allows styling directly within components without relying on large CSS files.",
  },
  shadcnDescription: {
    bg: "Колекция от достъпни и адаптивни UI компоненти, изградени с React и Tailwind CSS. Предоставя гъвкава основа за създаване на модерен и последователен интерфейс.",
    en: "A collection of accessible and responsive UI components built with React and Tailwind CSS. It provides a flexible foundation for creating modern and consistent interfaces.",
  },
  zustandDescription: {
    bg: "Лека библиотека за управление на състоянието в React приложения. Предлага прост API и минимален boilerplate за споделяне на state между компоненти.",
    en: "A lightweight state management library for React applications. It offers a simple API with minimal boilerplate for sharing state between components.",
  },
};

export type TranslationKey = keyof typeof translations;
