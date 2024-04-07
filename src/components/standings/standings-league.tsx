import { useMemo } from 'react'
import { Tabs } from '@mantine/core'

import { StandingsTable } from './standings-table'
import { StandingsTableSkeleton } from './standings-table-skeleton'
import { useGetStandingsLeague } from '@/api/get-standings-league'
import { getTableDataBody } from './utils'
import { tableHead } from './constants'

export function StandingsLeague() {
  const { data, isLoading } = useGetStandingsLeague()

  const table = useMemo(() => {
    if (!data) {
      return null
    }

    return {
      title: 'National Hockey League',
      data: {
        head: tableHead,
        body: getTableDataBody(data.standings)
      }
    }
  }, [data])

  return (
    <Tabs.Panel value='league'>
      {isLoading && <StandingsTableSkeleton />}

      {table && !isLoading && <StandingsTable key={table.title} {...table} />}
    </Tabs.Panel>
  )
}
