import { useMemo } from 'react'
import { Flex } from '@mantine/core'

import { StandingsTable } from '../StandingsTable/StandingsTable'
import { useConferencesStandingsQuery } from '@/entities/standings'
import { getTableDataBody } from '../../lib/getTableDataBody'
import { TABLE_HEAD_COLUMNS } from '../../lib/constants'

export const ConferencesStandings = () => {
  const { data, isLoading } = useConferencesStandingsQuery()

  const tables = useMemo(() => {
    if (!data) {
      return []
    }

    return data.children.map(({ abbreviation: title, standings }) => ({
      title: `${title} Conference`,
      data: {
        head: TABLE_HEAD_COLUMNS,
        body: getTableDataBody(standings)
      }
    }))
  }, [data])

  return (
    <Flex w='100%' direction='column' rowGap='16px'>
      <>
        {tables.map(table => (
          <StandingsTable key={table.title} {...table} isLoading={isLoading} />
        ))}
      </>
    </Flex>
  )
}
