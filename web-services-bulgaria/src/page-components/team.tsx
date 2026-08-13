"use client";

import { useTranslations } from "next-intl";
import {
  FlipCard,
  FlipCardData,
} from "@/components/animate-ui/components/community/flip-card";
import { HeadingSection } from "@/components/heading-section";
const TEAM_MEMBERS: FlipCardData[] = [
  {
    name: "Василен Минков",
    title: "CEO & Founder",
    image: "/team/vasilen-snimka.png",
    bio: "Софтуерен инженер с над 5 години професионален опит в разработката на уеб базирани решения. Комбинира техническа експертиза със стратегическо мислене и визия за бъдещето на дигиталните продукти.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vasilen-minkov-9117011b0/",
      facebook: "https://www.facebook.com/vasilen.minkov.1",
      instagram: "https://www.instagram.com/vasilenminkovv/",
    },
  },
  {
    name: "Галя Ненчева",
    title: "Graphic Designer",
    image: "/team/galq-snimka.png",
    bio: "С години опит в разработването на SaaS и B2B решения, тя се фокусира се върху ясни, функционални дизайни, които подпомагат ефективната работа на потребителите и отговарят на конкретни бизнес цели.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/galyanencheva/",
      facebook: "https://www.facebook.com/galya.nencheva",
      instagram: "https://www.instagram.com/beeluvdpublishing/?hl=bg",
    },
  },
  {
    name: "Мирослав Димитров",
    title: "Software Engineer",
    image: "/team/miroslav-snimka.jpg",
    bio: "Бекенд разработчик с дълъг опит в разработката на скалируеми и сигурни приложения.",

    socialLinks: {
      linkedin: "https://www.linkedin.com/in/miroslav-dimitrov-534805263/",
      facebook: "https://www.facebook.com/png.insta",
      instagram: "https://www.instagram.com/21_mir0slav/",
    },
  },
  {
    name: "Наталия Лазарова",
    title: "Marketing Specialist",
    image: "/team/nataliq-snimka.png",
    bio: "Проектен мениджър с специализация в управление на цифрови проекти и team coordination.",

    socialLinks: {
      linkedin: "https://linkedin.com/in/elena-ivanova",
      facebook: "https://facebook.com/elena.ivanova",
      instagram: "https://instagram.com/elena_ivanova",
    },
  },
];

export default function Team() {
  const t = useTranslations();

  return (
    <section id="team" className="bg-primary py-12 lg:px-12 px-4 ">
      <HeadingSection
        title={t("teamHeading")}
        subtitle={t("teamSubheading")}
        textColor="primary-foreground"
      />
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="flex justify-center">
            <FlipCard data={member} />
          </div>
        ))}
      </div>
    </section>
  );
}
