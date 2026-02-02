import Link from "next/link";
import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";
import EcoScoreBadge from "@/components/EcoScoreBadge";

const topCompanies = [...companies]
  .sort((a, b) => b.ecoScore - a.ecoScore)
  .slice(0, 5);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="eco-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ranking Ecologico de Empresas
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Avaliamos empresas com base em 6 criterios ambientais para promover
            transparencia e incentivar praticas sustentaveis.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/ranking"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Ver Ranking Completo
            </Link>
            <Link
              href="/metodologia"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Nossa Metodologia
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              value: companies.length.toString(),
              label: "Empresas Avaliadas",
              icon: "🏢",
            },
            { value: "6", label: "Criterios de Avaliacao", icon: "📊" },
            {
              value: new Set(companies.map((c) => c.setor)).size.toString(),
              label: "Setores Cobertos",
              icon: "🌍",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-700">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top 5 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Top 5 Empresas
            </h2>
            <p className="text-gray-500 mt-1">
              As empresas com melhor desempenho ambiental
            </p>
          </div>
          <Link
            href="/ranking"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Ver todos →
          </Link>
        </div>
        <div className="space-y-3">
          {topCompanies.map((company, index) => (
            <CompanyCard key={company.id} company={company} rank={index + 1} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Coleta de Dados",
                desc: "Reunimos dados publicos, relatorios de sustentabilidade e certificacoes ambientais das empresas.",
              },
              {
                step: "2",
                title: "Avaliacao por Criterios",
                desc: "Cada empresa e avaliada em 6 criterios: emissoes, residuos, energia, agua, biodiversidade e transparencia.",
              },
              {
                step: "3",
                title: "Eco Score",
                desc: "Geramos uma pontuacao de 0 a 100, classificando de A+ (excelente) a E (critico), com total transparencia.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 eco-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grading scale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Escala de Classificacao
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { score: 95, label: "90-100 Excelente" },
            { score: 85, label: "80-89 Muito Bom" },
            { score: 75, label: "70-79 Bom" },
            { score: 65, label: "60-69 Regular" },
            { score: 55, label: "50-59 Fraco" },
            { score: 35, label: "0-49 Critico" },
          ].map((item) => (
            <div key={item.score} className="flex items-center gap-2">
              <EcoScoreBadge score={item.score} size="sm" />
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
