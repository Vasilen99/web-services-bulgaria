This is a [Next.js](https://nextjs.org) 16 project with multi-language support (Bulgarian/English) and TypeScript.

## 🌍 Multi-Language Routing

The project now supports automatic locale-based routing with `/bg/` and `/en/` parameters.

**Quick Routes:**

- `http://localhost:3000/bg` - Bulgarian home page
- `http://localhost:3000/en` - English home page
- `http://localhost:3000/` - Redirects to `/bg` (default locale)
- `http://localhost:3000/bg/about` - Bulgarian about page
- `http://localhost:3000/en/about` - English about page

See `RESTRUCTURE.md` for complete documentation on the i18n setup.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/bg](http://localhost:3000/bg) or [http://localhost:3000/en](http://localhost:3000/en) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/[locale]/          # All routes nested under locale parameter
├── i18n/                  # Translation files and configuration
├── components/            # Reusable React components
├── page-components/       # Page-specific components
├── lib/                   # Utility functions and contexts
├── styles/               # Global styles
└── public/               # Static assets
```

## 🌐 Translation System

**File Structure:**

- `src/i18n/config.ts` - Locale configuration
- `src/i18n/bg.json` - Bulgarian translations
- `src/i18n/en.json` - English translations
- `src/i18n/dictionaries.ts` - Dictionary loader

**Using translations in components:**

```tsx
import { useLanguage } from "@/lib/language-context";

export default function Component() {
  const { t } = useLanguage();
  return <h1>{t({ bg: "Начало", en: "Home" })}</h1>;
}
```

## 📝 Adding New Pages

Use the `PAGE_TEMPLATE.tsx` as a reference. New pages must:

1. Accept `locale` from params
2. Implement `generateStaticParams()` to pre-render both locales
3. Implement `generateMetadata()` for SEO
4. Use `createMetadata()` helper from `@/lib/seo`

## 🔄 Language Switcher

Import and use the `LanguageSwitcher` component in your layout:

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

It automatically handles language switching while preserving the current page path.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For multi-language setup details, see:

- `RESTRUCTURE.md` - Complete restructuring guide
- `PAGE_TEMPLATE.tsx` - Template for new pages

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
