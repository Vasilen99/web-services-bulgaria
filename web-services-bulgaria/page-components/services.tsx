const SERVICES = [
  {
    num: "01",
    title: "УЕБ ДИЗАЙН",
    description:
      "Премиум, персонализирани уеб дизайн услуги, съобразени с уникалните нужди на всеки клиент. Визуално впечатляващи и удобни за потребителя сайтове, които носят резултати.",
  },
  {
    num: "02",
    title: "УЕБ РАЗРАБОТКА",
    description:
      "Красиви и функционални уебсайтове, изградени с най-съвременни технологии. Висока персонализация и лесно управление, дори без предишен опит в уеб разработката.",
  },
  {
    num: "03",
    title: "SEO & СЪДЪРЖАНИЕ",
    description:
      "Комплексни услуги, които помагат на бизнеса да изгради силно онлайн присъствие. Висококачествено, ангажиращо съдържание, оптимизирано за търсачките.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-primary-content/40 text-xs uppercase tracking-[0.2em] font-medium mb-6">
          Услуги
        </p>

        {/* Heading + subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-content leading-tight max-w-xl">
            Дизайн, разработка и съдържание. Всичко на едно място.
          </h2>
          <p className="text-primary-content/50 text-base max-w-sm leading-relaxed">
            Издигнете онлайн присъствието си на следващото ниво с нашите
            експертни услуги в областта на уеб дизайна и създаването на
            съдържание.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {SERVICES.map((service, i) => (
            <div
              key={service.num}
              className={`border-t border-primary-content/10 pt-8 pb-10 pr-8 ${
                i < SERVICES.length - 1
                  ? "md:border-r md:border-primary-content/10"
                  : ""
              } ${i > 0 ? "md:pl-8" : ""}`}
            >
              <span className="text-primary-content/30 text-xs font-medium tracking-widest mb-6 block">
                {service.num}
              </span>
              <h3 className="text-primary-content text-lg font-bold tracking-wider mb-4">
                {service.title}
              </h3>
              <p className="text-primary-content/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
