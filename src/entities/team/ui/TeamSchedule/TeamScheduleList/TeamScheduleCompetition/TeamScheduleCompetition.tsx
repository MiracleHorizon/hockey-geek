import { memo } from 'react'
import { Card, Flex, Text } from '@mantine/core'
import dayjs from 'dayjs'

import { TeamLogo } from '../TeamLogo/TeamLogo'
import type { TeamScheduleCompetition as Competition } from '../../../../model/team-schedule.scheme'

type Props = {
  order: number
  competition: Competition
}

export const TeamScheduleCompetition = memo(
  ({ order, competition: { date, competitors } }: Props) => {
    const competitorA = competitors[0]
    const competitorB = competitors[1]
    const teamA = competitorA.team
    const teamB = competitorB.team

    return (
      <Card w='100%' h='160px' radius='12px' withBorder>
        <Flex pos='relative' w='100%' h='100%' justify='space-between' align='center' px='md'>
          <TeamLogo {...teamA} position='left' />

          <Flex align='center' mx='auto' direction='column' rowGap='6px'>
            <Flex align='center' direction='column' rowGap='4px'>
              <Text fz='20px' fw='500'>
                № {order}
              </Text>

              <Text fw='500' fz='16px'>
                {dayjs(date).format('DD.MM.YYYY')}
              </Text>
            </Flex>

            <Flex align='center'>
              <Text
                fz='40px'
                variant='gradient'
                gradient={{
                  from: 'orange',
                  to: 'yellow',
                  deg: 90
                }}
                span
              >
                {competitorA.score?.displayValue}
              </Text>
              <Text
                ml='11px'
                mr='10px'
                style={{
                  textAlign: 'center'
                }}
                fz='40px'
                span
              >
                -
              </Text>
              <Text
                fz='40px'
                variant='gradient'
                gradient={{
                  from: 'orange',
                  to: 'yellow',
                  deg: 45
                }}
                span
              >
                {competitorB.score?.displayValue}
              </Text>
            </Flex>
          </Flex>

          <TeamLogo {...teamB} position='right' />
        </Flex>
      </Card>
    )
  }
)
