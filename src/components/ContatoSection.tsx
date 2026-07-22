import * as React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

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
    title: "Horário de Atendimento",
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

const ContatoSection: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

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
      "noopener,noreferrer"
    );

    setSent(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section
      id="contato"
      className="min-h-screen bg-blue-main flex items-center py-20 scroll-mt-16"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block text-sm sm:text-base font-semibold tracking-wide text-gold-accent uppercase mb-3">
            Fale com a gente
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-blue-claro max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer. Fale conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Informações de Contato */}
          <div className="space-y-4 flex flex-col">
            {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
              <Card
                key={title}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="flex items-start gap-3 p-4">
                  <div className="bg-gold-accent p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-main" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      {title}
                    </h4>
                    {lines.map((line) => (
                      <p key={line} className="text-blue-claro text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulário de Contato */}
          <div className="flex flex-col h-full">
            <Card className="bg-white border-none shadow-xl flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-1">
                <h3 className="text-3xl font-semibold text-blue-main mb-6">
                  Envie uma Mensagem
                </h3>

                {sent && (
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-5 text-sm">
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
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome Completo
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome"
                      className="w-full"
                      value={form.nome}
                      onChange={handleChange("nome")}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full"
                      value={form.email}
                      onChange={handleChange("email")}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full"
                      value={form.telefone}
                      onChange={handleChange("telefone")}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      placeholder="Como podemos ajudar?"
                      className="w-full resize-none flex-1"
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

                  <Button
                    type="submit"
                    className="w-full bg-blue-main hover:bg-blue-claro text-white text-lg py-6 font-semibold shadow-lg transition-all duration-300 mt-auto"
                  >
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

export default ContatoSection;
