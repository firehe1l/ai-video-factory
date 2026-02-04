import { ArrowDown, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSpec = () => {
    document.getElementById("technical")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero mesh-gradient">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Автономная AI-система
            </span>
            <Zap className="w-4 h-4 text-primary" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Автономная система генерации{" "}
            <span className="text-gradient">видеоконтента</span>{" "}
            на базе искусственного интеллекта
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-1">
            Профессиональное решение для ежедневного выпуска видео-аватаров без участия человека
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-delay-2">
            <Button 
              onClick={scrollToSpec}
              size="lg"
              className="group relative px-8 py-6 text-base font-semibold gradient-emerald glow-emerald hover:scale-105 transition-all duration-300"
            >
              Техническая спецификация
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16 animate-fade-in-delay-3">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">1</div>
              <div className="text-sm text-muted-foreground mt-1">видео / день</div>
            </div>
            <div className="text-center border-x border-border/30">
              <div className="text-2xl md:text-3xl font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground mt-1">языков</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">0</div>
              <div className="text-sm text-muted-foreground mt-1">операторов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
