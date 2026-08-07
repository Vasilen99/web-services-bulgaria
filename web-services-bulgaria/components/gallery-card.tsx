"use client";

import Image from "next/image";
import { GlassCard } from "react-glass-ui";
import { useEffect, useState } from "react";

interface GalleryCardProps {
  type: "image" | "component";
  logo?: string;
  alt: string;
  component?: React.ComponentType;
}

export function GalleryCard({
  type,
  logo,
  alt,
  component: Component,
}: GalleryCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-100 h-85" />;
  }

  return (
    <GlassCard
      backgroundColor="var(--primary-foreground)"
      innerLightColor="var(--primary)"
      outerLightColor="var(--primary-foreground)"
      distortion={0}
      flexibility={20}
      borderSize={1}
      borderRadius={30}
      borderOpacity={0.4}
      backgroundOpacity={0.30000000000000004}
      innerLightSpread={4}
      innerLightBlur={10}
      innerLightOpacity={0.4}
      outerLightSpread={4}
      outerLightBlur={10}
      outerLightOpacity={0.9}
      chromaticAberration={22.3}
      onHoverScale={0.85}
      saturation={46}
      brightness={151}
      className="w-100 h-85 px-4 flex items-center justify-center"
    >
      {type === "image" && logo ? (
        <Image
          width={400}
          height={340}
          src={logo}
          alt={alt}
          className="object-cover object-center"
        />
      ) : Component ? (
        <div className="w-full h-full flex items-center justify-center">
          <Component />
        </div>
      ) : null}
    </GlassCard>
  );
}
