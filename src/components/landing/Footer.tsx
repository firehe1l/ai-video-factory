import { Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg gradient-emerald">
              <Cpu className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">AI Video Pipeline</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#technical" className="hover:text-foreground transition-colors">
              Спецификация
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Документация
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Контакты
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 AI Video Pipeline
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
