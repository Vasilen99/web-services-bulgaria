"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/components/buttons/flip";
import { LanguageToggle } from "@/app/components/language-toggle";
import {
  contactUsLinks,
  technologiesMainLink,
  faqLink,
  aiWorkflowsLink,
} from "@/utility/links";
import { GlassCardWrapper as GlassCard } from "@/app/components/glass-card-wrapper";
import Image from "next/image";
import dynamic from "next/dynamic";

const MobileNavDrawer = dynamic(() =>
  import("@/app/components/mobile-nav-drawer").then((mod) => mod.default),
);

const ThemeToggle = dynamic(() =>
  import("@/app/components/theme-button").then((mod) => mod.default),
);
export const NAVIGATION_DATA = [
  // { name: "services", href: "#services" },
  // { name: "projects", href: "#work" },
  { name: "contact", href: contactUsLinks },
  { name: "aiWorkflows", href: aiWorkflowsLink },
  { name: "technologies", href: technologiesMainLink },
  { name: "faq", href: faqLink },
] as const;

export default function Header() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations();

  return (
    <header className="absolute top-0 left-0 right-0 w-full px-6 lg:px-12 py-6 max-w-screen z-50">
      <GlassCard
        blur={1}
        distortion={0}
        borderSize={0}
        borderRadius={30}
        backgroundColor="var(--primary)"
        backgroundOpacity={0.20000000000000004}
        innerLightColor="var(--primary-foreground)"
        innerLightSpread={1}
        innerLightBlur={7}
        innerLightOpacity={0.4}
        outerLightColor="var(--primary)"
        outerLightSpread={0}
        outerLightBlur={15}
        outerLightOpacity={0.5}
        brightness={151}
        className="w-full!"
      >
        {/* Logo */}
        <div className="px-8 flex items-center justify-between gap-4 w-full">
          <div className="flex gap-3 items-center shrink-0 relative z-10">
            <Link className="" href={`/${locale}`}>
              <Image
                src="/logos/WS-logo-correct.png"
                alt="Web Services Bulgaria Logo"
                width={50}
                height={50}
                loading="eager"
                className="w-auto h-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 relative z-10">
            {NAVIGATION_DATA.map((item) => (
              <FlipButton variant="link" key={item.name}>
                <FlipButtonFront>
                  <Link
                    className="text-primary text-base"
                    href={`/${locale}${item.href}`}
                  >
                    {t(item.name)}
                  </Link>
                </FlipButtonFront>
                <FlipButtonBack>
                  <Link
                    className="text-primary text-base"
                    href={`/${locale}${item.href}`}
                  >
                    {t(item.name)}
                  </Link>
                </FlipButtonBack>
              </FlipButton>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="lg:flex hidden gap-3">
            <LanguageToggle />
            {ThemeToggle && (
              <ThemeToggle
                showAsText={false}
                className="bg-primary-foreground rounded-md border border-primary size-10 p-0 overflow-hidden transition-all duration-300"
                title="Toggle theme"
              />
            )}
          </div>
          <div className="lg:hidden flex">
            {MobileNavDrawer && <MobileNavDrawer />}
          </div>
        </div>
      </GlassCard>
    </header>
  );
}
