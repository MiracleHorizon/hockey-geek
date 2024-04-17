import { Flex, Table, type TableData, Title } from '@mantine/core'
import type { FC } from 'react'

import styles from './standings-table.module.css'

export const StandingsTable: FC<Props> = ({ title, data }) => (
  <Flex direction='column' className={styles.root}>
    {title && (
      <Title component='h3' size='24px' tt='capitalize' mb='10px' className={styles.title}>
        {title}
      </Title>
    )}

    <Table.ScrollContainer minWidth='700px'>
      <Table verticalSpacing='sm' striped highlightOnHover data={data} className={styles.table} />
    </Table.ScrollContainer>
  </Flex>
)

interface Props {
  data: TableData
  title?: string
}
