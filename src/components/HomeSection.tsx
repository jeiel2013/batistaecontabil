import { CircleCheckBig } from "lucide-react";
import Home from "../assets/home.svg";

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center bg-gradient-to-br from-white to-blue-50 scroll-mt-16 pb-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Texto principal */}
        <div className="flex-1 max-w-xl space-y-6 sm:space-y-8 md:space-y-8 md:translate-y-[-20px]">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-claro leading-tight mb-2 sm:mb-3">
              Contabilidade completa
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
              para pequenas e médias empresas
            </h2>
          </div>

          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
            <li className="flex items-start">
              <span className="text-blue-600 text-x1 mr-2">
                <CircleCheckBig />
              </span>
              <span>Planos que cabem no seu bolso</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl mr-2">
                <CircleCheckBig />
              </span>
              <span>Sua empresa 100% regularizada</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl mr-2">
                <CircleCheckBig />
              </span>
              <span>Atendimento personalizado</span>
            </li>
          </ul>

          <button className="mt-4 bg-blue-main text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-claro hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
            Conheça nossos planos
          </button>
        </div>

        {/* Imagem ilustrativa */}
        <div className="flex-1 flex justify-center md:justify-end md:pr-8 lg:pr-16 pb-8 sm:pb-10 md:pb-12">
          <img
            src={Home}
            alt="Ilustração de contabilidade digital"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
