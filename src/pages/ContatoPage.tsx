import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(11) 1234-5678", "(11) 98765-4321"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["contato@empresa.com.br", "suporte@empresa.com.br"],
  },
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Rua Exemplo, 123 - Centro", "São Paulo - SP, 01234-567"],
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
  },
];

const ContatoPage: React.FC = () => {
  const handleWhatsApp = () => {
    const telefone = "5531999999999";
    const mensagem = "Olá! Gostaria de falar com a Batista E-Contábil.";
    window.open(
      `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
            Fale com a gente
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-main tracking-tight mt-2 mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer. Fale conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cards de contato — grid 2x2 */}
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
              <Card
                key={title}
                className="hover:border-blue-claro transition-smooth"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-blue-main/5 border border-blue-main/10 p-3 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-blue-main" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-gold-accent mb-1.5">
                      {title}
                    </span>
                    {lines.map((line, i) => (
                      <p
                        key={line}
                        className={
                          i === 0
                            ? "text-ink font-medium text-base break-words"
                            : "text-ink/60 text-sm break-words"
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Card do WhatsApp — largura das 2 colunas juntas, formato horizontal */}
          <Card className="border-blue-main/15">
            <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8">
              <div className="bg-green-50 border border-green-200 p-4 rounded-full shrink-0">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-main tracking-tight mb-1">
                  Fale agora pelo WhatsApp
                </h2>
                <p className="text-ink/60 text-sm sm:text-base leading-relaxed">
                  Sem formulários e sem espera: envie sua mensagem direto para
                  nossa equipe e receba um retorno rápido, no horário comercial.
                </p>
              </div>
              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base font-semibold rounded-md w-full sm:w-auto shrink-0"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContatoPage;
