import { useMemo } from 'react'
import { Tabs } from '@mantine/core'

import { StandingsTable } from './StandingsTable'
import { StandingsTableSkeleton } from './StandingsTable/StandingsTableSkeleton'
import { useGetStandingsLeague } from '@/api/get-standings-league'
import { getTableDataBody } from './utils'
import { tableHeadColumns } from './constants'

export const StandingsLeague = () => {
  const { data, isLoading } = useGetStandingsLeague()

  const table = useMemo(() => {
    if (!data) {
      return null
    }

    return {
      title: 'National Hockey League',
      data: {
        head: tableHeadColumns,
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
