import { useQuery } from '@tanstack/react-query'

import { ABORT_TIMEOUT, ESPN_API_URL, SCOREBOARD_ENDPOINT } from './config'
import type { ScoreboardType } from '@/schemas/scoreboard.scheme'

export const SCOREBOARD_QUERY_KEY = 'scoreboard'

export async function getScoreboard(): Promise<ScoreboardType> {
  const url = `${ESPN_API_URL}/${SCOREBOARD_ENDPOINT}`
  const res = await fetch(url, {
    signal: AbortSignal.timeout(ABORT_TIMEOUT)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch scoreboard data')
  }

  return res.json()
}

export const useGetScoreboard = () => useQuery({
  queryKey: [SCOREBOARD_QUERY_KEY],
  queryFn: getScoreboard,
  refetchInterval: 5 * 60 * 1000
})
