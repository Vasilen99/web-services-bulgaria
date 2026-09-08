import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  LOCALES,
  DEFAULT_HREFLANG_LOCALE,
  COMMON_GEO_METADATA,
} from "./constants";

type Locale = (typeof LOCALES)[number];
type Localized<T> = T | Record<Locale, T>;

export interface PageMetadataOptions {
  locale: Locale | string;
  /** Path without locale prefix, e.g. "/technologies/react". Use "" for home. */
  pathname: string;
  title: Localized<string>;
  description: Localized<string>;
  keywords?: Localized<string[]>;
  image?: string;
  imageAlt?: Localized<string>;
  pageType?: string;
  category?: Localized<string>;
  articleSection?: Localized<string>;
  noIndex?: boolean;
  /** Any additional `<meta name="…">` entries to emit. */
  extra?: Record<string, string>;
  /** Tolerate legacy/unknown options from older call sites. */
  [key: string]: unknown;
}

const OG_LOCALE: Record<string, string> = { bg: "bg_BG", en: "en_US" };
const LANGUAGE_NAME: Record<string, string> = { bg: "Bulgarian", en: "English" };

function pick<T>(value: Localized<T> | undefined, locale: string): T | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const map = value as Record<string, T>;
    return map[locale] ?? map[DEFAULT_HREFLANG_LOCALE];
  }
  return value as T;
}

/** Ensures a path starts with "/" (or is empty) and has no trailing slash. */
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "";
  const trimmed = pathname.replace(/\/+$/, "").replace(/^\/+/, "");
  return `/${trimmed}`;
}

export function buildLanguageAlternates(pathname: string): Record<string, string> {
  const path = normalizePath(pathname);
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${SITE_URL}/${l}${path}`;
  languages["x-default"] = `${SITE_URL}/${DEFAULT_HREFLANG_LOCALE}${path}`;
  return languages;
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const {
    locale,
    pathname,
    image = DEFAULT_OG_IMAGE,
    pageType,
    noIndex = false,
  } = options;
  const title = pick(options.title, locale) ?? SITE_NAME;
  const description = pick(options.description, locale) ?? "";
  const keywords = pick(options.keywords, locale);
  const category = pick(options.category, locale);
  const articleSection = pick(options.articleSection, locale);
  const imageAlt = pick(options.imageAlt, locale) ?? title;

  const path = normalizePath(pathname);
  const canonical = `${SITE_URL}/${locale}${path}`;
  const ogLocale = OG_LOCALE[locale] ?? OG_LOCALE.en;
  const alternateLocales = LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    alternates: {
      canonical,
      languages: buildLanguageAlternates(path),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      locale: ogLocale,
      alternateLocale: alternateLocales,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
      ...COMMON_GEO_METADATA,
      "ai:language": LANGUAGE_NAME[locale] ?? "English",
      "schema:inLanguage": ogLocale,
      ...(pageType ? { "schema:pageType": pageType } : {}),
      ...(category ? { "schema:category": category } : {}),
      ...(articleSection ? { "article:section": articleSection } : {}),
      ...(options.extra ?? {}),
    },
  };
}
