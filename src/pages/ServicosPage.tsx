import { useState } from "react";
import {
  CircleCheckBig,
  MessageCircle,
  Clock,
  ShieldCheck,
  Laptop,
  UserCheck,
} from "lucide-react";
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

const DIFERENCIAIS = [
  {
    icon: Clock,
    title: "Resposta ágil",
    description: "Retorno rápido pelo WhatsApp, sem fila de atendimento.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade em dia",
    description: "Prazos e obrigações acompanhados de perto, sem surpresas.",
  },
  {
    icon: Laptop,
    title: "Tudo digital",
    description: "Documentos e informações centralizados, sem burocracia.",
  },
  {
    icon: UserCheck,
    title: "Time especializado",
    description:
      "Um contador por segmento, entendendo a realidade do seu setor.",
  },
];

const ServicosPage: React.FC = () => {
  const [areaSelecionada, setAreaSelecionada] = useState<string>("mei");

  const handleWhatsApp = () => {
    const area = servicosData[areaSelecionada]?.titulo || "serviços contábeis";
    const mensagem = `Olá! Gostaria de saber mais sobre os serviços para ${area}.`;
    const telefone = "5531999999999";
    window.open(
      `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const servicoAtual = servicosData[areaSelecionada];

  return (
    <>
      {/* Cabeçalho da página */}
      <section className="pt-16 sm:pt-20 pb-10 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
            O que fazemos por você
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-main tracking-tight mt-2 mb-4">
            Nossos Serviços
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções contábeis personalizadas para diferentes áreas de atuação
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="pb-16 sm:pb-20 border-b border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DIFERENCIAIS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="border border-border-subtle rounded-lg p-6 hover:border-blue-claro transition-colors"
              >
                <Icon className="w-6 h-6 text-blue-claro mb-3" />
                <h3 className="font-semibold text-blue-main mb-1">{title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seletor de área + benefícios */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center">
          <div className="w-full max-w-sm mb-10">
            <Select value={areaSelecionada} onValueChange={setAreaSelecionada}>
              <SelectTrigger className="w-full text-base py-3 border border-border-subtle rounded-md">
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

          <div
            key={areaSelecionada}
            className="w-full max-w-4xl border border-border-subtle rounded-lg p-6 sm:p-10 lg:p-14 animate-fade-in-up"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-main mb-8">
              Serviços para {servicoAtual.titulo}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-12 sm:gap-y-6 mb-10 text-left">
              {servicoAtual.beneficios.map((beneficio) => (
                <div
                  key={beneficio}
                  className="flex items-start space-x-3 text-ink/80"
                >
                  <CircleCheckBig className="w-5 h-5 text-blue-claro mt-0.5 shrink-0" />
                  <span>{beneficio}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base font-semibold rounded-md w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicosPage;
