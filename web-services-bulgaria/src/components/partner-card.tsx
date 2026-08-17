import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
interface PartnerCardProps {
  name: string;
  shortDescription: string;
  logo?: string;
  logoComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  slug: string;
  type?: "image" | "component";
  product?: string;
  className?: string;
}

export function PartnerCard({
  name,
  shortDescription,
  logo,
  logoComponent: LogoComponent,
  product,
  type = "image",
  className,
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
        className={`relative flex-1 bg-primary-foreground border border-primary rounded-2xl p-6 overflow-hidden group transition-all duration-300`}
      >
        {/* Border animation effect */}
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-2xl border-2 border-secondary"
        />

        <div className="relative z-10 flex flex-col gap-1 h-full">
          {/* Logo Section */}{" "}
          <div>
            <div className="flex items-center justify-between">
              <motion.div
                animate={isHovered ? { scale: 0.95 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center justify-center rounded-full h-20 ${type === "image" ? "w-20" : "w-40"}`}
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
                  <LogoComponent className={className} />
                ) : null}
              </motion.div>
              <Badge variant={"default"}>{product}</Badge>
            </div>
          </div>
          {/* Content Section */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Name */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-primary"
            >
              {name}
            </motion.h3>

            {/* Description - appears on hover with letter reveal effect */}
            <motion.p
              initial={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm text-primary leading-relaxed"
            >
              {shortDescription}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
