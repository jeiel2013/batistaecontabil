import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Card, CardContent } from "./ui/card";

const SobreSection: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section
      id="sobre"
      className="min-h-screen bg-blue-main flex items-center py-20 scroll-mt-16"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Carrossel de imagens */}
          <div className="flex-1 w-full max-w-2xl">
            <Carousel plugins={[plugin.current]} className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
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
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Sobre nós
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-claro font-medium">
                Contabilidade completa para pequenas e médias empresas
              </h2>
            </div>

            <p className="text-lg text-white leading-relaxed">
              Somos uma empresa de contabilidade dedicada a oferecer soluções
              personalizadas e acessíveis para o seu negócio crescer com
              segurança e conformidade.
            </p>

            <ul className="space-y-3 text-lg text-white leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-claro text-xl mr-3">✓</span>
                <span>Planos que cabem no seu bolso</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-claro text-xl mr-3">✓</span>
                <span>Sua empresa 100% regularizada</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-claro text-xl mr-3">✓</span>
                <span>Atendimento personalizado</span>
              </li>
            </ul>

            <button className="mt-6 bg-white text-blue-main text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-claro hover:text-white transition-all duration-300">
              Conheça nossos planos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
