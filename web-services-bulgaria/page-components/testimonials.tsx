const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Изключителен уеб дизайн, който надмина нашите очаквания. Вниманието към детайла и креативността доведоха до визуално зашеметяващ и удобен за потребителя сайт, който незабавно увеличи онлайн присъствието ни.",
    name: "ИВАН ПЕТРОВ",
    company: "АБВ Компания",
  },
  {
    id: 2,
    quote:
      "Уеб дизайнът доведе до уебсайт, който представя бизнеса ни по професионален и удобен за потребителя начин. Не бихме могли да бъдем по-щастливи от резултата.",
    name: "МАРИЯ ИВАНОВА",
    company: "Redwood Technologies",
  },
  {
    id: 3,
    quote:
      "Експертизата в уеб дизайна вдъхна живот на нашия бранд. Уловиха нашата визия с прецизност и създадоха уебсайт, който се откроява сред конкурентите ни.",
    name: "ГЕОРГИ ДИМИТРОВ",
    company: "Design Inc.",
  },
  {
    id: 4,
    quote:
      "Уменията им в уеб дизайна са несравними. Успяват да вземат нашите идеи и да ги превърнат в визуално зашеметяващ уебсайт, отразяващ нашия бранд и привличащ нашата аудитория.",
    name: "АНДРЕЙ ТОДОРОВ",
    company: "Silverstone Corporation",
  },
  {
    id: 5,
    quote:
      "Тяхната експертиза в уеб дизайна и SEO надмина нашите очаквания. Вниманието към детайла и персонализираният подход ги правят изключително препоръчани.",
    name: "ЕЛЕНА ХРИСТОВА",
    company: "Greenway Industries",
  },
  {
    id: 6,
    quote:
      "Умението им за създаване на съдържание и уеб дизайн е на най-високо ниво. Успяват да произвеждат висококачествено съдържание, което ангажира нашата аудитория.",
    name: "СТЕФАН НИКОЛОВ",
    company: "Golden Gate Solutions",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 border-t border-primary-content/10 pt-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-content leading-tight max-w-lg">
            Какво казват нашите клиенти
          </h2>
          <p className="text-primary-content/50 text-base max-w-sm leading-relaxed">
            Вижте какво споделят нашите клиенти за опита от работата с нас и
            нашия екип.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-content/10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-primary p-8 flex flex-col justify-between gap-8 min-h-60"
            >
              <p className="text-primary-content/70 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-primary-content text-xs font-bold tracking-widest uppercase">
                  {t.name}
                </p>
                <p className="text-primary-content/40 text-xs mt-1">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
