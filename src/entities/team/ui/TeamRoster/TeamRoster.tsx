import { TeamRosterTable } from './TeamRosterTable/TeamRosterTable'
import { useTeamRosterQuery } from '../../api/useTeamRosterQuery'
import { useTeamId } from '../../lib/useTeamId'

export const TeamRoster = () => {
  const teamId = useTeamId()
  const { data: roster, isLoading } = useTeamRosterQuery({
    teamId
  })

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
