import { DollarSign, Users, TrendingUp, Clock } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    value: "$150-170",
    label: "в месяц",
    description: "Стоимость подписки на все необходимые сервисы",
  },
  {
    icon: Users,
    value: "1",
    label: "оператор",
    description: "Требуется для утверждения действий ИИ",
  },
  {
    icon: TrendingUp,
    value: "30+",
    label: "видео",
    description: "Ежемесячный выпуск",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "работа",
    description: "Автономный режим",
  },
];

const ROISection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Инвестиции и <span className="text-gradient">Окупаемость</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Прозрачное ценообразование и анализ эффективности
            </p>
          </div>

          <div className="mb-12">
            {/* AI Price Assessment */}
            <div
              className="bento-card p-10 backdrop-blur-sm animate-fade-in-up max-w-3xl mx-auto border-primary/20"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground flex items-center justify-center gap-2 text-center">
                Рассчет рыночной стоимости искусственным интеллектом:
              </h3>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                Согласно анализу сложности архитектуры (5+ интеграций API, асинхронная обработка видео, кастомная логика на Python), средняя рыночная стоимость разработки подобной системы составляет:
              </p>

              <div className="text-4xl md:text-5xl font-bold text-gradient mb-8 text-center">$1,500 – $2,000</div>

              {/* Decorative separator */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

            </div>
          </div>

          {/* Metrics Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bento-card text-center p-6 backdrop-blur-sm hover:bg-secondary/40 transition-colors"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
