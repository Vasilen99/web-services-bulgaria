import { useTranslations } from "next-intl";
import type { AIModel } from "@/page-components/ai-details";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";

export default function ModelSection({ model }: { model: AIModel }) {
  const t = useTranslations();

  return (
    <div className=" border-b border-primary/10 last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Icon and Name */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <div className="inline-block p-4 rounded-lg bg-primary/5 border border-primary/10 mb-4">
              <model.icon className="size-16 fill-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              {model.name}
            </h3>
            <p className="text-primary/70 text-sm leading-relaxed mt-3">
              {t(model.overviewKey)}
            </p>
          </div>
        </div>

        {/* Strengths and Use Cases */}
        <div className="md:col-span-2">
          <div className="space-y-8">
            {/* Strengths */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
                {t("aiCoreStrength")}
              </h4>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {model.strengthsKey.map((strengthKey, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2Icon className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-primary/70 text-sm">
                      {t(strengthKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
                {t("aiBestUseCase")}
              </h4>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {model.useCasesKey.map((useCaseKey, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRightIcon className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-primary/70 text-sm">
                      {t(useCaseKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
