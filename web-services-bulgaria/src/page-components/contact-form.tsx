"use client";

import { memo, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { GlassCard } from "react-glass-ui";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  isLoading: boolean;
  submitMessage: {
    type: "success" | "error";
    text: string;
  } | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const ContactForm = memo(function ContactForm({
  formData,
  isLoading,
  submitMessage,
  onSubmit,
  onChange,
}: ContactFormProps) {
  const t = useTranslations();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div
        className="w-full lg:w-1/2 max-w-xl pb-12"
        style={{ contain: "layout style" }}
      >
        <div className="bg-primary/15 rounded-3xl p-6 h-96" />
      </div>
    );
  }

  return (
    <div
      className="w-full lg:w-1/2 max-w-xl pb-12"
      style={{ contain: "layout style" }}
    >
      <GlassCard
        blur={1}
        distortion={0}
        borderSize={0}
        borderRadius={30}
        backgroundOpacity={0.9}
        innerLightColor="var(--primary-foreground)"
        backgroundColor="var(--primary-foreground)"
        innerLightSpread={1}
        innerLightBlur={7}
        innerLightOpacity={0.4}
        outerLightColor="#00D9FF"
        outerLightSpread={2}
        outerLightBlur={120}
        outerLightOpacity={0.4}
        brightness={200}
        className="w-full!"
      >
        {submitMessage && (
          <div
            className={`m-4 mb-0 p-4 rounded-lg ${
              submitMessage.type === "success"
                ? "bg-green-500/20 border border-green-500/50 text-primary"
                : "bg-red-500/20 border border-red-500/50 text-primary"
            }`}
          >
            {submitMessage.text}
          </div>
        )}
        <form onSubmit={onSubmit} className="px-4 py-2 relative z-10">
          {/* Name */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="name" className="text-primary text-sm font-medium">
              {t("yourName")}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t("namePlaceholder")}
              value={formData.name}
              onChange={onChange}
              className="bg-primary/15 border-primary/30 text-primary placeholder:text-primary/60 focus-visible:ring-primary/50"
            />
          </div>

          {/* Email */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="email" className="text-primary text-sm font-medium">
              {t("yourEmail")}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              value={formData.email}
              onChange={onChange}
              className="bg-primary/15 border-primary/30 text-primary placeholder:text-primary/60 focus-visible:ring-primary/50"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="phone" className="text-primary text-sm font-medium">
              {t("yourPhone")}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t("phonePlaceholder")}
              value={formData.phone}
              onChange={onChange}
              className="bg-primary/15 border-primary/30 text-primary placeholder:text-primary/60 focus-visible:ring-primary/50"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2 mt-4">
            <Label
              htmlFor="subject"
              className="text-primary text-sm font-medium"
            >
              {t("subject")}
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder={t("subjectPlaceholder")}
              value={formData.subject}
              onChange={onChange}
              className="bg-primary/15 border-primary/30 text-primary placeholder:text-primary/60 focus-visible:ring-primary/50"
            />
          </div>

          {/* Message */}
          <div className="space-y-2 mt-4">
            <Label
              htmlFor="message"
              className="text-primary text-sm font-medium"
            >
              {t("message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t("messagePlaceholder")}
              value={formData.message}
              onChange={onChange}
              rows={5}
              className="bg-primary/15 border-primary/30 text-primary placeholder:text-primary/60 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <LiquidButton disabled={isLoading}>
              {isLoading ? t("sendingEmail") : t("sendMessage")}
            </LiquidButton>
          </div>
        </form>
      </GlassCard>
    </div>
  );
});

export default ContactForm;
