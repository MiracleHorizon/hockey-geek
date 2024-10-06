import { useQuery } from '@tanstack/react-query'

import { ESPN_API_URL, TEAMS_ENDPOINT } from '@/shared/lib/espn'
import { SEASON_TYPE, type TeamSchedule } from '../model/team-schedule.scheme'

export const TEAM_SCHEDULE_QUERY_KEY = 'team-schedule'

export const useTeamScheduleQuery = ({
  teamId,
  seasonType
}: {
  teamId: string | null
  seasonType: SEASON_TYPE | null
}) =>
  useQuery({
    queryKey: [TEAM_SCHEDULE_QUERY_KEY, teamId, seasonType],
    queryFn: async (): Promise<TeamSchedule> => {
      const searchParams = new URLSearchParams({
        seasontype: seasonType ?? SEASON_TYPE.REGULAR_SEASON
      })
      const response = await fetch(
        `${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}/schedule?${searchParams}`
      )

      if (!response.ok) {
        throw new Error(
          `Failed to fetch team schedule data. Status: ${response.status} - ${response.statusText}`
        )
      }

      return response.json()
    },
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
