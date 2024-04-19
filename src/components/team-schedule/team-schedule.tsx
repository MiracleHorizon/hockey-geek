import { lazy, Suspense, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Flex, Skeleton, Title } from '@mantine/core'

import { TeamScheduleSelect } from './team-schedule-select'
import { useGetTeamSchedule, SEASON_TYPE } from '@/api/get-team-schedule'
import { SEASON_TYPE_SEARCH } from './constants'
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
  const eventsScrollRef = useRef<HTMLDivElement>(null)

  const params = useParams()
  const [searchParams] = useSearchParams()
  const seasonType = searchParams.get(SEASON_TYPE_SEARCH) ?? SEASON_TYPE.REGULAR_SEASON
  const { data, isLoading } = useGetTeamSchedule({
    teamId: params?.teamId,
    seasonType: seasonType as SEASON_TYPE
  })

  return (
    <Flex direction='column' w='100%'>
      <Flex mb='12px' rowGap='12px' direction='column'>
        <Title component='h2' size='32px'>
          Schedule
        </Title>

        <TeamScheduleSelect value={seasonType} />
      </Flex>

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
