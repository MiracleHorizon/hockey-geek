import { useMemo } from 'react'
import { Table, type TableData } from '@mantine/core'

import { getTeamRosterTableBody } from './utility'
import type { TeamRoster } from '../../../model/team-roster.scheme'
import styles from './TeamRosterTable.module.css'

type Props = {
  roster: TeamRoster
}

const TABLE_HEAD_COLUMNS = [
  'Headshot',
  'Name',
  'Jersey',
  'Position',
  'Birthdate',
  'Height',
  'Weight'
]

export const TeamRosterTable = ({ roster }: Props) => {
  const tableData: TableData = useMemo(() => {
    const body = getTeamRosterTableBody(roster.athletes)

    return {
      head: TABLE_HEAD_COLUMNS,
      body
    }
  }, [roster])

  return (
    <Table
      data={tableData}
      withTableBorder
      stickyHeader
      striped
      highlightOnHover
      verticalSpacing='md'
      className={styles.root}
    />
  )
}
