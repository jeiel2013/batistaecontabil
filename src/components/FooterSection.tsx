import { Mail, Phone, MapPin, InstagramIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import batistaecontabil from "../assets/batistaecontabil.svg";

const QUICK_LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/sobre", label: "Sobre Nós", end: false },
  { to: "/servicos", label: "Serviços", end: false },
  { to: "/contato", label: "Contato", end: false },
];

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-main">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col space-y-4">
            <img
              src={batistaecontabil}
              alt="Batista E-Contábil"
              loading="lazy"
              width={160}
              height={45}
              className="h-auto w-auto max-w-[160px]"
            />
            <p className="text-white text-sm leading-relaxed">
              Soluções contábeis personalizadas para sua empresa crescer com
              segurança e conformidade.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-gold-accent">
              Links Rápidos
            </span>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive
                          ? "text-white font-medium"
                          : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-gold-accent">
              Contato
            </span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-accent shrink-0" />
                <span className="text-white text-sm">(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <span className="text-white text-sm">contato@empresa.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0" />
                <span className="text-white text-sm">São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <InstagramIcon className="w-4 h-4 text-gold-accent shrink-0" />
                <a
                  className="text-white text-sm hover:text-gold-accent transition-colors duration-200"
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

        <div className="border-t border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white text-sm">
            &copy; {currentYear} Batista E-Contábil. Todos os direitos reservados.
          </p>
          <p className="text-white/70 text-sm mt-4 md:mt-0">
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
                      Desenvolvedor Full-Stack Freelancer
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