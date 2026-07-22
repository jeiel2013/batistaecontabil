import { CircleCheckBig } from "lucide-react";
import Home from "../assets/home.svg";

const BENEFITS = [
  "Planos que cabem no seu bolso",
  "Sua empresa 100% regularizada",
  "Atendimento personalizado",
];

const HomeSection: React.FC = () => {
  const handleScrollToServicos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#servicos");
    if (!element) return;
    const headerHeight = document.querySelector("header")?.offsetHeight || 90;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 bg-dot-grid scroll-mt-16 pb-10 overflow-hidden"
    >
      {/* Ambient accent shapes, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-claro/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold-accent/10 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Texto principal */}
        <div className="flex-1 max-w-xl space-y-6 sm:space-y-8 md:translate-y-[-20px] animate-fade-in-up">
          <div>
            <span className="inline-block text-sm sm:text-base font-semibold tracking-wide text-gold-accent uppercase mb-3">
              Contabilidade digital &middot; humana
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-main leading-tight mb-2 sm:mb-3">
              Contabilidade completa
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
              para pequenas e médias empresas
            </h2>
          </div>

          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start">
                <span className="text-blue-claro mr-2 mt-0.5 shrink-0">
                  <CircleCheckBig className="w-5 h-5" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleScrollToServicos}
            className="mt-4 bg-blue-main text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-claro hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-accent"
          >
            Conheça nossos planos
          </button>
        </div>

        {/* Imagem ilustrativa */}
        <div className="flex-1 flex justify-center md:justify-end md:pr-8 lg:pr-16 pb-8 sm:pb-10 md:pb-12 animate-fade-in-up delay-200">
          <img
            src={Home}
            alt="Ilustração de contabilidade digital"
            width={520}
            height={420}
            fetchPriority="high"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
