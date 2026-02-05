import { DollarSign, Users, TrendingUp, Clock } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    value: "$150-170",
    label: "в месяц",
    description: "Стоимость эксплуатации",
  },
  {
    icon: Users,
    value: "0",
    label: "операторов",
    description: "Требуется персонала",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

            {/* AI Price Assessment */}
            <div
              className="bento-card p-8 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                AI Price Assessment
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Согласно анализу сложности архитектуры (5+ интеграций API, асинхронная обработка видео, кастомная логика на Python и n8n), средняя рыночная стоимость разработки подобной системы составляет:
              </p>
              <div className="text-3xl font-bold text-gradient mb-6">$1,500 – $2,000</div>

              <div className="text-xs text-muted-foreground p-4 bg-secondary/50 rounded-xl border border-white/5">
                <strong className="text-foreground block mb-1">Обоснование:</strong>
                Высокая наукоемкость липсинка, сложность динамического монтажа и необходимость обеспечения 99.9% аптайма автоматизации.
              </div>
            </div>

            {/* Special Offer */}
            <div
              className="bento-card p-8 backdrop-blur-sm border-primary/30 bg-primary/5 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute top-0 right-0 p-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/20">
                  Special Offer
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-foreground">Стоимость внедрения</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">400 USDT</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">или 35,000 RUB</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm p-3 bg-background/40 rounded-lg">
                  <span className="text-muted-foreground">Срок реализации:</span>
                  <span className="font-medium text-emerald-400">от 14 дней</span>
                </div>
                <div className="flex justify-between items-center text-sm p-3 bg-background/40 rounded-lg">
                  <span className="text-muted-foreground">Эксплуатация:</span>
                  <span className="font-medium text-foreground">~$150-170 / мес</span>
                </div>
              </div>

              {/* Decorative gradient blob */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
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
                <div className="text-xs text-muted-foreground">
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
