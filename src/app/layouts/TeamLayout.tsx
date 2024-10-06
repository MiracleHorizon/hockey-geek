import { Flex } from '@mantine/core'

import { Outlet } from '@/shared/lib/router'
import { TeamCard, TeamNavigation, useTeamId, useTeamQuery } from '@/entities/team'

export const TeamLayout = () => {
  const teamId = useTeamId()
  const { data: team, isLoading } = useTeamQuery({
    teamId
  })

  return (
    <Flex direction='column' rowGap='16px' w='100%'>
      {isLoading && <div>Loading...</div>}

      {team && <TeamCard team={team} coaches={[]} />}
      {teamId && <TeamNavigation teamId={teamId} />}

      <Outlet />
    </Flex>
  )
}
