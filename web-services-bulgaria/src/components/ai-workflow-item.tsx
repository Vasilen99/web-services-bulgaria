import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import type { AIWorkflow } from "@/page-components/ai-details";

export default function WorkflowItem({
  workflow,
  index,
}: {
  workflow: AIWorkflow;
  index: number;
}) {
  const t = useTranslations();

  return (
    <div className="pb-12 border-b border-primary-foreground/10 last:border-b-0">
      <div className="flex gap-6 md:gap-12">
        {/* Number indicator */}
        <div className="shrink-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary border border-primary-foreground/10">
            <span className="text-sm font-semibold text-primary-foreground">
              {index + 1}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Model badge */}
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary/50 mb-3">
            {t(workflow.modelKey)}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
            {t(workflow.titleKey)}
          </h3>

          {/* Description */}
          <p className="text-primary text-base leading-relaxed mb-6">
            {t(workflow.descriptionKey)}
          </p>

          {/* Benefits as inline list */}
          <div className="flex flex-wrap gap-4">
            {workflow.benefitsKey.map((benefitKey, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-primary text-sm">{t(benefitKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
