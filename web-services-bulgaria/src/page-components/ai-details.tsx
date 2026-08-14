"use client";

import { useTranslations } from "next-intl";
import { ContactCtaBottom } from "@/components/contact-cta-bottom";
import { AI_WORKFLOWS, AI_MODELS } from "@/utility/constants";
import dynamic from "next/dynamic";
import { commonInnerPageSectionStyles } from "@/utility/constants";
import { motion } from "motion/react";

const ModelSection = dynamic(() => import("@/components/ai-model-section"), {
  ssr: false,
});

const WorkflowItem = dynamic(() => import("@/components/ai-workflow-item"), {
  ssr: false,
});
export type AIWorkflow = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  benefitsKey: string[];
  modelKey: string;
};

export type AIModel = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  overviewKey: string;
  strengthsKey: string[];
  useCasesKey: string[];
};

export default function AIWorkflowsPage() {
  const t = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main
      id="team"
      className={`${commonInnerPageSectionStyles} bg-primary-foreground`}
    >
      {/* Workflows Section */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16 pb-12 border-b border-primary/10"
            variants={itemVariants}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-primary mb-4 tracking-tight">
              {t("aiWorkflowsSection")}
            </h2>
            <p className="text-primary text-lg leading-relaxed max-w-3xl">
              {t("aiWorkflowsSectionDesc")}
            </p>
          </motion.div>

          {/* Workflow Items List */}
          <motion.div className="space-y-12" variants={containerVariants}>
            {AI_WORKFLOWS.map((workflow, index) => (
              <motion.div key={workflow.id} variants={itemVariants}>
                <WorkflowItem workflow={workflow} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto border-t border-primary/10" />
      </motion.div>

      {/* AI Models Section */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16 pb-12 border-b border-primary-foreground/10"
            variants={itemVariants}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-primary mb-4 tracking-tight">
              {t("aiModelsSection")}
            </h2>
            <p className="text-primary text-lg leading-relaxed max-w-3xl">
              {t("aiModelsSectionDesc")}
            </p>
          </motion.div>

          {/* Model Sections List */}
          <motion.div className="space-y-12" variants={containerVariants}>
            {AI_MODELS.map((model) => (
              <motion.div key={model.name} variants={itemVariants}>
                <ModelSection model={model} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto border-t border-primary-foreground/10" />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <ContactCtaBottom />
      </motion.div>
    </main>
  );
}
