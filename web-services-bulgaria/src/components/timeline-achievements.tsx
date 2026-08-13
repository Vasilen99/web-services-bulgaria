import { motion } from "motion/react";
import { ACHIEVEMENTS } from "@/utility/constants/index";

export type TimelineAchievementProps = {
  achievement: (typeof ACHIEVEMENTS)[0];
  index: number;
};
export default function TimelineAchievement({
  achievement,
  index,
}: TimelineAchievementProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pb-12 last:pb-0"
    >
      {/* Center connecting line */}
      {index < ACHIEVEMENTS.length - 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-0 w-0.5 bg-linear-to-b from-primary/30 to-primary/10" />
      )}

      {/* Content wrapper with alternating layout */}
      <div className="relative flex items-center gap-6">
        {/* Left content or spacer */}
        {isLeft ? (
          <div className="flex-1 text-right pt-1">
            <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-6 hover:bg-foreground/8 transition-colors duration-300 inline-block w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:gap-4 mb-3">
                <h3 className="text-lg font-bold text-foreground">
                  {achievement.title}
                </h3>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {achievement.year}
                </span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1" />
        )}

        {/* Center dot */}
        <div className="flex flex-col items-center relative z-10">
          <div className="w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
        </div>

        {/* Right content or spacer */}
        {!isLeft ? (
          <div className="flex-1 pt-1">
            <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-6 hover:bg-foreground/8 transition-colors duration-300 inline-block w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4 mb-3">
                <h3 className="text-lg font-bold text-foreground">
                  {achievement.title}
                </h3>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {achievement.year}
                </span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </motion.div>
  );
}
