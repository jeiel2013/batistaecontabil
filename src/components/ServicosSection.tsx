import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ServicoInfo {
  titulo: string;
  beneficios: string[];
}

const servicosData: Record<string, ServicoInfo> = {
  advogado: {
    titulo: "Advocacia",
    beneficios: [
      "Abertura de empresa simplificada",
      "Gestão contábil especializada",
      "Planejamento tributário otimizado",
      "Declarações e obrigações acessórias",
      "Folha de pagamento e departamento pessoal",
      "Consultoria financeira personalizada",
    ],
  },
  "produtor-rural": {
    titulo: "Produtor Rural",
    beneficios: [
      "Contabilidade rural especializada",
      "Gestão de custos de produção",
      "Planejamento tributário rural",
      "Controle de estoque e patrimônio",
      "Declarações específicas do setor",
      "Consultoria em financiamentos rurais",
    ],
  },
  mei: {
    titulo: "MEI",
    beneficios: [
      "Formalização do MEI",
      "Emissão de notas fiscais",
      "Pagamento do DAS mensal",
      "Declaração anual simplificada",
      "Consultoria para crescimento",
      "Suporte completo e personalizado",
    ],
  },
  comercio: {
    titulo: "Comércio",
    beneficios: [
      "Gestão contábil completa",
      "Controle de estoque integrado",
      "Planejamento tributário eficiente",
      "Emissão de notas fiscais",
      "Análise de lucratividade",
      "Consultoria financeira estratégica",
    ],
  },
  "prestador-servicos": {
    titulo: "Prestador de Serviços",
    beneficios: [
      "Abertura e regularização da empresa",
      "Gestão de impostos simplificada",
      "Emissão de notas fiscais de serviço",
      "Planejamento tributário personalizado",
      "Controle financeiro completo",
      "Suporte contábil contínuo",
    ],
  },
  industria: {
    titulo: "Indústria",
    beneficios: [
      "Contabilidade industrial especializada",
      "Gestão de custos de produção",
      "Apuração de impostos complexos",
      "Controle de inventário",
      "Planejamento tributário estratégico",
      "Análise de performance financeira",
    ],
  },
};

const ServicosSection = () => {
  const [areaSelecionada, setAreaSelecionada] = useState<string>("mei");

  const handleWhatsApp = () => {
    const area = servicosData[areaSelecionada]?.titulo || "serviços contábeis";
    const mensagem = `Olá! Gostaria de saber mais sobre os serviços para ${area}.`;
    const telefone = "5531999999999";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  };

  const servicoAtual = servicosData[areaSelecionada];

  return (
    <section
      id="servicos"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden py-12 sm:py-16 lg:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 mb-4 sm:mb-5 lg:mb-6">
          Nossos Serviços
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mb-8 sm:mb-10 lg:mb-12 px-2">
          Soluções contábeis personalizadas para diferentes áreas de atuação
        </p>

        <div className="w-full max-w-sm sm:max-w-md mb-8 sm:mb-12 lg:mb-14 px-2">
          <Select value={areaSelecionada} onValueChange={setAreaSelecionada}>
            <SelectTrigger className="w-full text-base sm:text-lg lg:text-lg py-3 sm:py-4 lg:py-5 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400">
              <SelectValue placeholder="Escolha uma área..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="advogado">Advocacia</SelectItem>
              <SelectItem value="produtor-rural">Produtor Rural</SelectItem>
              <SelectItem value="mei">
                MEI (Microempreendedor Individual)
              </SelectItem>
              <SelectItem value="comercio">Comércio</SelectItem>
              <SelectItem value="prestador-servicos">
                Prestador de Serviços
              </SelectItem>
              <SelectItem value="industria">Indústria</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-10 lg:p-14 transition-all mx-2 mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-700 mb-6 sm:mb-8 lg:mb-8">
            Serviços para {servicoAtual.titulo}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-x-12 lg:gap-y-6 mb-8 sm:mb-12 lg:mb-12 text-left">
            {servicoAtual.beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 text-gray-800 text-base sm:text-lg lg:text-lg leading-relaxed"
              >
                <span className="text-blue-600 text-2xl mt-1 flex-shrink-0">
                  •
                </span>
                <span>{beneficio}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 lg:px-10 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-lg font-semibold shadow-lg transition-all rounded-xl sm:rounded-2xl w-full sm:w-auto"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
