import { Tabs } from '@mantine/core'

import { useNavigate, useLocation } from '@/shared/lib/router'

type Props = {
  teamId: string
}

export const TeamNavigation = ({ teamId }: Props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Tabs value={pathname.split('/').pop()} onChange={value => navigate(`${teamId}/${value}`)}>
      <Tabs.List>
        <Tabs.Tab value='schedule'>Schedule</Tabs.Tab>
        <Tabs.Tab value='roster'>Roster</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}
