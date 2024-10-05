import { Flex, NavLink } from '@mantine/core'

import { Link } from '@/shared/lib/router'

type Props = {
  teamId: string
}

export const TeamNavigation = ({ teamId }: Props) => (
  <Flex align='center' w='max-content'>
    <NavLink href={`${teamId}`} label='Schedule' component={Link} />
    <NavLink href={`${teamId}/roster`} label='Roster' component={Link} />
  </Flex>
)
