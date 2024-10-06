import { useMemo } from 'react'
import { Tabs } from '@mantine/core'

import { useLeagueStandingsQuery } from '@/entities/standings'
import { StandingsTable } from '../StandingsTable/StandingsTable'
import { TABLE_HEAD_COLUMNS } from '../../lib/constants'
import { getTableDataBody } from '../../lib/getTableDataBody'

export const LeagueStandings = () => {
  const { data, isLoading } = useLeagueStandingsQuery()

  const table = useMemo(
    () => ({
      title: 'National Hockey League',
      data: data
        ? {
            head: TABLE_HEAD_COLUMNS,
            body: getTableDataBody(data.standings)
          }
        : undefined
    }),
    [data]
  )

  return (
    <Tabs.Panel value='league'>
      <StandingsTable isLoading={isLoading} {...table} />
    </Tabs.Panel>
  )
}
