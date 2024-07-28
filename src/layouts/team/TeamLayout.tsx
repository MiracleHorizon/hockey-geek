import { Flex } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { TeamCard } from './TeamCard'
import { useGetTeam } from '@/api/get-team'
import { useTeamId } from '@/hooks/useTeamId'
import { TeamNavigation } from './TeamNavigation'

export const TeamLayout = ({ children }: PropsWithChildren) => {
  const teamId = useTeamId()
  const { data: team, isLoading } = useGetTeam(teamId)

  return (
    <Flex direction='column' rowGap='16px' w='100%'>
      {isLoading && <>Loading...</>}

      {team && <TeamCard team={team} coaches={[]} />}
      {teamId && <TeamNavigation teamId={teamId} />}

      {children}
    </Flex>
  )
}
