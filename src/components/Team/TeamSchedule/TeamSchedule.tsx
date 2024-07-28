import { lazy, Suspense, useRef } from 'react'
import { Flex, Skeleton, Title } from '@mantine/core'

import { TeamScheduleEmpty } from './TeamScheduleEmpty'
import { TeamScheduleSelect } from './TeamScheduleSelect'
import { type TeamSchedule as Schedule, SEASON_TYPE } from '@/schemas/team-schedule.scheme'
import styles from './TeamSchedule.module.css'

const TeamScheduleList = lazy(() => import('./TeamScheduleList'))

interface Props {
  schedule: Schedule
  seasonType: SEASON_TYPE
}

export const TeamSchedule = ({ schedule, seasonType }: Props) => {
  const eventsScrollRef = useRef<HTMLDivElement>(null)

  return (
    <Flex direction='column' w='100%'>
      <Flex mb='12px' rowGap='12px' direction='column' component='section'>
        <Title order={2} size='28px'>
          Schedule
        </Title>

        <TeamScheduleSelect value={seasonType} />
      </Flex>

      <section ref={eventsScrollRef} className={styles.scrollContainer}>
        {schedule && schedule.events.length > 0 ? (
          <Suspense fallback={<ScheduleSkeleton />}>
            <TeamScheduleList events={schedule.events} ref={eventsScrollRef} />
          </Suspense>
        ) : (
          <TeamScheduleEmpty />
        )}
      </section>
    </Flex>
  )
}

const ScheduleSkeleton = () => (
  <Flex direction='column' rowGap='10px' w='100%'>
    <Skeleton h='160px' w='100%' radius='12px' />
    <Skeleton h='160px' w='100%' radius='12px' />
    <Skeleton h='160px' w='100%' radius='12px' />
  </Flex>
)
