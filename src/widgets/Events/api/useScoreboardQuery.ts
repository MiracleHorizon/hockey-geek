import { useQuery } from '@tanstack/react-query'

import { ESPN_API_URL, SCOREBOARD_ENDPOINT } from '@/shared/lib/espn'
import type { ScoreboardType } from '../model/scoreboard.scheme'

export const SCOREBOARD_QUERY_KEY = 'scoreboard'

export const useScoreboardQuery = () =>
  useQuery({
    queryKey: [SCOREBOARD_QUERY_KEY],
    queryFn: async (): Promise<ScoreboardType> => {
      const response = await fetch(`${ESPN_API_URL}/${SCOREBOARD_ENDPOINT}`)

      if (!response.ok) {
        throw new Error(
          `Failed to fetch scoreboard data. Status: ${response.status} - ${response.statusText}`
        )
      }

      return response.json()
    },
    refetchInterval: 5 * 60 * 1000
  })
