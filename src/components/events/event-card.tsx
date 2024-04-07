import { Badge, Card, Flex, Text } from '@mantine/core'
import type { FC } from 'react'

import { getTeamLogoImage } from '@/utility/getTeamLogoImage'
import type { CompetitorType, EventTeamType, EventType } from '@/schemas/scoreboard.scheme'

const TeamLogo: FC<EventTeamType> = ({ logo, abbreviation }) => (
  <Flex align='center' direction='column' rowGap='6px'>
    <img
      width='50'
      height='50'
      src={getTeamLogoImage({
        href: logo,
        size: 100
      })}
      alt={abbreviation}
    />

    <Badge color='gray' size='lg' radius='sm'>
      {abbreviation}
    </Badge>
  </Flex>
)

const getLinescores = (competitorA: CompetitorType, competitorB: CompetitorType) => {
  const LINESCORES_FALLBACK = [0, 0, 0]

  const handleLinescores = (linescores: CompetitorType['linescores']) => {
    if (!linescores) {
      return LINESCORES_FALLBACK
    }

    return linescores.map(score => score.value)
  }

  const linescoresA = handleLinescores(competitorA.linescores)
  const linescoresB = handleLinescores(competitorB.linescores)

  return `${linescoresA[0]}:${linescoresB[0]}  ${linescoresA[1]}:${linescoresB[1]}  ${linescoresA[2]}:${linescoresB[2]}`
}

export default function EventCard({ competitions, status }: EventType) {
  const { completed, shortDetail, state } = status.type
  const competitors = competitions[0].competitors

  const competitorA = competitors[0]
  const competitorB = competitors[1]
  const teamA = competitorA.team
  const teamB = competitorB.team

  return (
    <Card w='260px' h='145px' radius='md' withBorder>
      <Flex align='center' justify='center' direction='column' w='100%'>
        <Flex align='center' justify='space-between' w='100%'>
          <TeamLogo {...teamA} />

          <Flex align='center' direction='column'>
            {state === 'in' && (
              <Badge color='green' size='md' radius='sm' mb='4px'>
                LIVE
              </Badge>
            )}
            {completed && (
              <Badge color='gray' size='md' radius='sm' mb='4px'>
                ENDED
              </Badge>
            )}

            <Text fw='600' fz='26px'>
              {competitorA.score} - {competitorB.score}
            </Text>
          </Flex>

          <TeamLogo {...teamB} />
        </Flex>

        {completed ? (
          <Text fz='15px'>{getLinescores(competitorA, competitorB)}</Text>
        ) : (
          <div>{shortDetail}</div>
        )}
      </Flex>
    </Card>
  )
}
