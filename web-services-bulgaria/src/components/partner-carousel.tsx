"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface CarouselImage {
  src: string;
  alt: string;
}

interface PartnerCarouselProps {
  images: CarouselImage[];
  partnerName: string;
}

export function PartnerCarousel({ images, partnerName }: PartnerCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  const [api, setApi] = React.useState<any>(null);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      setApi={setApi}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full aspect-video bg-foreground/5 rounded-lg overflow-hidden border border-foreground/10">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-40" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-40" />
    </Carousel>
  );
}
