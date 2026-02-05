import { Server, Workflow, Code2, Cloud } from "lucide-react";

const techStack = [
  { icon: Server, label: "API Integration" },
  { icon: Code2, label: "Python Processing" },
  { icon: Cloud, label: "Cloud Assembly" },
];

const services = [
  { name: "HeyGen", role: "Avatar Video" },
  { name: "Creatomate", role: "Video Edit" },
  { name: "OpenRouter", role: "LLM Brain" },
  { name: "ElevenLabs", role: "Voice Clone" },
  { name: "Google Drive", role: "Storage" },
];

const TechnicalSection = () => {
  return (
    <section id="technical" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Многоуровневая{" "}
              <span className="text-gradient">архитектура</span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Проект представляет собой сложную многоуровневую архитектуру.
                Система обеспечивает оркестрацию пяти различных API-интерфейсов,
                управление состояниями рендеринга и автоматическую обработку ошибок.
              </p>
              <p className="text-lg leading-relaxed">
                Реализация логики ожидания (Webhooks) для синхронизации
                асинхронных процессов видеопроизводства.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
                >
                  <tech.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Architecture Visualization */}
          <div className="relative">
            <div className="bento-card p-8 relative overflow-hidden min-h-[400px] flex items-center justify-center">
              {/* Animated background lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Star topology connections from center (200,200) */}
                  <g className="animate-pulse-glow" style={{ animationDuration: '3s' }}>
                    <path d="M200,200 L200,80" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M200,200 L320,160" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M200,200 L290,300" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M200,200 L110,300" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M200,200 L80,160" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                  </g>
                </svg>
              </div>

              {/* Central Orchestrator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 rounded-2xl gradient-emerald flex flex-col items-center justify-center shadow-glow animate-pulse-glow z-20 relative">
                  <Workflow className="w-8 h-8 text-white mb-1" />
                  <span className="text-[10px] uppercase font-bold text-white/90">Core</span>
                </div>
                {/* Ping animation rings */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-primary/30 rounded-2xl animate-ping -z-10" />
              </div>

              {/* Service Nodes Orbiting */}
              <div className="absolute inset-0 w-full h-full">
                {services.map((service, index) => {
                  // Calculate positions in a pentagon (5 points)
                  const angle = (index * 72 - 90) * (Math.PI / 180);
                  const radius = 130;
                  // Center is 50%, 50%
                  // We'll use CSS transform for positioning to make it cleaner but inline styles for calc
                  const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
                  const top = `calc(50% + ${Math.sin(angle) * radius}px)`;

                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-default"
                      style={{ left, top }}
                    >
                      <div className="w-16 h-16 rounded-xl border border-primary/20 bg-background/80 backdrop-blur-md flex items-center justify-center p-3 shadow-lg group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                        <div className="text-center">
                          <span className="text-[10px] font-bold text-primary block leading-tight">{service.name}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground bg-background/50 px-2 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {service.role}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
