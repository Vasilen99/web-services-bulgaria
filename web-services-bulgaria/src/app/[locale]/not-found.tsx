"use client";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { House } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Animation404 } from "../../utility/icons";
export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <div className="sm:py-12 py-0">
      <div className="lg:py-12 py-6 lg:mt-14 mt-22 px-4 mx-auto flex flex-col gap-6 justify-center items-center text-center">
        <div className="sm:max-w-[662px] max-w-[352px] flex place-content-center">
          <Animation404 />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h3>{t("notFoundTitle")}</h3>
          <p>{t("notFoundDescription")}</p>
        </div>
        <Link href={`/${locale}`}>
          <Button className="flex gap-2">
            <House />
            {t("backToHome")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
