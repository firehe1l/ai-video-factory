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
          {/* Main ROI Card */}
          <div className="bento-card p-8 md:p-12 text-center mb-12 glow-emerald">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Эффективность и ROI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Замена отдела{" "}
              <span className="text-gradient">видеопроизводства</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Стоимость эксплуатации системы составляет примерно{" "}
              <span className="text-foreground font-semibold">$150-170 в месяц</span>, 
              что заменяет полноценный отдел видеопроизводства
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bento-card text-center p-6"
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
