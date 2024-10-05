import { useQuery } from '@tanstack/react-query'

import { standingsSortQuery } from './config'
import { ESPN_WEB_API_URL, SEASON_YEAR, STANDINGS_ENDPOINT } from '@/shared/lib/espn'
import type { ConferencesStandingType } from '../model/conferences-standings.scheme'

export const CONFERENCES_STANDINGS_QUERY_KEY = 'conferences-standings'

export const useConferencesStandingsQuery = () =>
  useQuery({
    queryKey: [CONFERENCES_STANDINGS_QUERY_KEY],
    queryFn: async (): Promise<ConferencesStandingType> => {
      const searchParams = new URLSearchParams({
        contentorigin: 'espn',
        region: 'us',
        lang: 'en',
        season: SEASON_YEAR.toString(),
        sort: standingsSortQuery
      })

      const response = await fetch(`${ESPN_WEB_API_URL}/${STANDINGS_ENDPOINT}?${searchParams}`)

      if (!response.ok) {
        throw new Error(
          `Failed to fetch conferences standings data. Status: ${response.status} - ${response.statusText}`
        )
      }

      return response.json()
    },
    refetchInterval: 6 * 60 * 60 * 1000,
    refetchOnMount: false
  })
