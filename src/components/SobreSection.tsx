import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Sua empresa sempre regularizada, sem surpresas no caminho.",
  },
  {
    icon: HeartHandshake,
    title: "Compromisso",
    description: "Acompanhamento próximo, como parte do seu time.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Planejamento tributário pensado para escalar seu negócio.",
  },
  {
    icon: Users,
    title: "Atendimento humano",
    description: "Conversas diretas, sem burocracia ou respostas automáticas.",
  },
  {
    icon: Sparkles,
    title: "Transparência",
    description: "Clareza total sobre impostos, prazos e obrigações.",
  },
];

const SobreSection: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: true })
  );

  return (
    <section
      id="sobre"
      className="min-h-screen bg-blue-main flex items-center py-16 sm:py-20 scroll-mt-16"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Carrossel de valores */}
          <div className="flex-1 w-full max-w-2xl">
            <Carousel plugins={[plugin.current]} className="w-full">
              <CarouselContent>
                {VALUES.map(({ icon: Icon, title, description }) => (
                  <CarouselItem key={title}>
                    <div className="p-1">
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                        <CardContent className="flex flex-col items-center justify-center text-center gap-4 min-h-[260px] sm:min-h-[320px] p-6 sm:p-10">
                          <span className="bg-gold-accent/15 text-gold-accent rounded-full p-4 shrink-0">
                            <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                          </span>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                            {title}
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xs">
                            {description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Sobre nós */}
          <div className="flex-1 max-w-xl space-y-6">
            <div>
              <span className="inline-block text-sm sm:text-base font-semibold tracking-wide text-gold-accent uppercase mb-3">
                Quem somos
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Sobre nós
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-claro font-medium leading-snug">
                Contabilidade completa para pequenas e médias empresas
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Somos uma empresa de contabilidade dedicada a oferecer soluções
              personalizadas e acessíveis para o seu negócio crescer com
              segurança e conformidade.
            </p>

            <ul className="space-y-3 text-base sm:text-lg text-white leading-relaxed">
              <li className="flex items-start">
                <span className="text-gold-accent text-xl mr-3 shrink-0">✓</span>
                <span>Planos que cabem no seu bolso</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-accent text-xl mr-3 shrink-0">✓</span>
                <span>Sua empresa 100% regularizada</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-accent text-xl mr-3 shrink-0">✓</span>
                <span>Atendimento personalizado</span>
              </li>
            </ul>

            <button className="mt-6 bg-white text-blue-main text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-gold-accent hover:text-white transition-all duration-300 w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-accent">
              Conheça nossos planos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;