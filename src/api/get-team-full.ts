import { useQuery } from '@tanstack/react-query'

import { getTeam } from './get-team'
import { getTeamSchedule } from './get-team-schedule'
import type { SEASON_TYPE } from '@/schemas/team-schedule.scheme'

export const TEAM_FULL_QUERY_KEY = 'team-full'

interface Arguments {
  teamId: string
  seasonType?: SEASON_TYPE
}

async function getTeamFull({ teamId, seasonType }: Arguments) {
  const [team, schedule] = await Promise.allSettled([
    getTeam(teamId),
    getTeamSchedule({
      teamId,
      seasonType
    })
  ])

  return {
    team: team.status === 'fulfilled' ? team.value : null,
    schedule: schedule.status === 'fulfilled' ? schedule.value : null
  }
}

export const useGetTeamFull = ({
  teamId,
  ...payload
}: Omit<Arguments, 'teamId'> & {
  teamId?: string
}) =>
  useQuery({
    queryKey: [TEAM_FULL_QUERY_KEY, teamId],
    queryFn: () =>
      getTeamFull({
        teamId: teamId!,
        ...payload
      }),
    enabled: typeof teamId === 'string',
    refetchOnMount: false
  })
