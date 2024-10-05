import { useQuery } from '@tanstack/react-query'

import { standingsSortQuery } from './config'
import {
  ESPN_WEB_API_URL,
  REQUEST_LEVEL_DIVISIONS,
  SEASON_YEAR,
  STANDINGS_ENDPOINT
} from '@/shared/lib/espn'
import type { DivisionsStandingType } from '../model/divisions-standings.scheme'

export const DIVISIONS_STANDINGS_QUERY_KEY = 'divisions-standings'

export const useStandingsDivisionsQuery = () =>
  useQuery({
    queryKey: [DIVISIONS_STANDINGS_QUERY_KEY],
    queryFn: async (): Promise<DivisionsStandingType> => {
      const searchParams = new URLSearchParams({
        contentorigin: 'espn',
        region: 'us',
        lang: 'en',
        type: '0',
        level: REQUEST_LEVEL_DIVISIONS.toString(),
        season: SEASON_YEAR.toString(),
        sort: standingsSortQuery
      })

      const response = await fetch(`${ESPN_WEB_API_URL}/${STANDINGS_ENDPOINT}?${searchParams}`)

      if (!response.ok) {
        throw new Error(
          `Failed to fetch divisions standings data. Status: ${response.status} - ${response.statusText}`
        )
      }

      return response.json()
    },
    refetchInterval: 6 * 60 * 60 * 1000,
    refetchOnMount: false
  })
