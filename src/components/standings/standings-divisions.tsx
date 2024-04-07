import { useMemo } from 'react'
import { Flex, Title } from '@mantine/core'

import { Standings } from './standings'
import { StandingsTable } from './standings-table'
import { StandingsTableSkeleton } from './standings-table-skeleton'
import { useGetStandingsDivisions } from '@/api/get-standings-divisions'
import { getTableDataBody } from './utils'
import { tableHead } from './constants'

const formatDivisionTitle = (title: string) =>
  title.toLowerCase().replace('division', '').trim().toUpperCase()
const getDivisionTableHead = (title: string) =>
  [formatDivisionTitle(title)].concat(tableHead.slice(1, tableHead.length))

export function StandingsDivisions() {
  const { data, isLoading } = useGetStandingsDivisions()

  const conferences = useMemo(() => {
    if (!data) {
      return []
    }

    return data.children.map(conference => {
      const { abbreviation: conferenceTitle, children: divisions } = conference

      return {
        title: `${conferenceTitle} Conference`,
        divisions: divisions.map(({ id, name: divisionTitle, standings }) => ({
          id,
          data: {
            head: getDivisionTableHead(divisionTitle),
            body: getTableDataBody(standings)
          }
        }))
      }
    })
  }, [data])

  return (
    <Standings>
      <Flex w='100%' direction='column' rowGap='16px'>
        {isLoading ? (
          <StandingsTableSkeleton />
        ) : (
          conferences.map(({ title, divisions }) => (
            <Flex key={title} direction='column'>
              <Title component='h3' size='24px' mb='10px'>
                {title}
              </Title>

              {divisions.map(table => (
                <StandingsTable key={table.id} {...table} />
              ))}
            </Flex>
          ))
        )}
      </Flex>
    </Standings>
  )
}
