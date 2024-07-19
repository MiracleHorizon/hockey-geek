import { useLocation, useNavigate } from 'react-router-dom'
import { Flex, Tabs } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { PATH_CONFERENCES, PATH_DIVISIONS, PATH_ROOT } from '@/site/paths'

const pathToValue = (path: string) => path.replace('/', '').trim()

export const Standings = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const getTabValue = () => {
    if (pathname === PATH_ROOT) {
      return 'league'
    }

    return pathToValue(pathname)
  }

  const handleTabChange = (value: string | null) => {
    if (!value) return

    if (value === 'league') {
      return navigate(PATH_ROOT)
    }
    navigate(`/${value}`)
  }

  return (
    <Flex direction='column'>
      <Tabs value={getTabValue()} onChange={handleTabChange}>
        <Tabs.List mb='18px'>
          <Tabs.Tab value='league'>League</Tabs.Tab>
          <Tabs.Tab value={pathToValue(PATH_CONFERENCES)}>Conferences</Tabs.Tab>
          <Tabs.Tab value={pathToValue(PATH_DIVISIONS)}>Divisions</Tabs.Tab>
        </Tabs.List>

        {children}
      </Tabs>
    </Flex>
  )
}
