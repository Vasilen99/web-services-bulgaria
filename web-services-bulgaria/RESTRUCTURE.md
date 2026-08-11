# Multi-Language Restructuring Guide

## Project Structure Overview

Your project has been restructured to support multi-language routing with `/bg/` and `/en/` locale parameters.

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale-aware root layout
│   │   ├── page.tsx            # Home page
│   │   ├── (static)/
│   │   │   └── contact-us/
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── partners/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── technologies/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── sitemap.ts              # Multi-locale sitemap
│   └── robots.ts               # SEO robots config
├── components/
│   ├── language-switcher.tsx   # NEW: Language switcher component
│   ├── ...other components
│   └── animate-ui/
├── i18n/                        # NEW: i18n folder
│   ├── config.ts               # Locale configuration
│   ├── dictionaries.ts         # Dictionary loader
│   ├── bg.json                 # Bulgarian translations
│   └── en.json                 # English translations
├── lib/
│   ├── seo.ts                  # NEW: SEO metadata helpers
│   ├── language-context.tsx    # UPDATED: Now supports locale parameter
│   ├── translations.ts         # OLD: Keep for backward compatibility
│   └── ...other libs
├── page-components/
│   └── ...page components
├── proxy.ts                     # NEW: Middleware for locale redirect
├── public/
│   └── ...static files
└── styles/
    └── globals.css
```

## Key Files & Their Purposes

### 1. **src/i18n/config.ts**

Defines supported locales and default locale.

```typescript
export const locales = ["bg", "en"] as const;
export const defaultLocale: Locale = "bg";
```

### 2. **src/i18n/dictionaries.ts**

Loads translations from JSON files.

### 3. **src/i18n/bg.json & en.json**

Structured translation files organized by sections:

- navigation
- header
- hero
- contact
- etc.

### 4. **src/proxy.ts**

Middleware that redirects root `/` to `/bg` (default locale). In Next.js 16, this is the modern replacement for middleware.ts.

### 5. **src/lib/seo.ts**

Helper function `createMetadata()` for generating locale-specific SEO metadata.

### 6. **src/lib/language-context.tsx**

Updated to work with URL-based locale routing (instead of localStorage).

### 7. **src/components/language-switcher.tsx**

NEW component that switches between languages while preserving pathname:

- `/bg/about` → `/en/about`
- `/en/portfolio` → `/bg/portfolio`

### 8. **src/app/[locale]/layout.tsx**

Main layout that:

- Validates locale parameter
- Generates static params for both locales
- Sets `<html lang={locale}>`
- Includes `<LanguageProvider initialLocale={locale}>`

### 9. **src/app/[locale]/page.tsx**

Updated home page with:

- `generateStaticParams()` for static generation
- `generateMetadata()` for locale-specific SEO

### 10. **src/app/sitemap.ts**

Generates sitemap for both locales:

```
/bg
/bg/about
/bg/services
/en
/en/about
/en/services
```

## Routing Examples

| URL                       | Locale              | Route            |
| ------------------------- | ------------------- | ---------------- |
| `/`                       | redirect to → `/bg` | root redirect    |
| `/bg`                     | Bulgarian           | home page        |
| `/en`                     | English             | home page        |
| `/bg/about`               | Bulgarian           | about page       |
| `/en/about`               | English             | about page       |
| `/bg/portfolio/project-1` | Bulgarian           | portfolio detail |
| `/en/portfolio/project-1` | English             | portfolio detail |

## Using Translations

### In Client Components

```tsx
import { useLanguage } from "@/lib/language-context";

export default function MyComponent() {
  const { t } = useLanguage();

  return <h1>{t({ bg: "Начало", en: "Home" })}</h1>;
}
```

### In Server Components (Page.tsx)

Get locale from `params`:

```tsx
type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return createMetadata(locale as Locale, {
    title: locale === "bg" ? "Начало" : "Home",
    description: "...",
    path: "",
  });
}
```

## Next Steps

### 1. **Update All Page Components**

Make sure all pages under `[locale]` have:

- `generateStaticParams()` function
- `generateMetadata()` function
- Proper locale parameter handling

Example template:

```tsx
type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return createMetadata(locale as Locale, {
    title: locale === "bg" ? "BG Title" : "EN Title",
    description: locale === "bg" ? "BG Desc" : "EN Desc",
    path: "/your-page",
  });
}

export default async function YourPage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <main>...</main>;
}
```

### 2. **Update Dynamic Routes**

For routes like `/[locale]/partners/[slug]/page.tsx`:

```tsx
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    partnersData.map((partner) => ({
      locale,
      slug: partner.slug,
    })),
  );
}
```

### 3. **Update Header/Navigation Components**

Add the `LanguageSwitcher`:

```tsx
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Header() {
  return (
    <header>
      {/* ... */}
      <LanguageSwitcher />
    </header>
  );
}
```

### 4. **Environment Variables**

Add to `.env`:

```
NEXT_PUBLIC_BASE_URL=https://web-services-bulgaria.com
```

This is used by the sitemap and SEO functions.

## SEO Features

✅ Automatic hreflang tags for multi-language support
✅ Canonical URLs for each page
✅ Open Graph metadata with locale
✅ XML Sitemap with both languages
✅ Robots.txt configuration
✅ Proper `<html lang="bg">` / `<html lang="en">`

## Common Issues & Solutions

### Issue: "useParams not working in layout"

**Solution**: Use `params` prop directly in layout - `params` is guaranteed to be available.

### Issue: "Static generation failing"

**Solution**: Make sure `generateStaticParams()` returns all required locale combinations.

### Issue: "Language switcher not working"

**Solution**: Check that you're using `<Link>` from `next/link` and not a regular `<a>` tag.

### Issue: "Old translations still being used"

**Solution**: The old `translations.ts` is still there for backward compatibility. Migrate components to use the new system:

```tsx
// OLD
{
  t(translations.about);
}

// NEW
{
  t({ bg: "За нас", en: "About" });
}
```

## Migration Checklist

- [ ] Update all `page.tsx` files with `generateStaticParams()` and `generateMetadata()`
- [ ] Update all dynamic routes `[slug]/page.tsx` with locale + slug combinations
- [ ] Replace `LanguageProvider` usage in components (if using old localStorage system)
- [ ] Update Header component to include `LanguageSwitcher`
- [ ] Test all routes: `/bg`, `/en`, `/bg/about`, `/en/about`, etc.
- [ ] Verify sitemap generation: `yoursite.com/sitemap.xml`
- [ ] Check robots.txt: `yoursite.com/robots.txt`
- [ ] Test language switching on different pages
- [ ] Verify canonical URLs in `<head>` for each page

## Deployment

1. Build: `npm run build`
2. The sitemap and robots.txt will be auto-generated
3. All routes should be pre-rendered with `generateStaticParams()`
4. Test on staging before production
