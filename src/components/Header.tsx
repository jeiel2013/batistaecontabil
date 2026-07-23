import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import batistaecontabil from "../assets/batistaecontabil.svg";

const NAV_ITEMS = [
  { to: "/", label: "Início", end: true },
  { to: "/sobre", label: "Sobre", end: false },
  { to: "/servicos", label: "Serviços", end: false },
  { to: "/contato", label: "Contato", end: false },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition-colors duration-300 ease-fluid after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-gold-accent after:transition-[width] after:duration-300 after:ease-fluid ${
      isActive
        ? "text-white font-semibold after:w-full"
        : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-blue-main border-b transition-colors duration-300 ${
        +isScrolled || isMenuOpen ? "border-white/10" : "border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:px-10 lg:py-5">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center focus-visible:outline-2 focus-visible:outline-gold-accent rounded-sm"
        >
          <img
            src={batistaecontabil}
            alt="Batista E-Contábil"
            width={140}
            height={40}
            className="h-10 w-auto max-w-[160px]"
          />
        </Link>

        <nav className="hidden md:flex space-x-10">
          <ul className="flex items-center space-x-10 text-lg font-medium">
            {NAV_ITEMS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden text-white p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-gold-accent rounded-md"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      <nav
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 space-y-1 text-lg font-medium">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 border-b border-white/10 transition-colors duration-200 ${
                    isActive
                      ? "text-gold-accent"
                      : "text-white/85 hover:text-gold-accent"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
