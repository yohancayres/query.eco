"use client";

import { useState, useMemo } from "react";
import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";
import { SETORES } from "@/data/types";

type SortOption = "score-desc" | "score-asc" | "name-asc";

export default function RankingPage() {
  const [setorFilter, setSetorFilter] = useState("Todos");
  const [sortBy, setSortBy] = useState<SortOption>("score-desc");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = [...companies];

    if (setorFilter !== "Todos") {
      result = result.filter((c) => c.setor === setorFilter);
    }

    if (search) {
      const term = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.nome.toLowerCase().includes(term) ||
          c.setor.toLowerCase().includes(term)
      );
    }

    switch (sortBy) {
      case "score-desc":
        result.sort((a, b) => b.ecoScore - a.ecoScore);
        break;
      case "score-asc":
        result.sort((a, b) => a.ecoScore - b.ecoScore);
        break;
      case "name-asc":
        result.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
    }

    return result;
  }, [setorFilter, sortBy, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Ranking Ecologico
        </h1>
        <p className="text-gray-500 mt-2">
          {companies.length} empresas avaliadas em {new Set(companies.map((c) => c.setor)).size} setores
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar empresa ou setor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={setorFilter}
              onChange={(e) => setSetorFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
            >
              {SETORES.map((setor) => (
                <option key={setor} value={setor}>
                  {setor}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
            >
              <option value="score-desc">Maior Score</option>
              <option value="score-asc">Menor Score</option>
              <option value="name-asc">Nome (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Nenhuma empresa encontrada.</p>
            <p className="text-sm mt-1">
              Tente ajustar os filtros de busca.
            </p>
          </div>
        ) : (
          filtered.map((company, index) => (
            <CompanyCard
              key={company.id}
              company={company}
              rank={index + 1}
            />
          ))
        )}
      </div>
    </div>
  );
}
