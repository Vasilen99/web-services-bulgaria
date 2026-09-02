"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { commonInnerPageSectionStyles } from "@/utility/constants";
import { EMAIL_REGEX } from "@/utility/constants";
import dynamic from "next/dynamic";
import ContactForm from "./contact-form";
import { Globe } from "@/app/components/globe";

// const Globe = dynamic(
//   () => import("@/app/components/globe").then((mod) => mod.Globe),
//   {
//     ssr: false,
//     loading: () => <div className="w-full h-150 bg-transparent" />,
//   },
// );

export default function ContactUsSection() {
  const t = useTranslations();
  //const [isGlobeVisible, setIsGlobeVisible] = useState(false);
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

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsGlobeVisible(true), 100);
  //   return () => clearTimeout(timer);
  // }, []);

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

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );

  return (
    <section className="w-full">
      <div
        className={`${commonInnerPageSectionStyles} bg-background flex flex-col justify-center max-h-270! h-full`}
      >
        <div className="absolute inset-0 w-full h-full">
          <GravityStarsBackground starsSize={5} starsCount={120} />
        </div>
        {/* Content */}
        <div className="flex flex-col lg:flex-row w-full! justify-around lg:gap-0 gap-12 items-center mt-36 relative z-10 flex-1">
          {/* Left side - Globe and Text */}
          <div className="flex flex-col items-center lg:items-start gap-8">
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
            {/* {isGlobeVisible && ( */}
              <div className="w-full hidden lg:flex justify-center lg:justify-center">
                <Globe isContactPage />
              </div>
            {/* )} */}
          </div>

          {/* Right side - Form */}
          <ContactForm
            formData={formData}
            isLoading={isLoading}
            submitMessage={submitMessage}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
}
