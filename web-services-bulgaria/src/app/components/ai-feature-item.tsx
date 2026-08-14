import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import LottieAnimation from "./lottie-animation";
export type AIFeature = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  animationPath: string;
};
export function AIFeatureItem({
  feature,
  isReverse,
  rowIndex,
}: {
  feature: AIFeature;
  isReverse: boolean;
  rowIndex: number;
}) {
  const t = useTranslations();
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Alternate background colors with opposite text colors
  const bgColor = rowIndex % 2 === 0 ? "bg-primary" : "bg-primary-foreground";
  const textColor =
    rowIndex % 2 === 0 ? "text-primary-foreground" : "text-primary";

  return (
    <div
      ref={itemRef}
      className={`${bgColor} rounded-xl p-6 lg:p-8 transition-all duration-300`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center`}
      >
        {/* Animation Container */}
        <div className={`order-1 ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
          <LottieAnimation src={feature.animationPath} isVisible={isVisible} />
        </div>

        {/* Text Content */}
        <div
          className={`order-2 ${isReverse ? "lg:order-1" : "lg:order-2"} space-y-4 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h3 className={`text-2xl lg:text-3xl font-bold ${textColor}`}>
            {t(feature.titleKey)}
          </h3>
          <p className={`${textColor} text-sm lg:text-base leading-relaxed`}>
            {t(feature.descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
