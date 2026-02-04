import { Database, Sparkles, Video, Scissors, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Анализ данных",
    description: "Извлечение и анализ информации из корпоративной базы знаний",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Генерация контента",
    description: "Создание сценария и визуальных промптов на основе экспертных материалов",
  },
  {
    number: "03",
    icon: Video,
    title: "Синтез видео",
    description: "Генерация видео-аватара с клонированием голоса и синхронизацией",
  },
  {
    number: "04",
    icon: Scissors,
    title: "Динамический монтаж",
    description: "Автоматическое наложение графики, субтитров и брендинга",
  },
  {
    number: "05",
    icon: Share2,
    title: "Дистрибуция",
    description: "Публикация в облачное хранилище и социальные сети",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Операционный процесс
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Пять этапов автоматизации
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полностью автономный конвейер от анализа данных до публикации готового контента
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className={`bento-card inline-block ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <span className="text-xs font-mono text-primary mb-1 block">
                          Шаг {step.number}
                        </span>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow hidden md:block" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
