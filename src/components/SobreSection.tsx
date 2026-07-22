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
      className="min-h-screen bg-blue-main flex items-center py-20 scroll-mt-16"
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
                        <CardContent className="flex flex-col items-center justify-center text-center gap-4 aspect-square p-8 sm:p-10">
                          <span className="bg-gold-accent/15 text-gold-accent rounded-full p-4">
                            <Icon className="w-9 h-9" />
                          </span>
                          <h3 className="text-2xl font-semibold text-white">
                            {title}
                          </h3>
                          <p className="text-blue-claro text-base leading-relaxed">
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
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Sobre nós
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-claro font-medium">
                Contabilidade completa para pequenas e médias empresas
              </h2>
            </div>

            <p className="text-lg text-white/90 leading-relaxed">
              Somos uma empresa de contabilidade dedicada a oferecer soluções
              personalizadas e acessíveis para o seu negócio crescer com
              segurança e conformidade.
            </p>

            <ul className="space-y-3 text-lg text-white leading-relaxed">
              <li className="flex items-start">
                <span className="text-gold-accent text-xl mr-3">✓</span>
                <span>Planos que cabem no seu bolso</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-accent text-xl mr-3">✓</span>
                <span>Sua empresa 100% regularizada</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-accent text-xl mr-3">✓</span>
                <span>Atendimento personalizado</span>
              </li>
            </ul>

            <button className="mt-6 bg-white text-blue-main text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gold-accent hover:text-white transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-accent">
              Conheça nossos planos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
