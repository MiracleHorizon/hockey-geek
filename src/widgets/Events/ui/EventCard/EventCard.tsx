import { Badge, Card, Flex, Text, Tooltip } from '@mantine/core'

import { TeamLogo } from '@/entities/team'
import { getEventLinescores } from '../../lib/getEventLinescores'
import type { EventTeamType, EventType } from '../../model/scoreboard.scheme'

export const Logo = ({ logo, abbreviation, displayName }: EventTeamType) => (
  <Flex align='center' direction='column' rowGap='6px'>
    <TeamLogo href={logo} size={50} alt={abbreviation} />

    <Tooltip label={displayName} openDelay={600} withArrow arrowSize={6} position='bottom'>
      <Badge color='gray' size='lg' radius='sm'>
        {abbreviation}
      </Badge>
    </Tooltip>
  </Flex>
)

export const EventCard = ({ competitions, status }: EventType) => {
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
          <Logo {...teamA} />

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

          <Logo {...teamB} />
        </Flex>

        <Text fz='15px' mt='6px'>
          {completed ? getEventLinescores(competitorA, competitorB) : shortDetail}
        </Text>
      </Flex>
    </Card>
  )
}
