import { Flex, Skeleton, Table } from '@mantine/core'

import { getRandomValueFromRange } from '@/utility/getRandomValueFromRange'
import { tableHead } from './constants'
import styles from './standings-table.module.css'

const TableRow = () => (
  <Table.Tr h='69px'>
    <Table.Th>
      <Skeleton w={`${getRandomValueFromRange(170, 210)}px`} h='28px' />
    </Table.Th>

    {new Array(tableHead.length - 1).fill('').map((_, index) => (
      <Table.Th key={index}>
        <Skeleton w='50px' h='28px' />
      </Table.Th>
    ))}
  </Table.Tr>
)

export const StandingsTableSkeleton = () => (
  <Flex w='100%' direction='column'>
    <Skeleton w='100%' maw='270px' h='31px' />

    <Table.ScrollContainer minWidth='700px'>
      <Table verticalSpacing='sm' mt='10px' className={styles.table}>
        <Table.Thead>
          <Table.Tr>
            {tableHead.map(title =>
              title.toLocaleLowerCase() === 'team' ? (
                <Table.Th w='45%' key={title}>
                  {title}
                </Table.Th>
              ) : (
                <Table.Th key={title}>{title}</Table.Th>
              )
            )}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  </Flex>
)
