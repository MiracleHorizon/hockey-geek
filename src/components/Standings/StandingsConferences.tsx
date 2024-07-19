import { useMemo } from 'react'
import { Flex } from '@mantine/core'

import { Standings } from './Standings'
import { StandingsTable } from './StandingsTable'
import { StandingsTableSkeleton } from './StandingsTable/StandingsTableSkeleton'
import { useGetStandingsConferences } from '@/api/get-standings-conferences'
import { getTableDataBody } from './utils'
import { tableHeadColumns } from './constants'

export const StandingsConferences = () => {
  const { data, isLoading } = useGetStandingsConferences()

  const tables = useMemo(() => {
    if (!data) {
      return []
    }

    return data.children.map(({ abbreviation: title, standings }) => ({
      title: `${title} Conference`,
      data: {
        head: tableHeadColumns,
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
