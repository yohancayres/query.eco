import { CRITERIA_LABELS } from "@/data/types";
import EcoScoreBadge from "@/components/EcoScoreBadge";

const criteriaDetails = [
  {
    key: "emissoesCarbono",
    icon: "🏭",
    title: "Emissoes de Carbono",
    weight: "20%",
    description:
      "Avalia a pegada de carbono da empresa, metas de reducao de emissoes, uso de compensacoes de carbono e progressao em direcao a neutralidade de carbono.",
    factors: [
      "Emissoes totais (Escopo 1, 2 e 3)",
      "Metas de reducao baseadas em ciencia",
      "Compensacoes de carbono verificadas",
      "Progresso historico de reducao",
    ],
  },
  {
    key: "gestaoResiduos",
    icon: "♻️",
    title: "Gestao de Residuos",
    weight: "15%",
    description:
      "Analisa as praticas de gestao de residuos, economia circular, reciclagem e reducao de residuos enviados a aterros.",
    factors: [
      "Taxa de reciclagem e reaproveitamento",
      "Programas de economia circular",
      "Reducao de plastico descartavel",
      "Gestao de residuos perigosos",
    ],
  },
  {
    key: "usoEnergia",
    icon: "⚡",
    title: "Uso de Energia",
    weight: "20%",
    description:
      "Mede a eficiencia energetica, uso de fontes renovaveis e investimento em transicao energetica limpa.",
    factors: [
      "Porcentagem de energia renovavel",
      "Eficiencia energetica operacional",
      "Investimentos em energia limpa",
      "Metas de transicao energetica",
    ],
  },
  {
    key: "usoAgua",
    icon: "💧",
    title: "Uso de Agua",
    weight: "15%",
    description:
      "Avalia o consumo de agua, tratamento de efluentes, reuso e impacto em recursos hidricos locais.",
    factors: [
      "Consumo total e intensidade hidrica",
      "Taxa de reuso e reciclagem de agua",
      "Qualidade do tratamento de efluentes",
      "Gestao de risco hidrico",
    ],
  },
  {
    key: "biodiversidade",
    icon: "🌳",
    title: "Biodiversidade",
    weight: "15%",
    description:
      "Examina o impacto em ecossistemas, programas de restauracao, protecao de areas naturais e cadeia de suprimentos.",
    factors: [
      "Impacto em areas de alta biodiversidade",
      "Programas de restauracao ecologica",
      "Cadeia de suprimentos livre de desmatamento",
      "Protecao de especies ameacadas",
    ],
  },
  {
    key: "transparencia",
    icon: "📋",
    title: "Transparencia",
    weight: "15%",
    description:
      "Avalia a qualidade dos relatorios ambientais, auditorias independentes, certificacoes e abertura de dados.",
    factors: [
      "Relatorios de sustentabilidade (GRI, SASB)",
      "Auditorias ambientais independentes",
      "Certificacoes reconhecidas",
      "Dados abertos e acessiveis",
    ],
  },
];

export default function MetodologiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Metodologia</h1>
        <p className="text-gray-500 mt-2">
          Como avaliamos e classificamos as empresas no ranking ecologico
        </p>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Visao Geral
        </h2>
        <p className="text-gray-600 mb-4">
          O <strong>Eco Score</strong> e uma pontuacao de 0 a 100 que reflete o
          desempenho ambiental de uma empresa. A avaliacao e baseada em 6
          criterios ponderados, utilizando dados publicos, relatorios de
          sustentabilidade e certificacoes verificaveis.
        </p>
        <p className="text-gray-600">
          Nosso objetivo e promover transparencia e incentivar praticas
          corporativas mais sustentaveis, fornecendo informacoes claras e
          acessiveis para consumidores, investidores e a sociedade.
        </p>
      </div>

      {/* Grading Scale */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Escala de Classificacao
        </h2>
        <div className="space-y-3">
          {[
            { score: 95, range: "90 - 100", label: "A+", desc: "Excelente - Lider em sustentabilidade" },
            { score: 85, range: "80 - 89", label: "A", desc: "Muito Bom - Praticas avancadas" },
            { score: 75, range: "70 - 79", label: "B", desc: "Bom - Compromisso demonstrado" },
            { score: 65, range: "60 - 69", label: "C", desc: "Regular - Esforcos iniciais" },
            { score: 55, range: "50 - 59", label: "D", desc: "Fraco - Precisa melhorar significativamente" },
            { score: 35, range: "0 - 49", label: "E", desc: "Critico - Acoes urgentes necessarias" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <EcoScoreBadge score={item.score} size="sm" />
              <div>
                <span className="font-medium text-gray-900">{item.range}</span>
                <span className="text-gray-500 ml-2">- {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Criteria Details */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Criterios de Avaliacao
      </h2>
      <div className="space-y-4">
        {criteriaDetails.map((criteria) => (
          <div
            key={criteria.key}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{criteria.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900">
                {criteria.title}
              </h3>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                Peso: {criteria.weight}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{criteria.description}</p>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Fatores avaliados:
              </h4>
              <ul className="space-y-1">
                {criteria.factors.map((factor) => (
                  <li
                    key={factor}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    <span className="text-green-500">●</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Data Sources */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Fontes de Dados
        </h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="text-green-500">●</span>
            Relatorios anuais de sustentabilidade das empresas
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">●</span>
            CDP (Carbon Disclosure Project) e GRI (Global Reporting Initiative)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">●</span>
            Certificacoes ambientais reconhecidas (ISO 14001, B Corp, FSC, etc.)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">●</span>
            Dados publicos de agencias reguladoras ambientais
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">●</span>
            Auditorias independentes e relatorios de terceiros
          </li>
        </ul>
      </div>
    </div>
  );
}
