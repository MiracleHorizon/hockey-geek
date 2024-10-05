import { useTeamQuery } from './useTeamQuery'
import { useTeamScheduleQuery } from './useTeamScheduleQuery'
import type { SEASON_TYPE } from '../model/team-schedule.scheme'

export const useFullTeamQuery = ({
  teamId,
  seasonType
}: {
  teamId: string
  seasonType: SEASON_TYPE | null
}) => {
  const { data: team, isLoading: isLoadingTeam } = useTeamQuery({
    teamId
  })
  const { data: schedule, isLoading: isLoadingSchedule } = useTeamScheduleQuery({
    teamId,
    seasonType
  })

  return {
    team,
    schedule,
    isLoading: isLoadingTeam || isLoadingSchedule
  }
}
