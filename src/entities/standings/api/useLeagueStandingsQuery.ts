import { useQuery } from '@tanstack/react-query'

import { standingsSortQuery } from './config'
import {
  ESPN_WEB_API_URL,
  REQUEST_LEVEL_LEAGUE,
  SEASON_YEAR,
  STANDINGS_ENDPOINT
} from '@/shared/lib/espn'
import type { LeagueStandingsType } from '../model/league-standings.scheme'

export const LEAGUE_STANDINGS_QUERY_KEY = 'league-standings'

export const useLeagueStandingsQuery = () =>
  useQuery({
    queryKey: [LEAGUE_STANDINGS_QUERY_KEY],
    queryFn: async (): Promise<LeagueStandingsType> => {
      const searchParams = new URLSearchParams({
        contentorigin: 'espn',
        region: 'us',
        lang: 'en',
        type: '0',
        level: REQUEST_LEVEL_LEAGUE.toString(),
        season: SEASON_YEAR.toString(),
        sort: standingsSortQuery
      })

      const response = await fetch(`${ESPN_WEB_API_URL}/${STANDINGS_ENDPOINT}?${searchParams}`)

      if (!response.ok) {
        throw new Error(
          `Failed to fetch league standings data. Status: ${response.status} - ${response.statusText}`
        )
      }

      return response.json()
    },
    refetchInterval: 6 * 60 * 60 * 1000,
    refetchOnMount: false
  })
