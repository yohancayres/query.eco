# query.eco

Ranking ecologico de empresas baseado em criterios ambientais transparentes.

## Sobre

O query.eco avalia empresas com base em 6 criterios ambientais, gerando um Eco Score de 0 a 100:

- **Emissoes de Carbono** (20%) - Pegada de carbono e metas de reducao
- **Gestao de Residuos** (15%) - Reciclagem e economia circular
- **Uso de Energia** (20%) - Fontes renovaveis e eficiencia
- **Uso de Agua** (15%) - Consumo e tratamento
- **Biodiversidade** (15%) - Impacto em ecossistemas
- **Transparencia** (15%) - Relatorios e certificacoes

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Paginas

- `/` - Homepage com Top 5 e visao geral
- `/ranking` - Ranking completo com filtros e busca
- `/empresa/[id]` - Detalhe de cada empresa
- `/metodologia` - Explicacao dos criterios
