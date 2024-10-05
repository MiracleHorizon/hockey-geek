import { Flex, Tabs } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { useLocation, useNavigate } from '@/shared/lib/router'

const getTabValue = (pathname: string) => {
  if (pathname === '/') {
    return 'league'
  }

  return pathname.replace('/', '').trim()
}

export const Standings = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleChangeTab = (value: string | null) => {
    if (!value) return

    navigate(value === 'league' ? '/' : `/${value}`)
  }

  return (
    <Flex direction='column'>
      <Tabs value={getTabValue(pathname)} onChange={handleChangeTab}>
        <Tabs.List mb='18px'>
          <Tabs.Tab value='league'>League</Tabs.Tab>
          <Tabs.Tab value='conferences'>Conferences</Tabs.Tab>
          <Tabs.Tab value='divisions'>Divisions</Tabs.Tab>
        </Tabs.List>

        {children}
      </Tabs>
    </Flex>
  )
}
