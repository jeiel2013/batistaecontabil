import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import FooterSection from "./FooterSection";

function Layout() {
  const { pathname } = useLocation();

  // Sem isso, navegar entre páginas mantém o scroll da página anterior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
}

export default Layout;
