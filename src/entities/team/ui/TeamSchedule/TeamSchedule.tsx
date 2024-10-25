import { lazy, Suspense } from 'react'
import { Flex, Skeleton, Title, Text } from '@mantine/core'

import { TeamScheduleSelect } from './TeamScheduleSelect/TeamScheduleSelect'
import { type TeamSchedule as Schedule, SEASON_TYPE } from '../../model/team-schedule.scheme'

const TeamScheduleList = lazy(() =>
  import('./TeamScheduleList/TeamScheduleList').then(m => ({
    default: m.TeamScheduleList
  }))
)

type Props = {
  schedule: Schedule
  seasonType: SEASON_TYPE | null
}

export const TeamSchedule = ({ schedule, seasonType }: Props) => (
  <Flex direction='column' w='100%'>
    <Flex mb='12px' rowGap='12px' direction='column' component='section'>
      <Title order={2} size='28px'>
        Schedule
      </Title>

      <TeamScheduleSelect value={seasonType ?? SEASON_TYPE.REGULAR_SEASON} />
    </Flex>

    <section>
      {schedule && schedule.events.length > 0 ? (
        <Suspense
          fallback={
            <Flex direction='column' rowGap='10px' w='100%'>
              <Skeleton h='160px' w='100%' radius='12px' />
              <Skeleton h='160px' w='100%' radius='12px' />
              <Skeleton h='160px' w='100%' radius='12px' />
            </Flex>
          }
        >
          <TeamScheduleList events={schedule.events} />
        </Suspense>
      ) : (
        <Flex align='center' justify='center' h='100%'>
          <Text fz='xl'>No games scheduled</Text>
        </Flex>
      )}
    </section>
  </Flex>
)
