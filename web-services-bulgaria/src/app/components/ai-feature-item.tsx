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
  // rowIndex,
}: {
  feature: AIFeature;
  isReverse: boolean;
  // rowIndex?: number;
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

  return (
    <div
      ref={itemRef}
      className={`rounded-xl p-6 lg:p-8 transition-all duration-300 backdrop-blur-xs bg-primary-foreground/10 border border-primary-foreground/20 shadow-lg`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center`}
      >
        {/* Animation Container */}
        <div className={`order-2 ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
          <LottieAnimation src={feature.animationPath} isVisible={isVisible} />
        </div>

        {/* Text Content */}
        <div
          className={`order-1 ${isReverse ? "lg:order-1" : "lg:order-2"} space-y-4 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
            {t(feature.titleKey)}
          </h3>
          <p className="text-primary-foreground text-sm lg:text-base leading-relaxed">
            {t(feature.descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
