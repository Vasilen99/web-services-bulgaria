"use client";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/components/buttons/flip";

const STEPS = [
  {
    num: "01",
    title: "КОНЦЕПЦИЯ",
    description:
      "По време на фазата на концепцията работим в тясно сътрудничество с клиентите, за да разберем техните нужди и цели за уебсайта.",
    bullets: [
      "Преглед на съществуващия брандинг",
      "Проучване на целевата аудитория и конкурентите",
      "Разработване на стратегия",
    ],
  },
  {
    num: "02",
    title: "ДИЗАЙН",
    description:
      "След като концепцията е установена, преминаваме към фазата на дизайна. Тук създаваме визуално представяне на уебсайта, което отразява бранда и посланието на клиента.",
    bullets: [
      "Разработване на wireframes и макети",
      "Избор на типография, цветови палитри и изображения",
      "Прецизиране на дизайна",
    ],
  },
  {
    num: "03",
    title: "РАЗРАБОТКА",
    description:
      "След финализирането на дизайна преминаваме към изграждане на уебсайта с помощта на съвременни технологии.",
    bullets: [
      "Превеждане на дизайна в код",
      "Адаптивен и функционален на всички устройства",
      "Задълбочено тестване преди стартиране",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-primary py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-primary-content/40 text-xs uppercase tracking-[0.2em] font-medium mb-6">
          Нашият процес
        </p>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-content leading-tight max-w-lg">
              Вашият мечтан уебсайт само в няколко стъпки
            </h2>
            <p className="text-primary-content/50 text-base mt-4 max-w-md leading-relaxed">
              От консултация до стартиране — нашият оптимизиран процес осигурява
              навременна доставка и качествена работа.
            </p>
          </div>

          <FlipButton className="rounded-full border border-primary-content/20 px-6 py-2.5 self-start lg:self-auto shrink-0">
            <FlipButtonFront className="bg-transparent text-primary-content text-sm font-medium">
              Свържете се с нас
            </FlipButtonFront>
            <FlipButtonBack className="bg-primary-content! text-primary text-sm font-medium">
              Свържете се с нас
            </FlipButtonBack>
          </FlipButton>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`border-t border-primary-content/10 pt-8 pb-10 pr-8 ${
                i < STEPS.length - 1
                  ? "md:border-r md:border-primary-content/10"
                  : ""
              } ${i > 0 ? "md:pl-8" : ""}`}
            >
              <span className="text-primary-content/30 text-xs font-medium tracking-widest mb-6 block">
                {step.num}
              </span>
              <h3 className="text-primary-content text-lg font-bold tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="text-primary-content/50 text-sm leading-relaxed mb-6">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-primary-content/60 text-sm"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-content/40 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
