import { useQuery } from '@tanstack/react-query'

import { ABORT_TIMEOUT, ESPN_WEB_API_URL, TEAMS_ENDPOINT } from './config'
import type { TeamsType } from '@/schemas/teams.scheme'

export const ALL_TEAMS_QUERY_KEY = 'teams'

export async function getAllTeams(): Promise<TeamsType> {
  const url = `${ESPN_WEB_API_URL}/${TEAMS_ENDPOINT}`
  const res = await fetch(url, {
    signal: AbortSignal.timeout(ABORT_TIMEOUT)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch teams data')
  }

  return res.json()
}

export const useGetAllTeams = () =>
  useQuery({
    queryKey: [ALL_TEAMS_QUERY_KEY],
    queryFn: getAllTeams,
    refetchOnMount: false
  })
