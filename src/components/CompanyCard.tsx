import Link from "next/link";
import { Company } from "@/data/types";
import EcoScoreBadge from "./EcoScoreBadge";

interface CompanyCardProps {
  company: Company;
  rank: number;
}

const tendenciaIcons = {
  up: "↑",
  down: "↓",
  stable: "→",
};

const tendenciaColors = {
  up: "text-green-600",
  down: "text-red-600",
  stable: "text-gray-500",
};

export default function CompanyCard({ company, rank }: CompanyCardProps) {
  return (
    <Link href={`/empresa/${company.id}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 card-hover">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 text-2xl font-bold text-gray-300 w-8 text-center">
            {rank}
          </div>
          <div className="w-12 h-12 rounded-lg eco-gradient flex items-center justify-center text-white font-bold text-xl">
            {company.logo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 truncate">
                {company.nome}
              </h3>
              <span
                className={`text-sm font-bold ${tendenciaColors[company.tendencia]}`}
              >
                {tendenciaIcons[company.tendencia]}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                {company.setor}
              </span>
              <span className="text-xs text-gray-500">{company.sede}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {company.ecoScore}
              </div>
              <div className="text-xs text-gray-500">Eco Score</div>
            </div>
            <EcoScoreBadge score={company.ecoScore} />
          </div>
        </div>
      </div>
    </Link>
  );
}
