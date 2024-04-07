import { useMemo } from 'react'
import { Flex } from '@mantine/core'

import { Standings } from './standings'
import { StandingsTable } from './standings-table'
import { StandingsTableSkeleton } from './standings-table-skeleton'
import { useGetStandingsConferences } from '@/api/get-standings-conferences'
import { getTableDataBody } from './utils'
import { tableHead } from './constants'

export function StandingsConferences() {
  const { data, isLoading } = useGetStandingsConferences()

  const tables = useMemo(() => {
    if (!data) {
      return []
    }

    return data.children.map(({ abbreviation: title, standings }) => ({
      title: `${title} Conference`,
      data: {
        head: tableHead,
        body: getTableDataBody(standings)
      }
    }))
  }, [data])

  return (
    <Standings>
      <Flex w='100%' direction='column' rowGap='16px'>
        {isLoading ? (
          <StandingsTableSkeleton />
        ) : (
          tables.map(table => <StandingsTable key={table.title} {...table} />)
        )}
      </Flex>
    </Standings>
  )
}
