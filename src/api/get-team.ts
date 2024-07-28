import { useQuery } from '@tanstack/react-query'

import { ABORT_TIMEOUT, ESPN_API_URL, TEAMS_ENDPOINT } from './config'
import type { Team } from '@/schemas/team.scheme'

export const TEAM_QUERY_KEY = 'team'

export async function getTeam(teamId: string): Promise<Team> {
  try {
    const url = `${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}`
    const res = await fetch(url, {
      signal: AbortSignal.timeout(ABORT_TIMEOUT)
    })

    if (!res.ok) {
      return Promise.reject('[TEAM_DATA]: Failed to fetch team data')
    }

    const data = await res.json()

    return data.team
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`[TEAM_DATA]: Failed to fetch team data, ${err.message}`)
    }

    throw err
  }
}

export const useGetTeam = (teamId: string | null) =>
  useQuery({
    queryKey: [TEAM_QUERY_KEY, teamId],
    queryFn: () => getTeam(teamId!),
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
