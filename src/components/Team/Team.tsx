import { Flex } from '@mantine/core'
import { useSearchParams } from 'react-router-dom'

import { TeamSchedule } from './TeamSchedule'
import { useGetTeamSchedule } from '@/api/get-team-schedule'
import { useTeamId } from '@/hooks/useTeamId'
import { SEASON_TYPE } from '@/schemas/team-schedule.scheme'
import { SEASON_TYPE_SEARCH } from './constants'

export const Team = () => {
  const teamId = useTeamId()

  const [searchParams] = useSearchParams()
  const seasonType = (searchParams.get(SEASON_TYPE_SEARCH) ??
    SEASON_TYPE.REGULAR_SEASON) as SEASON_TYPE

  const { data: schedule, isLoading } = useGetTeamSchedule({
    teamId,
    seasonType: seasonType as SEASON_TYPE
  })

  return (
    <Flex direction='column' rowGap='16px' w='100%'>
      {isLoading && <span>Loading...</span>}

      {schedule && <TeamSchedule schedule={schedule} seasonType={seasonType} />}
    </Flex>
  )
}
