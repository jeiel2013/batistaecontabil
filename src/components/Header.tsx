import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import batistaecontabil from "../assets/batistaecontabil.svg";

const NAV_ITEMS = [
  { id: "home", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "contato", label: "Contato" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    setIsMenuOpen(false);
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-blue-main/95 backdrop-blur-lg shadow-md"
          : "bg-blue-main"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:px-10 lg:py-5">
        <a
          href="#home"
          onClick={handleScroll}
          className="flex items-center focus-visible:outline-2 focus-visible:outline-gold-accent rounded-sm"
        >
          <img
            src={batistaecontabil}
            alt="Batista E-Contábil"
            width={140}
            height={40}
            className="h-10 w-auto max-w-[160px] transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex space-x-10">
          <ul className="flex items-center space-x-10 text-lg font-medium">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleScroll}
                  className="relative text-white/90 hover:text-white transition duration-200 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gold-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-gold-accent rounded-md"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      <nav
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 space-y-1 text-lg font-medium">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleScroll}
                className="block py-3 text-white/90 hover:text-gold-accent border-b border-white/10 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
