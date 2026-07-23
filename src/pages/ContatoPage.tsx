import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};
const INITIAL_FORM: FormState = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
};
const LABEL_CLASS =
  "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2";

const ContatoPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setError("Preencha nome, e-mail e mensagem para continuar.");
      return;
    }
    const telefone = "5531999999999";
    const mensagem = `Olá! Meu nome é ${form.nome}.%0AE-mail: ${form.email}%0ATelefone: ${form.telefone || "não informado"}%0A%0A${form.mensagem}`;
    window.open(
      `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    setForm(INITIAL_FORM);
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          <div className="space-y-4 flex flex-col">
            {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
              <Card key={title}>
                <CardContent className="flex items-start gap-3 p-4 sm:p-5">
                  <div className="border border-border-subtle p-2 rounded-md shrink-0">
                    <Icon className="w-5 h-5 text-blue-main" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-gold-accent mb-1">
                      {title}
                    </span>
                    {lines.map((line, i) => (
                      <p
                        key={line}
                        className={
                          i === 0
                            ? "text-ink font-medium text-sm sm:text-base break-words"
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

          <div className="flex flex-col h-full">
            <Card className="flex flex-col h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col flex-1">
                <h2 className="text-2xl sm:text-3xl font-semibold text-blue-main tracking-tight mb-1">
                  Envie uma Mensagem
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Respondemos pelo WhatsApp em horário comercial.
                </p>

                {sent && (
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-md px-4 py-3 mb-5 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>
                      Mensagem pronta! Continue o envio pelo WhatsApp que
                      abrimos para você.
                    </span>
                  </div>
                )}

                <form
                  className="space-y-5 flex flex-col flex-1"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div>
                    <label htmlFor="nome" className={LABEL_CLASS}>
                      Nome Completo
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={handleChange("nome")}
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={LABEL_CLASS}>
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange("email")}
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className={LABEL_CLASS}>
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={form.telefone}
                      onChange={handleChange("telefone")}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="mensagem" className={LABEL_CLASS}>
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      placeholder="Como podemos ajudar?"
                      className="resize-none flex-1"
                      value={form.mensagem}
                      onChange={handleChange("mensagem")}
                      required
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}
                  <Button type="submit" className="w-full text-lg py-6 mt-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoPage;
