import * as React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContatoSection: React.FC = () => {
  return (
    <section
      id="contato"
      className="min-h-screen bg-blue-main flex items-center py-20 scroll-mt-16"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-blue-claro max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer. Fale conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-4">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="bg-blue-claro p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">
                    Telefone
                  </h4>
                  <p className="text-blue-claro text-sm">(11) 1234-5678</p>
                  <p className="text-blue-claro text-sm">(11) 98765-4321</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="bg-blue-claro p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">
                    E-mail
                  </h4>
                  <p className="text-blue-claro text-sm">
                    contato@empresa.com.br
                  </p>
                  <p className="text-blue-claro text-sm">
                    suporte@empresa.com.br
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="bg-blue-claro p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">
                    Endereço
                  </h4>
                  <p className="text-blue-claro text-sm">
                    Rua Exemplo, 123 - Centro
                  </p>
                  <p className="text-blue-claro text-sm">
                    São Paulo - SP, 01234-567
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="bg-blue-claro p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">
                    Horário de Atendimento
                  </h4>
                  <p className="text-blue-claro text-sm">
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="text-blue-claro text-sm">Sábado: 8h às 12h</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <div>
            <Card className="bg-white border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-blue-main mb-6">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-5">
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
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-main hover:bg-blue-claro text-white text-lg py-6 font-semibold shadow-lg transition-all duration-300"
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
