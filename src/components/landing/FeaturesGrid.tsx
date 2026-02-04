import { 
  Video, 
  Database, 
  FileText, 
  AudioLines, 
  Layers, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Ежедневная генерация видео",
    description: "Автоматическое создание 1 короткого видео в форматах Reels, Shorts, TikTok каждый день",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Database,
    title: "Интеграция с базой знаний",
    description: "Прямое подключение к корпоративной базе знаний для извлечения экспертного контента",
    span: "col-span-1",
  },
  {
    icon: FileText,
    title: "Генерация сценариев",
    description: "Создание профессиональных сценариев на основе экспертных материалов компании",
    span: "col-span-1",
  },
  {
    icon: AudioLines,
    title: "Синхронизация аватара",
    description: "Точная синхронизация видео-аватара с аудиодорожкой и клонированным голосом",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Layers,
    title: "Автоматический монтаж",
    description: "Наложение графических элементов, субтитров и брендинга без ручного вмешательства",
    span: "col-span-1",
  },
  {
    icon: Globe,
    title: "Многоязыковая поддержка",
    description: "Производство контента на нескольких языках с сохранением качества и стиля",
    span: "col-span-1",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Функциональные возможности
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Полный цикл видеопроизводства
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Автономная система охватывает все этапы создания профессионального видеоконтента
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bento-card group ${feature.span}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
