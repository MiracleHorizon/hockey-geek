import { TeamRosterTable } from './TeamRosterTable'
import { useGetTeamRoster } from '@/api/get-team-roster'
import { useTeamId } from '@/hooks/useTeamId'

export const TeamRoster = () => {
  const teamId = useTeamId()
  const { data: roster, isLoading } = useGetTeamRoster(teamId)

  if (!isLoading && !roster) {
    return null
  }

  return (
    <div>
      {isLoading && <span>Loading...</span>}

      {roster && <TeamRosterTable roster={roster} />}
    </div>
  )
}
