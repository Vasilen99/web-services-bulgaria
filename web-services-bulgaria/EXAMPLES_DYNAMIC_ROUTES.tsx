// Example: How to update src/app/[locale]/partners/[slug]/page.tsx

// import type { Metadata } from "next";
// import { notFound } from "next/navigation";

// import { locales, type Locale } from "@/i18n/config";
// import { createMetadata } from "@/lib/seo";
// import { PARTNERS_DATA } from "@/lib/partners-data";

// type Props = {
//   params: Promise<{
//     locale: string;
//     slug: string;
//   }>;
// };

// export async function generateStaticParams() {
//   // Generate all locale + slug combinations
//   return locales.flatMap((locale) =>
//     PARTNERS_DATA.map((partner) => ({
//       locale,
//       slug: partner.slug,
//     }))
//   );
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { locale, slug } = await params;

//   if (!locales.includes(locale as Locale)) {
//     notFound();
//   }

//   // Find the partner by slug
//   const partner = PARTNERS_DATA.find((p) => p.slug === slug);

//   if (!partner) {
//     notFound();
//   }

//   const isBg = locale === "bg";

//   return createMetadata(locale as Locale, {
//     title: isBg ? partner.nameBg : partner.nameEn,
//     description: isBg ? partner.descriptionBg : partner.descriptionEn,
//     path: `/partners/${slug}`,
//   });
// }

// export default async function PartnerDetailPage({ params }: Props) {
//   const { locale, slug } = await params;

//   if (!locales.includes(locale as Locale)) {
//     notFound();
//   }

//   const partner = PARTNERS_DATA.find((p) => p.slug === slug);

//   if (!partner) {
//     notFound();
//   }

//   const isBg = locale === "bg";

//   return (
//     <main className="min-h-screen">
//       <div className="container mx-auto px-4 py-12">
//         <h1>{isBg ? partner.nameBg : partner.nameEn}</h1>
//         <p>{isBg ? partner.descriptionBg : partner.descriptionEn}</p>

//         {/* Add more content for the partner */}
//       </div>
//     </main>
//   );
// }

// ============================================
// Similar pattern for:
// - src/app/[locale]/technologies/[slug]/page.tsx
// - src/app/[locale]/(static)/contact-us/page.tsx
// ============================================

// Update your data files to include locale-specific content:
// Example for partners-data.ts:

export interface Partner {
  id: string;
  slug: string;
  nameBg: string;
  nameEn: string;
  descriptionBg: string;
  descriptionEn: string;
  // ... other fields
}

export const PARTNERS_DATA: Partner[] = [
  {
    id: "partner-1",
    slug: "partner-one",
    nameBg: "Партньор Един",
    nameEn: "Partner One",
    descriptionBg: "Описание на партньор един на български...",
    descriptionEn: "Description of partner one in English...",
    // ... other fields
  },
  // ... more partners
];

// ============================================
// For the contact-us page (non-dynamic):
// src/app/[locale]/(static)/contact-us/page.tsx
// ============================================

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { locales, type Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const isBg = locale === "bg";

  return createMetadata(locale as Locale, {
    title: isBg ? "Контакти | Company" : "Contact Us | Company",
    description: isBg
      ? "Свържете се с нас за повече информация..."
      : "Get in touch with us for more information...",
    path: "/contact-us",
  });
}

export default async function ContactUsPage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Your contact form and content here */}
    </main>
  );
}
