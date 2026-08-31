import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";
import { motion } from "motion/react";
import type { FAQCategory } from "@/lib/faq-data";
export default function FaqAccordion({
  activeCategoryData,
  locale,
}: {
  activeCategoryData: FAQCategory;
  locale: string;
}) {
  return (
    <Accordion type="single" collapsible className="mt-12">
      {activeCategoryData.items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <AccordionItem
            value={item.id}
            className="border-primary-content/10 bg-transparent"
          >
            <AccordionTrigger className="px-0 py-4 hover:bg-transparent data-[state=open]:bg-transparent">
              <div className="flex items-start gap-4 flex-1 text-left">
                <span className="text-sm font-semibold text-primary-content/50 shrink-0 mt-0.5">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium leading-tight text-primary-content group-data-[state=open]:text-primary transition-colors">
                  {locale === "bg" ? item.questionBg : item.questionEn}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-0 py-4 text-base text-primary-content/70 leading-relaxed ml-12">
              {locale === "bg" ? item.answerBg : item.answerEn}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
