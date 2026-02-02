export interface CriteriaScores {
  emissoesCarbono: number;
  gestaoResiduos: number;
  usoEnergia: number;
  usoAgua: number;
  biodiversidade: number;
  transparencia: number;
}

export interface Company {
  id: string;
  nome: string;
  setor: string;
  logo: string;
  descricao: string;
  ecoScore: number;
  criterios: CriteriaScores;
  certificacoes: string[];
  sede: string;
  funcionarios: string;
  tendencia: "up" | "down" | "stable";
}

export const CRITERIA_LABELS: Record<keyof CriteriaScores, string> = {
  emissoesCarbono: "Emissoes de Carbono",
  gestaoResiduos: "Gestao de Residuos",
  usoEnergia: "Uso de Energia",
  usoAgua: "Uso de Agua",
  biodiversidade: "Biodiversidade",
  transparencia: "Transparencia",
};

export const CRITERIA_ICONS: Record<keyof CriteriaScores, string> = {
  emissoesCarbono: "CO2",
  gestaoResiduos: "Rec",
  usoEnergia: "Eng",
  usoAgua: "H2O",
  biodiversidade: "Bio",
  transparencia: "Doc",
};

export const SETORES = [
  "Todos",
  "Tecnologia",
  "Energia",
  "Alimentos",
  "Financeiro",
  "Varejo",
  "Industria",
  "Cosmeticos",
] as const;
