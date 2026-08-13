"use client";

import { useTranslations } from "next-intl";
import { AnthropicIcon, OpenAIIcon } from "@/utility/icons";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AIWorkflow {
  id: string;
  titleKey: string;
  descriptionKey: string;
  benefitsKey: string[];
  modelKey: string;
}

interface AIModel {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  overviewKey: string;
  strengthsKey: string[];
  useCasesKey: string[];
}

const AI_WORKFLOWS: AIWorkflow[] = [
  {
    id: "research-analysis",
    titleKey: "workflowResearchTitle",
    descriptionKey: "workflowResearchDesc",
    benefitsKey: [
      "workflowResearchBenefit1",
      "workflowResearchBenefit2",
      "workflowResearchBenefit3",
    ],
    modelKey: "usedWithOpenAI",
  },
  {
    id: "content-generation",
    titleKey: "workflowContentTitle",
    descriptionKey: "workflowContentDesc",
    benefitsKey: [
      "workflowContentBenefit1",
      "workflowContentBenefit2",
      "workflowContentBenefit3",
    ],
    modelKey: "usedWithAnthropic",
  },
  {
    id: "data-processing",
    titleKey: "workflowDataTitle",
    descriptionKey: "workflowDataDesc",
    benefitsKey: [
      "workflowDataBenefit1",
      "workflowDataBenefit2",
      "workflowDataBenefit3",
    ],
    modelKey: "usedWithOpenAI",
  },
  {
    id: "customer-interactions",
    titleKey: "workflowCustomerTitle",
    descriptionKey: "workflowCustomerDesc",
    benefitsKey: [
      "workflowCustomerBenefit1",
      "workflowCustomerBenefit2",
      "workflowCustomerBenefit3",
    ],
    modelKey: "usedWithAnthropic",
  },
];

const AI_MODELS: AIModel[] = [
  {
    name: "OpenAI",
    icon: OpenAIIcon,
    overviewKey: "openaiOverview",
    strengthsKey: [
      "openaiStrength1",
      "openaiStrength2",
      "openaiStrength3",
      "openaiStrength4",
    ],
    useCasesKey: ["openaiUseCase1", "openaiUseCase2", "openaiUseCase3"],
  },
  {
    name: "Anthropic Claude",
    icon: AnthropicIcon,
    overviewKey: "anthropicOverview",
    strengthsKey: [
      "anthropicStrength1",
      "anthropicStrength2",
      "anthropicStrength3",
      "anthropicStrength4",
    ],
    useCasesKey: [
      "anthropicUseCase1",
      "anthropicUseCase2",
      "anthropicUseCase3",
    ],
  },
];

function WorkflowItem({
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
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/5 border border-primary-foreground/10">
            <span className="text-sm font-semibold text-primary-foreground/60">
              {index + 1}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Model badge */}
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary-foreground/50 mb-3">
            {t(workflow.modelKey)}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-3">
            {t(workflow.titleKey)}
          </h3>

          {/* Description */}
          <p className="text-primary-foreground/70 text-base leading-relaxed mb-6">
            {t(workflow.descriptionKey)}
          </p>

          {/* Benefits as inline list */}
          <div className="flex flex-wrap gap-4">
            {workflow.benefitsKey.map((benefitKey, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground/40 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm">
                  {t(benefitKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModelSection({ model }: { model: AIModel }) {
  const t = useTranslations();

  return (
    <div className="py-12 border-b border-primary-foreground/10 last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Icon and Name */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <div className="inline-block p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 mb-4">
              <model.icon className="h-8 w-8 text-primary-foreground/70" />
            </div>
            <h3 className="text-2xl font-semibold text-primary-foreground">
              {model.name}
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mt-3">
              {t(model.overviewKey)}
            </p>
          </div>
        </div>

        {/* Strengths and Use Cases */}
        <div className="md:col-span-2">
          <div className="space-y-8">
            {/* Strengths */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-primary-foreground/50 mb-4">
                Core Strengths
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {model.strengthsKey.map((strengthKey, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-foreground/5 text-primary-foreground/40 text-xs mt-0.5 shrink-0">
                      ✓
                    </span>
                    <span className="text-primary-foreground/70 text-sm">
                      {t(strengthKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-primary-foreground/50 mb-4">
                Best Use Cases
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {model.useCasesKey.map((useCaseKey, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-foreground/5 text-primary-foreground/40 text-xs mt-0.5 shrink-0">
                      →
                    </span>
                    <span className="text-primary-foreground/70 text-sm">
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

export default function AIWorkflowsPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-foreground">
      {/* Workflows Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 pb-12 border-b border-primary-foreground/10">
            <h2 className="text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 tracking-tight">
              {t("aiWorkflowsSection")}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-3xl">
              {t("aiWorkflowsSectionDesc")}
            </p>
          </div>

          {/* Workflow Items List */}
          <div className="space-y-12">
            {AI_WORKFLOWS.map((workflow, index) => (
              <WorkflowItem
                key={workflow.id}
                workflow={workflow}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border-t border-primary-foreground/10" />
      </div>

      {/* AI Models Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 pb-12 border-b border-primary-foreground/10">
            <h2 className="text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 tracking-tight">
              {t("aiModelsSection")}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-3xl">
              {t("aiModelsSectionDesc")}
            </p>
          </div>

          {/* Model Sections List */}
          <div className="space-y-12">
            {AI_MODELS.map((model) => (
              <ModelSection key={model.name} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border-t border-primary-foreground/10" />
      </div>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 tracking-tight">
                {t("readyToImplement")}
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                {t("readyToImplementDesc")}
              </p>
            </div>

            <Link
              href="/#contact"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors duration-300 whitespace-nowrap self-start lg:self-center"
            >
              <span>{t("getInTouch")}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
