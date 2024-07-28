import { useQuery } from '@tanstack/react-query'

import { ESPN_API_URL, TEAMS_ENDPOINT } from './espn'
import { ABORT_TIMEOUT } from './config'
import type { TeamRoster } from '@/schemas/team-roster.scheme'

export const TEAM_ROSTER_QUERY_KEY = 'team-roster'
const TEAM_ROSTER_ENDPOINT = 'roster'

export async function getTeamRoster(teamId: string): Promise<TeamRoster> {
  try {
    const url = `${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}/${TEAM_ROSTER_ENDPOINT}`
    const res = await fetch(url, {
      signal: AbortSignal.timeout(ABORT_TIMEOUT)
    })

    if (!res.ok) {
      return Promise.reject('[TEAM_ROSTER]: Failed to fetch team roster')
    }

    return res.json()
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`[TEAM_ROSTER]: Failed to fetch team roster, ${err.message}`)
    }

    throw err
  }
}

export const useGetTeamRoster = (teamId: string | null) =>
  useQuery({
    queryKey: [TEAM_ROSTER_QUERY_KEY, teamId],
    queryFn: () => getTeamRoster(teamId!),
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
