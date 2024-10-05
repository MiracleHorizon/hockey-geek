import { useMemo } from 'react'
import { Flex, Title } from '@mantine/core'

import { useStandingsDivisionsQuery } from '@/entities/standings'
import { StandingsTable } from '../StandingsTable/StandingsTable'
import { getTableDataBody } from '../../lib/getTableDataBody'
import { TABLE_HEAD_COLUMNS } from '../../lib/constants'

const formatDivisionTitle = (title: string) =>
  title.toLowerCase().replace('division', '').trim().toUpperCase()
const getDivisionTableHead = (title: string) =>
  [formatDivisionTitle(title)].concat(TABLE_HEAD_COLUMNS.slice(1, TABLE_HEAD_COLUMNS.length))

export const DivisionsStandings = () => {
  const { data, isLoading } = useStandingsDivisionsQuery()

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
    <Flex w='100%' direction='column' rowGap='16px'>
      {conferences.map(({ title, divisions }) => (
        <Flex key={title} direction='column'>
          <Title component='h3' size='24px' mb='10px'>
            {title}
          </Title>

          {divisions.map(table => (
            <StandingsTable isLoading={isLoading} key={table.id} {...table} />
          ))}
        </Flex>
      ))}
    </Flex>
  )
}
