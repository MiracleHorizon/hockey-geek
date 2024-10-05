import { useQuery } from '@tanstack/react-query'

import { ESPN_WEB_API_URL, TEAMS_ENDPOINT } from '@/shared/lib/espn'
import type { TeamsType } from '../model/teams.scheme'

export const ALL_TEAMS_QUERY_KEY = 'teams'

export const useAllTeamsQuery = () =>
  useQuery({
    queryKey: [ALL_TEAMS_QUERY_KEY],
    queryFn: async (): Promise<TeamsType> => {
      const response = await fetch(`${ESPN_WEB_API_URL}/${TEAMS_ENDPOINT}`)

      if (!response.ok) {
        throw new Error(
          `Failed to fetch teams data. Status: ${response.status} - ${response.statusText}`
        )
      }

      return response.json()
    },
    refetchOnMount: false
  })
