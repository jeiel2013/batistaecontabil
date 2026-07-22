import { Mail, Phone, MapPin, InstagramIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import batistaecontabil from "../assets/batistaecontabil.svg";

const QUICK_LINKS = [
  { id: "home", label: "Início" },
  { id: "sobre", label: "Sobre Nós" },
  { id: "servicos", label: "Serviços" },
  { id: "contato", label: "Contato" },
];

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-900/95">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="flex flex-col space-y-4">
            <img
              src={batistaecontabil}
              alt="Batista E-Contábil"
              loading="lazy"
              width={160}
              height={45}
              className="h-auto w-auto max-w-[160px] transition-transform duration-300 hover:scale-105"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Soluções contábeis personalizadas para sua empresa crescer com
              segurança e conformidade.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display text-lg font-semibold text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-white/80 hover:text-gold-accent transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display text-lg font-semibold text-white">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-accent" />
                <span className="text-white/80 text-sm">(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-accent" />
                <span className="text-white/80 text-sm">
                  contato@empresa.com.br
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span className="text-white/80 text-sm">São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <InstagramIcon className="w-4 h-4 text-gold-accent" />
                <a
                  className="text-white/80 text-sm hover:text-gold-accent transition-colors duration-200"
                  href="https://www.instagram.com/contabilidade.batistaoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contabilidade.batistaoficial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white/80 text-sm">
            &copy; {currentYear} Batista E-Contábil. Todos os direitos
            reservados.
          </p>
          <p className="text-white/80 text-sm mt-4 md:mt-0">
            Desenvolvido por{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="text-white hover:text-gold-accent">
                  @jeiel2013
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/jeiel2013.png" />
                    <AvatarFallback>Jeiel</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@jeiel2013</h4>
                    <p className="text-sm">
                      Desenvolvedor Full-Stack - Instagram: @jeiel2013
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
