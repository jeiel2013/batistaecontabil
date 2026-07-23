import { Link } from "react-router-dom";
import { CircleCheckBig, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import Home from "../assets/home.svg";

const BENEFITS = [
  "Planos que cabem no seu bolso",
  "Sua empresa 100% regularizada",
  "Atendimento personalizado",
];

const SERVICE_PREVIEW = [
  "MEI",
  "Comércio",
  "Prestador de Serviços",
  "Indústria",
];

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-12">
          <div className="flex-1 max-w-xl space-y-7">
            <div className="accent-rule">
              <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
                Contabilidade digital &middot; humana
              </span>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-main leading-tight tracking-tight mb-3">
                Contabilidade completa
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                para pequenas e médias empresas
              </h2>
            </div>

            <ul className="space-y-3 text-base sm:text-lg text-ink/80">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <CircleCheckBig className="w-5 h-5 text-blue-claro mr-2 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 bg-blue-main text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-blue-principal transition-colors duration-300 w-full sm:w-auto justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-accent"
            >
              Conheça nossos planos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={Home}
              alt="Ilustração de contabilidade digital"
              width={480}
              height={380}
              fetchPriority="high"
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Teaser: Sobre */}
      <section className="py-16 sm:py-20 border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ImagePlaceholder
            ratio="aspect-[4/3]"
            label="Foto da equipe Batista E-Contábil"
          />
          <div className="space-y-5">
            <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-main tracking-tight">
              Perto do seu negócio, do jeito certo
            </h2>
            <p className="text-ink/70 leading-relaxed">
              Somos uma empresa de contabilidade dedicada a oferecer soluções
              personalizadas e acessíveis para o seu negócio crescer com
              segurança e conformidade.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-1.5 text-blue-main font-semibold hover:text-blue-principal transition-colors"
            >
              Conheça nossa história
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Teaser: Serviços */}
      <section className="py-16 sm:py-20 bg-surface-muted border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-main tracking-tight mt-2 mb-10">
            Soluções para cada tipo de negócio
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {SERVICE_PREVIEW.map((label) => (
              <div
                key={label}
                className="border border-border-subtle rounded-lg py-8 px-4 bg-background hover:border-blue-claro transition-colors"
              >
                <span className="font-semibold text-blue-main">{label}</span>
              </div>
            ))}
          </div>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 border border-blue-main text-blue-main px-6 py-3 rounded-md font-semibold hover:bg-blue-main hover:text-white transition-colors duration-300"
          >
            Ver todos os serviços
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-blue-main text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Vamos conversar sobre sua empresa?
          </h2>
          <p className="text-blue-claro max-w-xl mx-auto mb-8">
            Fale com a gente e descubra o plano ideal para o seu negócio.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-main px-8 py-4 rounded-md font-semibold hover:bg-gold-accent hover:text-white transition-colors duration-300"
          >
            Entrar em contato
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
