import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#14532d] text-white/80 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌿</span>
              <span className="text-lg font-bold text-white">query.eco</span>
            </div>
            <p className="text-sm">
              Ranking ecologico de empresas baseado em criterios transparentes e
              dados verificaveis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Navegacao</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking"
                  className="hover:text-white transition-colors"
                >
                  Ranking
                </Link>
              </li>
              <li>
                <Link
                  href="/metodologia"
                  className="hover:text-white transition-colors"
                >
                  Metodologia
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Sobre</h3>
            <p className="text-sm">
              Promovendo transparencia ambiental corporativa para um futuro mais
              sustentavel.
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 query.eco - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
