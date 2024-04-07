import { Flex, Table, type TableData, Title } from '@mantine/core'
import type { FC } from 'react'

import styles from './standings-table.module.css'

export const StandingsTable: FC<Props> = ({ title, data }) => (
  <Flex direction='column' className={styles.root}>
    {title && (
      <Title component='h3' size='24px' className={styles.title}>
        {title}
      </Title>
    )}

    <Table.ScrollContainer minWidth='700px'>
      <Table
        mt={title ? '10px' : '0'}
        verticalSpacing='sm'
        striped
        highlightOnHover
        data={data}
        className={styles.table}
      />
    </Table.ScrollContainer>
  </Flex>
)

interface Props {
  data: TableData
  title?: string
}
