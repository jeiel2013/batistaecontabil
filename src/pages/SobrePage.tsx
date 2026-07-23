import * as React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

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

const SobrePage: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: true }),
  );

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-5 order-2 md:order-1">
            <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
              Quem somos
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-main tracking-tight">
              Sobre nós
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Contabilidade completa para pequenas e médias empresas
            </h2>
            <p className="text-ink/70 leading-relaxed">
              Somos uma empresa de contabilidade dedicada a oferecer soluções
              personalizadas e acessíveis para o seu negócio crescer com
              segurança e conformidade.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ImagePlaceholder
              ratio="aspect-[4/5]"
              label="Foto da equipe ou do escritório"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-muted border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
              Nossos valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-main tracking-tight mt-2">
              O que guia nosso trabalho
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Carousel plugins={[plugin.current]} className="w-full">
              <CarouselContent>
                {VALUES.map(({ icon: Icon, title, description }) => (
                  <CarouselItem key={title}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center justify-center text-center gap-4 min-h-[240px] p-8">
                          <Icon className="w-8 h-8 text-blue-claro" />
                          <h3 className="text-xl font-semibold text-blue-main">
                            {title}
                          </h3>
                          <p className="text-ink/60 text-sm leading-relaxed max-w-xs">
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
        </div>
      </section>
    </>
  );
};

export default SobrePage;
