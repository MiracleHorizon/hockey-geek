import { useQuery } from '@tanstack/react-query'

import { ABORT_TIMEOUT, ESPN_API_URL, TEAMS_ENDPOINT } from './config'
import type { TeamSchedule } from '@/schemas/team-schedule.scheme'

export const TEAM_SCHEDULE_QUERY_KEY = 'team-schedule'

/* eslint no-unused-vars: 0 */
export enum SEASON_TYPE {
  PRE_SEASON = '1',
  REGULAR_SEASON = '2',
  POST_SEASON = '3'
}

export async function getTeamSchedule({
  teamId,
  seasonType
}: {
  teamId: string
  seasonType?: SEASON_TYPE
}): Promise<TeamSchedule> {
  const url = `${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}/schedule`
  const searchParams = new URLSearchParams({
    seasontype: seasonType ?? SEASON_TYPE.REGULAR_SEASON
  })
  const res = await fetch(url + '?' + searchParams, {
    signal: AbortSignal.timeout(ABORT_TIMEOUT)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch team schedule data')
  }

  return res.json()
}

export const useGetTeamSchedule = ({
  teamId,
  seasonType
}: {
  teamId: string | undefined
  seasonType?: SEASON_TYPE
}) =>
  useQuery({
    queryKey: [TEAM_SCHEDULE_QUERY_KEY, teamId, seasonType],
    queryFn: () =>
      getTeamSchedule({
        teamId: teamId!,
        seasonType
      }),
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
