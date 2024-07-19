import { useQuery } from '@tanstack/react-query'

import {
  ABORT_TIMEOUT,
  ESPN_WEB_API_URL,
  REQUEST_LEVEL_DIVISIONS,
  SEASON_YEAR,
  STANDINGS_ENDPOINT
} from './config'
import { standingsSortQuery } from './sorting'
import type { StandingDivisionsType } from '@/schemas/standings-divisions.scheme'

export const STANDINGS_DIVISIONS_QUERY_KEY = 'standings-divisions'

export async function getStandingsDivisions(): Promise<StandingDivisionsType> {
  const baseURL = `${ESPN_WEB_API_URL}/${STANDINGS_ENDPOINT}`
  const searchParams = new URLSearchParams({
    contentorigin: 'espn',
    region: 'us',
    lang: 'en',
    type: '0',
    level: REQUEST_LEVEL_DIVISIONS.toString(),
    season: SEASON_YEAR.toString(),
    sort: standingsSortQuery
  })

  const res = await fetch(baseURL + '?' + searchParams.toString(), {
    signal: AbortSignal.timeout(ABORT_TIMEOUT)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch divisions standings data')
  }

  return res.json()
}

export const useGetStandingsDivisions = () =>
  useQuery({
    queryKey: [STANDINGS_DIVISIONS_QUERY_KEY],
    queryFn: getStandingsDivisions,
    refetchInterval: 6 * 60 * 60 * 1000,
    refetchOnMount: false
  })
