import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
interface PartnerCardProps {
  name: string;
  shortDescription: string;
  logo?: string;
  logoComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  slug: string;
  type?: "image" | "component";
}

export function PartnerCard({
  name,
  shortDescription,
  logo,
  logoComponent: LogoComponent,
  type = "image",
}: PartnerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full"
    >
      {/* Card Container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex-1 bg-primary border border-primary-content/10 rounded-2xl p-6 overflow-hidden group transition-all duration-300"
      >
        {/* Animated background gradient */}
        <motion.div
          animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 from-primary-foreground via-transparent to-primary-foreground pointer-events-none"
        />

        {/* Pulsing dots animation - top right */}
        <motion.div
          animate={
            isHovered
              ? { scale: 1.2, opacity: 0.6 }
              : { scale: 1, opacity: 0.3 }
          }
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 w-2 h-2 bg-primary-foreground rounded-full"
        />

        {/* Border animation effect */}
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-2xl border-2 border-primary-foreground/60"
        />

        <div className="relative z-10 flex flex-col gap-4 h-full">
          {/* Logo Section */}
          <motion.div
            animate={isHovered ? { scale: 0.95 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex items-center justify-center h-20 ${type === "image" ? "w-20" : "w-40"}`}
          >
            {type === "image" && logo ? (
              <Image
                src={logo}
                alt={name}
                width={100}
                height={100}
                className="object-contain w-auto h-auto"
              />
            ) : LogoComponent ? (
              <LogoComponent />
            ) : null}
          </motion.div>

          {/* Divider Line */}
          <motion.div
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0.6 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 from-transparent via-primary-foreground to-transparent origin-left"
          />

          {/* Content Section */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Name */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-primary-foreground"
            >
              {name}
            </motion.h3>

            {/* Description - appears on hover with letter reveal effect */}
            <motion.p
              initial={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm text-primary-foreground/70 leading-relaxed"
            >
              {shortDescription}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
