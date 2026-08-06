export const translations = {
  // Navigation
  services: { bg: "Услуги", en: "Services" },
  projects: { bg: "Проекти", en: "Projects" },
  about: { bg: "За нас", en: "About Us" },
  contact: { bg: "Контакти", en: "Contact" },

  // Header
  online: { bg: "Онлайн", en: "Online" },
  available: { bg: "Свободни", en: "Available" },
  letsTalk: { bg: "Нека говорим", en: "Let's Talk" },
  letsStart: { bg: "Нека започнем", en: "Let's Start" },

  // Hero Section
  webDesignDev: {
    bg: "Уеб дизайн и разработка",
    en: "Web Design & Development",
  },
  heroDescription: {
    bg: "Премиум уеб дизайн, SEO и дигитални услуги, които помагат на вашия бизнес да се открои онлайн.",
    en: "Premium web design, SEO and digital services that help your business stand out online.",
  },
  heroHeadline: {
    bg: "Уебсайт, който оставя трайно впечатление!",
    en: "A Website That Makes a Lasting Impression!",
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
};

export type TranslationKey = keyof typeof translations;
