import { useQuery } from '@tanstack/react-query'

import { ABORT_TIMEOUT, ESPN_API_URL, TEAMS_ENDPOINT } from './config'
import { SEASON_TYPE, type TeamSchedule } from '@/schemas/team-schedule.scheme'

export const TEAM_SCHEDULE_QUERY_KEY = 'team-schedule'
const TEAM_SCHEDULE_ENDPOINT = 'schedule'

interface Arguments {
  teamId: string
  seasonType?: SEASON_TYPE
}

export async function getTeamSchedule({
  teamId,
  seasonType = SEASON_TYPE.REGULAR_SEASON
}: Arguments): Promise<TeamSchedule> {
  const url = `${ESPN_API_URL}/${TEAMS_ENDPOINT}/${teamId}/${TEAM_SCHEDULE_ENDPOINT}`
  const searchParams = new URLSearchParams({
    seasontype: seasonType
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
}: Omit<Arguments, 'teamId'> & { teamId: string | null }) =>
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
