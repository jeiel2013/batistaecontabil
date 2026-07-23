import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

// Páginas fora da Home são carregadas sob demanda
const SobrePage = lazy(() => import("./pages/SobrePage"));
const ServicosPage = lazy(() => import("./pages/ServicosPage"));
const ContatoPage = lazy(() => import("./pages/ContatoPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={null}>{element}</Suspense>;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={withSuspense(<SobrePage />)} />
        <Route path="servicos" element={withSuspense(<ServicosPage />)} />
        <Route path="contato" element={withSuspense(<ContatoPage />)} />
        <Route path="*" element={withSuspense(<NotFoundPage />)} />
      </Route>
    </Routes>
  );
}

export default App;
