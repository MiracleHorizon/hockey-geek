import { useQuery } from '@tanstack/react-query'

import { ESPN_API_URL, TEAMS_ENDPOINT } from '@/shared/lib/espn'
import type { Team } from '../model/team.scheme'

export const TEAM_QUERY_KEY = 'team'

export const useTeamQuery = ({ teamId }: { teamId: string | null }) =>
  useQuery({
    queryKey: [TEAM_QUERY_KEY, teamId],
    queryFn: async (): Promise<Team> => {
      const response = await fetch(`${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}`)

      if (!response.ok) {
        return Promise.reject(
          `Failed to fetch team. Status: ${response.status} - ${response.statusText}`
        )
      }

      const data = await response.json()

      return data.team
    },
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
