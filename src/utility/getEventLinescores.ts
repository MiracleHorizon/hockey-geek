import type { EventCompetitorType } from '@/schemas/event.scheme'

const LINESCORES_FALLBACK = [0, 0, 0] as const

export const getEventLinescores = (
  competitorA: EventCompetitorType,
  competitorB: EventCompetitorType
): string => {
  const handleLinescores = (linescores: EventCompetitorType['linescores']) => {
    if (!linescores) {
      return LINESCORES_FALLBACK
    }

    return linescores.map(score => score.value)
  }

  const linescoresA = handleLinescores(competitorA.linescores)
  const linescoresB = handleLinescores(competitorB.linescores)

  return `${linescoresA[0]}:${linescoresB[0]}  ${linescoresA[1]}:${linescoresB[1]}  ${linescoresA[2]}:${linescoresB[2]}`
}
