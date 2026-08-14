"use client";

import { useTranslations, useLocale } from "next-intl";
import { FlipCard } from "@/components/animate-ui/components/community/flip-card";
import { HeadingSection } from "@/components/heading-section";
import { TEAM_MEMBERS } from "@/utility/constants";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { useRouter } from "next/navigation";
import { teamLink } from "@/utility/links";
export default function Team() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  return (
    <section id="team" className="bg-primary py-12 lg:px-12 px-4">
      <HeadingSection
        title={t("teamHeading")}
        subtitle={t("teamSubheading")}
        textColor="primary-foreground"
      />
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={`${member.keyFirstName}-${member.keyLastName}`}
            className="flex justify-center"
          >
            <FlipCard data={member} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <LiquidButton onClick={() => router.push(`/${locale}${teamLink}`)}>
          {t("learnMoreAboutTeam")}
        </LiquidButton>
      </div>
    </section>
  );
}
