import { memo } from 'react'
import { Card, Flex, Text } from '@mantine/core'
import dayjs from 'dayjs'
import type { VirtualItem } from '@tanstack/react-virtual'

import { TeamLogo } from './TeamLogo'
import type { TeamScheduleCompetition as Competition } from '@/schemas/team-schedule.scheme'

interface Props {
  virtualItem: VirtualItem
  competition: Competition
}

export const TeamScheduleCompetition = memo(
  ({ virtualItem, competition: { date, competitors } }: Props) => {
    const competitorA = competitors[0]
    const competitorB = competitors[1]
    const teamA = competitorA.team
    const teamB = competitorB.team

    return (
      <Card
        pos='absolute'
        top='0'
        left='0'
        w='100%'
        h={virtualItem.size + 'px'}
        radius='12px'
        withBorder
        style={{
          transform: `translateY(${virtualItem.start}px)`
        }}
      >
        <Flex pos='relative' w='100%' h='100%' justify='space-between' align='center' px='md'>
          <TeamLogo {...teamA} side='left' />

          <Flex align='center' mx='auto' direction='column' rowGap='6px'>
            <Flex align='center' direction='column' rowGap='4px'>
              <Text fz='20px' fw='500'>
                № {virtualItem.index + 1}
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

          <TeamLogo {...teamB} side='right' />
        </Flex>
      </Card>
    )
  }
)

TeamScheduleCompetition.displayName = 'TeamScheduleCompetition'
