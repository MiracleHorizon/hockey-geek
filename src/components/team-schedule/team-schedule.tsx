import { lazy, Suspense, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Flex, Skeleton, Title } from '@mantine/core'

import { useGetTeamSchedule } from '@/api/get-team-schedule'
import styles from './team-schedule.module.css'

const TeamScheduleList = lazy(() => import('./team-schedule-list'))

const ScheduleSkeleton = () => (
  <Flex direction='column' rowGap='10px' w='100%'>
    <Skeleton h='160px' w='100%' radius='12px' />
    <Skeleton h='160px' w='100%' radius='12px' />
    <Skeleton h='160px' w='100%' radius='12px' />
  </Flex>
)

export function TeamSchedule() {
  const params = useParams()
  const { data, isLoading } = useGetTeamSchedule(params?.teamId)

  const eventsScrollRef = useRef<HTMLDivElement>(null)

  return (
    <Flex direction='column' w='100%'>
      <Title component='h2' mb='12px' size='32px'>
        Schedule
      </Title>

      <div ref={eventsScrollRef} className={styles.scrollContainer}>
        {data && (
          <Suspense fallback={<ScheduleSkeleton />}>
            <TeamScheduleList events={data.events} ref={eventsScrollRef} />
          </Suspense>
        )}

        {isLoading && <ScheduleSkeleton />}
      </div>
    </Flex>
  )
}
