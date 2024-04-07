import { useQuery } from '@tanstack/react-query'

import { ABORT_TIMEOUT, ESPN_WEB_API_URL, SEASON_YEAR, STANDINGS_ENDPOINT } from './config'
import { standingsSortQuery } from './sorting'
import type { StandingConferencesType } from '@/schemas/standings-conferences.scheme'

export const STANDINGS_CONFERENCES_QUERY_KEY = 'standings-conferences'

export async function getStandingsConferences(): Promise<StandingConferencesType> {
  const baseURL = `${ESPN_WEB_API_URL}/${STANDINGS_ENDPOINT}`
  const searchParams = new URLSearchParams({
    contentorigin: 'espn',
    region: 'us',
    lang: 'en',
    season: SEASON_YEAR.toString(),
    sort: standingsSortQuery
  })

  const res = await fetch(baseURL + '?' + searchParams.toString(), {
    signal: AbortSignal.timeout(ABORT_TIMEOUT)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch conferences standings data')
  }

  return res.json()
}

export const useGetStandingsConferences = () => useQuery({
  queryKey: [STANDINGS_CONFERENCES_QUERY_KEY],
  queryFn: getStandingsConferences,
  refetchInterval: 6 * 60 * 60 * 1000,
  refetchOnMount: false
})
