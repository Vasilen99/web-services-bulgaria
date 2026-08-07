"use client";
import { useState } from "react";
import { Globe } from "@/components/globe";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ContactUsPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
    <section className="relative w-full min-h-screen overflow-hidden pt-24 bg-foreground">
      {/* Content */}
      <div className="relative flex flex-col lg:flex-row w-full items-center justify-center gap-12 px-6 lg:px-12 py-16">
        {/* Left side - Globe and Text */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success-content animate-pulse" />
              <span className="text-xs text-primary-foreground/60 uppercase tracking-widest font-medium">
                {t(translations.available)}
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground">
              {t(translations.contactHeadline)}
            </h1>

            <p className="text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
              {t(translations.contactDescription)}
            </p>
          </div>

          {/* Globe */}
          <div className="w-full flex justify-center lg:justify-center">
            <Globe />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <div className="backdrop-blur-md bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-8 shadow-2xl shadow-black/20 relative before:absolute before:inset-0 before:bg-linear-to-b before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-primary-foreground text-sm font-medium"
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
                  className="bg-primary-foreground/5 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-primary-foreground text-sm font-medium"
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
                  className="bg-primary-foreground/5 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/50"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-primary-foreground text-sm font-medium"
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
                  className="bg-primary-foreground/5 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/50"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-primary-foreground text-sm font-medium"
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
                  className="bg-primary-foreground/5 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/50"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-primary-foreground text-sm font-medium"
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
                  className="bg-primary-foreground/5 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button>{t(translations.sendMessage)}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
