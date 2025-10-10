import { useEffect, useState } from "react";
import batistaecontabil from "../assets/batistaecontabil.svg";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-blue-900/90 backdrop-blur-lg shadow-md"
          : "bg-blue-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:px-10 lg:py-5">
        <a href="#home" onClick={handleScroll} className="flex items-center">
          <img
            src={batistaecontabil}
            alt="Batista E-Contábil"
            className="h-10 w-auto max-w-[160px] transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex space-x-10">
          <ul className="flex items-center space-x-10 text-lg font-medium">
            {[
              { id: "home", label: "Início" },
              { id: "sobre", label: "Sobre" },
              { id: "servicos", label: "Serviços" },
              { id: "contato", label: "Contato" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleScroll}
                  className="relative text-white hover:text-blue-300 transition duration-200 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
