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
};

export type TranslationKey = keyof typeof translations;
