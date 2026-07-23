import { Link } from "react-router-dom";
import {
  CircleCheckBig,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import Home from "../assets/home.svg";
import equipeFoto from "@/assets/sobre/equipe.jpg";

const BENEFITS = [
  "Planos que cabem no seu bolso",
  "Sua empresa 100% regularizada",
  "Atendimento personalizado",
];

const VALUES_PREVIEW = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Sua empresa sempre regularizada, sem surpresas.",
  },
  {
    icon: HeartHandshake,
    title: "Compromisso",
    description: "Acompanhamento próximo, como parte do seu time.",
  },
  {
    icon: Sparkles,
    title: "Transparência",
    description: "Clareza total sobre impostos, prazos e obrigações.",
  },
];

const SERVICE_PREVIEW = [
  {
    label: "MEI",
    description: "Formalização e emissão de notas simplificadas.",
  },
  { label: "Comércio", description: "Gestão de estoque e tributos otimizada." },
  {
    label: "Prestador de Serviços",
    description: "Notas fiscais e impostos sem burocracia.",
  },
  {
    label: "Indústria",
    description: "Custos de produção e conformidade completa.",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero — branco */}
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

      {/* 2. Sobre — azul */}
      <section className="py-16 sm:py-20 bg-blue-main">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
            <img
              src={equipeFoto}
              alt="Equipe da Batista E-Contábil em atendimento"
              width={480}
              height={360}
              loading="lazy"
              className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
            />
            <div className="space-y-5">
              <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
                Quem somos
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Perto do seu negócio, do jeito certo
              </h2>
              <p className="text-blue-claro leading-relaxed">
                Somos uma empresa de contabilidade dedicada a oferecer soluções
                personalizadas e acessíveis para o seu negócio crescer com
                segurança e conformidade.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-gold-accent transition-colors"
              >
                Conheça nossa história
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mini-preview dos valores */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 border-t border-white/10 pt-10">
            {VALUES_PREVIEW.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-gold-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-blue-claro text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Serviços — branco */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-main tracking-tight mt-2 mb-10">
            Soluções para cada tipo de negócio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 text-left">
            {SERVICE_PREVIEW.map(({ label, description }) => (
              <div
                key={label}
                className="border border-border-subtle rounded-lg py-6 px-5 hover:border-blue-claro transition-colors"
              >
                <span className="font-semibold text-blue-main block mb-1.5">
                  {label}
                </span>
                <span className="text-sm text-ink/60 leading-relaxed">
                  {description}
                </span>
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

      {/* 4. CTA final — azul */}
      <section className="py-16 sm:py-20 bg-blue-main text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Vamos conversar sobre sua empresa?
          </h2>
          <p className="text-blue-claro max-w-xl mx-auto mb-8">
            Fale com a gente e descubra o plano ideal para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-white text-blue-main px-8 py-4 rounded-md font-semibold hover:bg-gold-accent hover:text-white transition-colors duration-300"
            >
              Entrar em contato
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-blue-claro text-sm">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-accent" />
                (11) 1234-5678
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-accent" />
                contato@empresa.com.br
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
