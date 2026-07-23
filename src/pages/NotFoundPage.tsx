import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFoundPage: React.FC = () => (
  <section className="min-h-[70vh] flex items-center justify-center text-center px-6">
    <div>
      <span className="text-sm font-semibold tracking-wide text-gold-accent uppercase">
        Erro 404
      </span>
      <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-main tracking-tight mt-2 mb-4">
        Página não encontrada
      </h1>
      <p className="text-muted-foreground mb-8">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-main text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-principal transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para a Home
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
