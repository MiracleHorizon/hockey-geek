import { useQuery } from '@tanstack/react-query'

import {
  ABORT_TIMEOUT,
  ESPN_WEB_API_URL,
  REQUEST_LEVEL_LEAGUE,
  SEASON_YEAR,
  STANDINGS_ENDPOINT
} from './config'
import { standingsSortQuery } from './sorting'
import type { StandingLeagueType } from '@/schemas/standings-league.scheme'

export const STANDINGS_LEAGUE_QUERY_KEY = 'standings-league'

export async function getStandingsLeague(): Promise<StandingLeagueType> {
  const baseURL = `${ESPN_WEB_API_URL}/${STANDINGS_ENDPOINT}`
  const searchParams = new URLSearchParams({
    contentorigin: 'espn',
    region: 'us',
    lang: 'en',
    type: '0',
    level: REQUEST_LEVEL_LEAGUE.toString(),
    season: SEASON_YEAR.toString(),
    sort: standingsSortQuery
  })

  const res = await fetch(baseURL + '?' + searchParams.toString(), {
    signal: AbortSignal.timeout(ABORT_TIMEOUT)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch league standings data')
  }

  return res.json()
}

export const useGetStandingsLeague = () => useQuery({
  queryKey: [STANDINGS_LEAGUE_QUERY_KEY],
  queryFn: getStandingsLeague,
  refetchInterval: 6 * 60 * 60 * 1000,
  refetchOnMount: false
})
