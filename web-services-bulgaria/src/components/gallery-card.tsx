"use client";

import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "react-glass-ui";

interface GalleryCardProps {
  type: "image" | "component";
  logo?: string;
  alt: string;
  component?: React.ComponentType;
  href?: string;
}

export function GalleryCard({
  type,
  logo,
  alt,
  component: Component,
  href,
}: GalleryCardProps) {
  const content = (
    <div className="max-w-100 max-h-85 flex items-center justify-center">
      <GlassCard
        backgroundColor="var(--primary-foreground)"
        innerLightColor="var(--primary)"
        outerLightColor="var(--primary-foreground)"
        distortion={0}
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
        className="max-w-100 max-h-85 px-4 flex items-center justify-center"
      >
        {type === "image" && logo ? (
          <Image
            width={380}
            height={320}
            src={logo}
            alt={alt}
            className="object-cover object-center"
          />
        ) : Component ? (
          <div className="max-w-100 max-h-85 flex items-center justify-center">
            <Component />
          </div>
        ) : null}
      </GlassCard>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
