import { Flex, NavLink } from '@mantine/core'
import { Link } from 'react-router-dom'

import { PATH_TEAM } from '@/site/paths'

interface Props {
  teamId: string
}

export const TeamNavigation = ({ teamId }: Props) => (
  <Flex align='center' w='max-content'>
    <NavLink to={`${PATH_TEAM}/${teamId}`} label='Schedule' component={Link} />
    <NavLink to={`${PATH_TEAM}/${teamId}/roster`} label='Roster' component={Link} />
  </Flex>
)
