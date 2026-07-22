import { lazy, Suspense } from "react";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";

// Below-the-fold sections are code-split so the initial bundle only
// pays for what's visible above the fold on first paint.
const SobreSection = lazy(() => import("./components/SobreSection"));
const ServicosSection = lazy(() => import("./components/ServicosSection"));
const ContatoSection = lazy(() => import("./components/ContatoSection"));
const FooterSection = lazy(() => import("./components/FooterSection"));

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 scroll-smooth">
        <HomeSection />
        <Suspense fallback={null}>
          <SobreSection />
          <ServicosSection />
          <ContatoSection />
          <FooterSection />
        </Suspense>
      </main>
    </>
  );
}

export default App;
