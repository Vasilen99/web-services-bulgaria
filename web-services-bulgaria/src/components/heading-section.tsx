export const HeadingSection = ({
  title,
  subtitle,
  textColor,
}: {
  title: string;
  subtitle?: string;
  textColor?: "primary" | "primary-foreground";
}) => {
  return (
    <div className="px-6 lg:px-12 mb-14">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-t border-primary-content/10 pt-10">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-${textColor || "primary-foreground"}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-${textColor || "primary-foreground"} text-base max-w-sm leading-relaxed`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
