"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Globe } from "@/app/components/globe";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { commonInnerPageSectionStyles } from "@/utility/constants";
import { EMAIL_REGEX } from "@/utility/constants";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { GlassCard } from "react-glass-ui";

export default function ContactUsSection() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const globe = useMemo(() => <Globe isContactPage />, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage(null);
    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email.trim())) {
      setSubmitMessage({
        type: "error",
        text: t("missingEmailField"),
      });
      setIsLoading(false);
      return;
    }
    if (!formData.name.trim()) {
      setSubmitMessage({
        type: "error",
        text: t("missingNameField"),
      });
      setIsLoading(false);
      return;
    }
    if (!formData.message.trim()) {
      setSubmitMessage({
        type: "error",
        text: t("missingMessageField"),
      });
      setIsLoading(false);
      return;
    }
    try {
      const formDataObj = new FormData(e.currentTarget);
      formDataObj.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB_3_ACCESS_KEY || "",
      );

      const object = Object.fromEntries(formDataObj);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          type: "success",
          text: t("successMessage"),
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage({
          type: "error",
          text: t("errorMessage"),
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage({
        type: "error",
        text: t("errorMessage"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className={`${commonInnerPageSectionStyles} min-h-screen bg-background`}
    >
      <div className="absolute inset-0 w-full h-full">
        <GravityStarsBackground starsSize={5} starsCount={120} />
      </div>
      {/* Content */}
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:px-12 mt-36">
        {/* Left side - Globe and Text */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 max-w-xl"
          >
            <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold text-primary">
              {t("contactHeadline")}
            </h1>

            <p className="text-base lg:text-lg text-center lg:text-left text-primary leading-relaxed">
              {t("contactDescription")}
            </p>
          </motion.div>

          {/* Globe */}
          <div className="w-full hidden lg:flex justify-center lg:justify-center">
            {globe}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 max-w-xl pb-12">
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
            <form onSubmit={handleSubmit} className="px-4 py-2 relative z-10">
              {/* Name */}
              <div className="space-y-2 mt-4">
                <Label
                  htmlFor="name"
                  className="text-primary text-sm font-medium"
                >
                  {t("yourName")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-primary/15 border-primary/30 text-primary placeholder:text-primary/60 focus-visible:ring-primary/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 mt-4">
                <Label
                  htmlFor="email"
                  className="text-primary text-sm font-medium"
                >
                  {t("yourEmail")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-primary/15 border-primary/30 text-primary placeholder:text-primary/60 focus-visible:ring-primary/50"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2 mt-4">
                <Label
                  htmlFor="phone"
                  className="text-primary text-sm font-medium"
                >
                  {t("yourPhone")}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  value={formData.phone}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
      </div>
    </section>
  );
}
