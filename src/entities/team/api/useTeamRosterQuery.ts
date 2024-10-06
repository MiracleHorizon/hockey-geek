import { useQuery } from '@tanstack/react-query'

import { ESPN_API_URL, TEAMS_ENDPOINT } from '@/shared/lib/espn'
import type { TeamRoster } from '../model/team-roster.scheme'

export const TEAM_ROSTER_QUERY_KEY = 'team-roster'

export const useTeamRosterQuery = ({ teamId }: { teamId: string | null }) =>
  useQuery({
    queryKey: [TEAM_ROSTER_QUERY_KEY, teamId],
    queryFn: async (): Promise<TeamRoster> => {
      const response = await fetch(`${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}/roster`)

      if (!response.ok) {
        return Promise.reject(
          `Failed to fetch team roster. Status: ${response.status} - ${response.statusText}`
        )
      }

      return response.json()
    },
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
