import { useQuery } from '@tanstack/react-query'

import { ABORT_TIMEOUT, ESPN_API_URL, TEAMS_ENDPOINT } from './config'
import type { TeamSchedule } from '@/schemas/team-schedule.scheme'

export const TEAM_SCHEDULE_QUERY_KEY = 'team-schedule'

export async function getTeamSchedule(teamId: string): Promise<TeamSchedule> {
  const url = `${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}/schedule`
  const res = await fetch(url, {
    signal: AbortSignal.timeout(ABORT_TIMEOUT)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch team schedule data')
  }

  return res.json()
}

export const useGetTeamSchedule = (teamId?: string) =>
  useQuery({
    queryKey: [TEAM_SCHEDULE_QUERY_KEY, teamId],
    queryFn: () => getTeamSchedule(teamId!),
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
