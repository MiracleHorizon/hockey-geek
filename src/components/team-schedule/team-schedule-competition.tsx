import { type FC, memo } from 'react'
import { Card, Flex, Text } from '@mantine/core'
import MediaQuery from 'react-responsive'
import dayjs from 'dayjs'
import type { VirtualItem } from '@tanstack/react-virtual'

import { TeamLogo } from '@/components/team-logo'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@/lib/react-responsive/breakpoints'
import type {
  TeamScheduleCompetition as Competition,
  TeamScheduleTeam
} from '@/schemas/team-schedule.scheme'

const Logo: FC<
  TeamScheduleTeam & {
    side: 'left' | 'right'
  }
> = ({ logos = [], abbreviation, displayName, side }) => (
  <Flex
    pos='absolute'
    align='center'
    direction='column'
    rowGap='md'
    left={side === 'left' ? '10px' : undefined}
    right={side === 'right' ? '10px' : undefined}
  >
    <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.sm}>
      <TeamLogo size={80} logo={logos[0]?.href} alt={abbreviation} />
    </MediaQuery>
    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.sm}>
      <TeamLogo size={60} logo={logos[0]?.href} alt={abbreviation} />
    </MediaQuery>

    <Text fz='24px' span>
      <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.sm}>{displayName}</MediaQuery>
      <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.sm}>{abbreviation}</MediaQuery>
    </Text>
  </Flex>
)

interface Props {
  virtualItem: VirtualItem
  competition: Competition
}

export const TeamScheduleCompetition: FC<Props> = memo(
  ({ virtualItem, competition: { date, competitors } }) => {
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
          <Logo {...teamA} side='left' />

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

          <Logo {...teamB} side='right' />
        </Flex>
      </Card>
    )
  }
)

TeamScheduleCompetition.displayName = 'TeamScheduleCompetition'
