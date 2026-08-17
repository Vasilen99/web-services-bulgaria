"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Globe } from "@/components/globe";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { translations } from "@/lib/translations";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { commonInnerPageSectionStyles } from "@/utility/constants";
export default function ContactUsSection() {
  const locale = useLocale() as "bg" | "en";

  // Helper to get translated text
  const t = (bilingualString: { bg: string; en: string }): string => {
    return bilingualString[locale];
  };
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage(null);

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
          text: "Message sent successfully! We'll get back to you soon.",
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
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
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
      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-12 px-6 lg:px-12 mt-33">
        {/* Left side - Globe and Text */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold text-primary">
              {t(translations.contactHeadline)}
            </h1>

            <p className="text-base lg:text-lg text-center lg:text-left text-primary leading-relaxed">
              {t(translations.contactDescription)}
            </p>
          </div>

          {/* Globe */}
          <div className="w-full hidden lg:flex justify-center lg:justify-center">
            <Globe />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 max-w-xl pb-12">
          <div className="backdrop-blur-xs bg-primary/20 border border-primary-foreground/20 rounded-2xl p-8 shadow-2xl shadow-black/20 relative before:absolute before:inset-0 before:bg-linear-to-b before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-2xl">
            {submitMessage && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitMessage.type === "success"
                    ? "bg-green-500/20 border border-green-500/50 text-green-100"
                    : "bg-red-500/20 border border-red-500/50 text-red-100"
                }`}
              >
                {submitMessage.text}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-primary text-sm font-medium"
                >
                  {t(translations.yourName)}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t(translations.namePlaceholder)}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-primary/5 border-primary/30 text-primary placeholder:text-primary/40 focus-visible:ring-primary/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-primary text-sm font-medium"
                >
                  {t(translations.yourEmail)}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t(translations.emailPlaceholder)}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-primary/5 border-primary/30 text-primary placeholder:text-primary/40 focus-visible:ring-primary/50"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-primary text-sm font-medium"
                >
                  {t(translations.yourPhone)}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t(translations.phonePlaceholder)}
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-primary/5 border-primary/30 text-primary placeholder:text-primary/40 focus-visible:ring-primary/50"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-primary text-sm font-medium"
                >
                  {t(translations.subject)}
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t(translations.subjectPlaceholder)}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-primary/5 border-primary/30 text-primary placeholder:text-primary/40 focus-visible:ring-primary/50"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-primary text-sm font-medium"
                >
                  {t(translations.message)}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t(translations.messagePlaceholder)}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-primary/5 border-primary/30 text-primary placeholder:text-primary/40 focus-visible:ring-primary/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button disabled={isLoading}>
                  {isLoading
                    ? t(translations.sendingEmail)
                    : t(translations.sendMessage)}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
