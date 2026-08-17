"use client";

import { useTranslations, useLocale } from "next-intl";
import { HeadingSection } from "@/components/heading-section";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { useRouter } from "next/navigation";
import { teamLink } from "@/utility/links";
import LottieAnimation from "@/app/components/lottie-animation";
import { useEffect, useState } from "react";

interface TeamMember {
  keyFirstName: string;
  keyLastName: string;
  title: string;
  animationPath: string;
  descriptionKey: string;
}

const TEAM_ROLES: TeamMember[] = [
  {
    keyFirstName: "vasilen",
    keyLastName: "minkov",
    title: "CEO & Founder",
    animationPath: "/animations/ceo.lottie",
    descriptionKey: "vasilenDescription",
  },
  {
    keyFirstName: "natalia",
    keyLastName: "lazarova",
    title: "Marketing Specialist",
    animationPath: "/animations/marketing.lottie",
    descriptionKey: "nataliaDescription",
  },
  {
    keyFirstName: "miroslav",
    keyLastName: "dimitrov",
    title: "Software Engineer",
    animationPath: "/animations/Developer Front End.lottie",
    descriptionKey: "miroslavDescription",
  },
  {
    keyFirstName: "galq",
    keyLastName: "nencheva",
    title: "Graphic Designer",
    animationPath: "/animations/uiux designer.lottie",
    descriptionKey: "galqDescription",
  },
];

