import { Flex } from '@mantine/core'

import { useSearchParams } from '@/shared/lib/router'
import {
  TeamSchedule,
  SEASON_TYPE,
  SEASON_TYPE_SEARCH,
  useTeamId,
  useTeamScheduleQuery
} from '@/entities/team'

export const TeamSchedulePage = () => {
  const teamId = useTeamId()

  const [searchParams] = useSearchParams()
  const seasonType = searchParams.get(SEASON_TYPE_SEARCH) as SEASON_TYPE | null

  const { data: schedule, isLoading } = useTeamScheduleQuery({
    teamId,
    seasonType
  })

  return (
    <Flex align='center' justify='center' direction='column' w='100%'>
      <Flex direction='column' rowGap='16px' w='100%'>
        {isLoading && <span>Loading...</span>}

        {schedule && <TeamSchedule schedule={schedule} seasonType={seasonType} />}
      </Flex>
    </Flex>
  )
}
