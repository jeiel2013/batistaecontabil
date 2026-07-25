import {
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import equipeFoto from "@/assets/sobre/equipe.jpg";
import escritorioFoto from "@/assets/sobre/escritorio.jpg";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Sua empresa sempre regularizada, sem surpresas no caminho. Acompanhamos prazos e obrigações de perto, para que você não precise se preocupar com isso.",
  },
  {
    icon: HeartHandshake,
    title: "Compromisso",
    description:
      "Acompanhamento próximo, como parte do seu time. Entendemos a rotina do seu negócio para dar respostas que fazem sentido pra sua realidade.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description:
      "Planejamento tributário pensado para escalar seu negócio, com orientação sobre o melhor regime e as melhores decisões em cada fase da empresa.",
  },
  {
    icon: Users,
    title: "Atendimento humano",
    description:
      "Conversas diretas, sem burocracia ou respostas automáticas. Você fala com quem realmente entende da sua contabilidade.",
  },
  {
    icon: Sparkles,
    title: "Transparência",
    description:
      "Clareza total sobre impostos, prazos e obrigações, para que toda decisão seja tomada com informação completa e sem letras miúdas.",
  },
];

const SobrePage: React.FC = () => {
  return (
    <>
      {/* Componente principal: texto mais completo, imagem reduzida */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="space-y-5 md:col-span-3 order-2 md:order-1">
            <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
              Quem somos
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-main tracking-tight">
              Sobre nós
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Contabilidade completa para pequenas e médias empresas
            </h2>

            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Somos uma empresa de contabilidade dedicada a oferecer soluções
                personalizadas e acessíveis para o seu negócio crescer com
                segurança e conformidade. Atendemos empresários de diferentes
                setores — do MEI à indústria — entendendo que cada tipo de
                negócio tem particularidades fiscais e operacionais próprias.
              </p>
              <p>
                Nosso trabalho vai além de entregar guias e declarações em dia:
                acompanhamos de perto o momento da sua empresa para indicar o
                regime tributário mais vantajoso, antecipar obrigações e evitar
                surpresas que possam pesar no caixa do seu negócio.
              </p>
              <p>
                Acreditamos em um atendimento próximo e sem burocracia — por
                isso priorizamos conversas diretas, canais rápidos como o
                WhatsApp, e explicações claras sobre cada decisão contábil, sem
                jargão desnecessário.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2">
            <img
              src={equipeFoto}
              alt="Equipe da Batista E-Contábil em atendimento"
              width={340}
              height={425}
              loading="lazy"
              className="w-full max-w-xs sm:max-w-sm mx-auto md:max-w-none h-auto aspect-[4/5] object-cover rounded-lg border border-border-subtle"
            />
          </div>
        </div>
      </section>

      {/* Foto do escritório/ambiente */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <img
            src={escritorioFoto}
            alt="Ambiente de trabalho da Batista E-Contábil"
            width={1200}
            height={500}
            loading="lazy"
            className="w-full h-auto aspect-[21/9] object-cover rounded-lg border border-border-subtle"
          />
        </div>
      </section>

      {/* Nossos valores — grid de cards, sem carrossel */}
      <section className="py-16 sm:py-20 bg-surface-muted border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
              Nossos valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-main tracking-tight mt-2">
              O que guia nosso trabalho
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="hover:border-blue-claro transition-smooth"
              >
                <CardContent className="flex flex-col gap-4 p-8">
                  <Icon className="w-9 h-9 text-blue-claro" />
                  <h3 className="text-2xl font-semibold text-blue-main">
                    {title}
                  </h3>
                  <p className="text-ink/70 text-lg leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
