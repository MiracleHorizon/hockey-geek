import { Flex, Table, type TableData, Title } from '@mantine/core'
import type { ReactNode } from 'react'

import { StandingsTableSkeleton } from './StandingsTableSkeleton/StandingsTableSkeleton'
import styles from './StandingsTable.module.css'

type Props = {
  data?: TableData
  title?: string | ReactNode
  isLoading?: boolean
}

export const StandingsTable = ({ data, title, isLoading }: Props) =>
  isLoading ? (
    <StandingsTableSkeleton />
  ) : (
    <Flex direction='column' className={styles.root}>
      {title && (
        <>
          {typeof title === 'string' ? (
            <Title component='h3' size='24px' tt='capitalize' mb='10px' className={styles.title}>
              {title}
            </Title>
          ) : (
            title
          )}
        </>
      )}

      {data && (
        <Table.ScrollContainer minWidth='700px'>
          <Table
            verticalSpacing='sm'
            striped
            highlightOnHover
            data={data}
            className={styles.table}
          />
        </Table.ScrollContainer>
      )}
    </Flex>
  )
