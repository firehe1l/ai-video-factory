import { Server, Workflow, Code2, Cloud } from "lucide-react";

const techStack = [
  { icon: Workflow, label: "n8n Orchestration" },
  { icon: Server, label: "API Integration" },
  { icon: Code2, label: "Python Processing" },
  { icon: Cloud, label: "Cloud Assembly" },
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Техническая сложность
            </span>
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
                Реализована логика ожидания (Webhooks) для синхронизации 
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
            <div className="bento-card p-8 relative overflow-hidden">
              {/* Animated background lines */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Connection lines */}
                  <path d="M50,50 L200,150 L350,50" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                  <path d="M50,150 L200,150" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                  <path d="M200,150 L350,150" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                  <path d="M50,250 L200,150 L350,250" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* API Nodes */}
              <div className="relative z-10 grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div 
                    key={num}
                    className={`${num === 3 ? 'col-start-2' : ''} flex flex-col items-center justify-center p-4 rounded-xl border border-primary/30 bg-background/80 backdrop-blur-sm`}
                  >
                    <div className="w-10 h-10 rounded-lg gradient-emerald flex items-center justify-center mb-2">
                      <span className="text-sm font-bold text-primary-foreground">API</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Service {num}</span>
                  </div>
                ))}
              </div>

              {/* Center orchestrator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full gradient-emerald flex items-center justify-center shadow-glow animate-pulse-glow">
                <Workflow className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
