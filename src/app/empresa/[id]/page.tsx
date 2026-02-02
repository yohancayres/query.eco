import { notFound } from "next/navigation";
import Link from "next/link";
import { companies } from "@/data/companies";
import { CRITERIA_LABELS } from "@/data/types";
import EcoScoreBadge from "@/components/EcoScoreBadge";
import ScoreBar from "@/components/ScoreBar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return companies.map((company) => ({ id: company.id }));
}

export default async function EmpresaPage({ params }: PageProps) {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);

  if (!company) {
    notFound();
  }

  const rank =
    [...companies].sort((a, b) => b.ecoScore - a.ecoScore).findIndex((c) => c.id === id) + 1;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/ranking"
        className="text-green-600 hover:text-green-700 font-medium mb-6 inline-block"
      >
        ← Voltar ao Ranking
      </Link>

      {/* Company Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-xl eco-gradient flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {company.logo}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-gray-900">
                {company.nome}
              </h1>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                {company.setor}
              </span>
            </div>
            <p className="text-gray-500 mb-3">{company.descricao}</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>📍 {company.sede}</span>
              <span>👥 {company.funcionarios}</span>
            </div>
          </div>
          <div className="text-center flex-shrink-0">
            <EcoScoreBadge score={company.ecoScore} size="lg" />
            <div className="mt-2">
              <div className="text-2xl font-bold text-gray-900">
                {company.ecoScore}
              </div>
              <div className="text-xs text-gray-500">
                #{rank} no ranking
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Criteria Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Avaliacao por Criterio
        </h2>
        {(Object.keys(company.criterios) as Array<keyof typeof company.criterios>).map(
          (key) => (
            <ScoreBar
              key={key}
              label={CRITERIA_LABELS[key]}
              score={company.criterios[key]}
            />
          )
        )}
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Certificacoes
        </h2>
        <div className="flex flex-wrap gap-2">
          {company.certificacoes.map((cert) => (
            <span
              key={cert}
              className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-200"
            >
              ✓ {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