export default function Team() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [visibleAnimations, setVisibleAnimations] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const memberId = entry.target.getAttribute("data-member-id");
            if (memberId) {
              setVisibleAnimations((prev) => new Set([...prev, memberId]));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-member-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="bg-primary py-12 lg:px-12 px-4">
      <HeadingSection
        title={t("teamHeading")}
        subtitle={t("teamSubheading")}
        textColor="primary-foreground"
        type="landing"
      />

      {/* Minimalistic Animated Team Section - No Cards */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1: CEO - Full Width Animation Left, Info Right */}
        <div
          data-member-id={`${TEAM_ROLES[0].keyFirstName}-${TEAM_ROLES[0].keyLastName}`}
          className="mb-16"
        >
          <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start gap-3 lg:justify-center justify-start lg:pt-12">
            {/* Animation Left */}
            <div className="lg:w-1/2 w-80 lg:shrink-0 shrink">
              <div className="lg:h-80 h-40">
                <LottieAnimation
                  src={TEAM_ROLES[0].animationPath}
                  isVisible={visibleAnimations.has(
                    `${TEAM_ROLES[0].keyFirstName}-${TEAM_ROLES[0].keyLastName}`,
                  )}
                />
              </div>
            </div>

            {/* Info Right */}
            <div className="lg:w-1/2 w-fit space-y-4">
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-primary-foreground">
                  {t(`${TEAM_ROLES[0].keyFirstName}`)}
                </h3>
                <h4 className="text-xl text-primary-foreground/60">
                  {t(`${TEAM_ROLES[0].keyLastName}`)}
                </h4>
              </div>
              <div className="w-12 h-1 bg-primary-foreground/30" />
              <p className="text-sm font-semibold text-primary-foreground/70 tracking-wide uppercase">
                {TEAM_ROLES[0].title}
              </p>
              <p className="text-base text-primary-foreground/60 leading-relaxed">
                {t(TEAM_ROLES[0].descriptionKey)}
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Marketing - Info Left, Animation Right */}
        <div
          data-member-id={`${TEAM_ROLES[1].keyFirstName}-${TEAM_ROLES[1].keyLastName}`}
          className="mb-16"
        >
          <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start gap-3 lg:justify-center justify-start lg:pt-12">
            {/* Info Left */}
            <div className="lg:w-1/2 w-fit space-y-4 order-last lg:order-first">
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-primary-foreground">
                  {t(`${TEAM_ROLES[1].keyFirstName}`)}
                </h3>
                <h4 className="text-xl text-primary-foreground/60">
                  {t(`${TEAM_ROLES[1].keyLastName}`)}
                </h4>
              </div>
              <div className="w-12 h-1 bg-primary-foreground/30" />
              <p className="text-sm font-semibold text-primary-foreground/70 tracking-wide uppercase">
                {TEAM_ROLES[1].title}
              </p>
              <p className="text-base text-primary-foreground/60 leading-relaxed">
                {t(TEAM_ROLES[1].descriptionKey)}
              </p>
            </div>

            {/* Animation Right */}
            <div className="lg:w-1/2 w-80 lg:shrink-0 shrink">
              <div className="lg:h-80 h-40">
                <LottieAnimation
                  src={TEAM_ROLES[1].animationPath}
                  isVisible={visibleAnimations.has(
                    `${TEAM_ROLES[1].keyFirstName}-${TEAM_ROLES[1].keyLastName}`,
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Software Engineer - Full Width Animation Left, Info Right */}
        <div
          data-member-id={`${TEAM_ROLES[2].keyFirstName}-${TEAM_ROLES[2].keyLastName}`}
          className="mb-16"
        >
          <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start gap-3 lg:justify-center justify-start lg:pt-12">
            {/* Animation Left */}
            <div className="lg:w-1/2 w-80 lg:shrink-0 shrink">
              <div className="lg:h-80 h-40">
                <LottieAnimation
                  src={TEAM_ROLES[2].animationPath}
                  isVisible={visibleAnimations.has(
                    `${TEAM_ROLES[2].keyFirstName}-${TEAM_ROLES[2].keyLastName}`,
                  )}
                />
              </div>
            </div>

            {/* Info Right */}
            <div className="lg:w-1/2 w-fit space-y-4">
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-primary-foreground">
                  {t(`${TEAM_ROLES[2].keyFirstName}`)}
                </h3>
                <h4 className="text-xl text-primary-foreground/60">
                  {t(`${TEAM_ROLES[2].keyLastName}`)}
                </h4>
              </div>
              <div className="w-12 h-1 bg-primary-foreground/30" />
              <p className="text-sm font-semibold text-primary-foreground/70 tracking-wide uppercase">
                {TEAM_ROLES[2].title}
              </p>
              <p className="text-base text-primary-foreground/60 leading-relaxed">
                {t(TEAM_ROLES[2].descriptionKey)}
              </p>
            </div>
          </div>
        </div>

        {/* Row 4: Designer - Info Left, Animation Right */}
        <div
          data-member-id={`${TEAM_ROLES[3].keyFirstName}-${TEAM_ROLES[3].keyLastName}`}
          className="mb-16"
        >
          <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start gap-3 lg:justify-center justify-start lg:pt-12">
            {/* Info Left */}
            <div className="lg:w-1/2 w-fit space-y-4 order-last lg:order-first">
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-primary-foreground">
                  {t(`${TEAM_ROLES[3].keyFirstName}`)}
                </h3>
                <h4 className="text-xl text-primary-foreground/60">
                  {t(`${TEAM_ROLES[3].keyLastName}`)}
                </h4>
              </div>
              <div className="w-12 h-1 bg-primary-foreground/30" />
              <p className="text-sm font-semibold text-primary-foreground/70 tracking-wide uppercase">
                {TEAM_ROLES[3].title}
              </p>
              <p className="text-base text-primary-foreground/60 leading-relaxed">
                {t(TEAM_ROLES[3].descriptionKey)}
              </p>
            </div>

            {/* Animation Right */}
            <div className="lg:w-1/2 w-80 lg:shrink-0 shrink">
              <div className="lg:h-80 h-40">
                <LottieAnimation
                  src={TEAM_ROLES[3].animationPath}
                  isVisible={visibleAnimations.has(
                    `${TEAM_ROLES[3].keyFirstName}-${TEAM_ROLES[3].keyLastName}`,
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center mt-16">
        <LiquidButton onClick={() => router.push(`/${locale}${teamLink}`)}>
          {t("learnMoreAboutTeam")}
        </LiquidButton>
      </div>
    </section>
  );
}
