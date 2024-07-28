import { useMemo } from 'react'
import { Table, type TableData } from '@mantine/core'

import { getTeamRosterTableBody } from './utility'
import type { TeamRoster } from '@/schemas/team-roster.scheme'
import styles from './TeamRosterTable.module.css'

interface Props {
  roster: TeamRoster
}

const TABLE_HEAD_COLUMNS = ['Name', 'Jersey', 'Position', 'Birthdate', 'Height', 'Weight']

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
      stickyHeader
      striped
      highlightOnHover
      verticalSpacing='md'
      className={styles.root}
    />
  )
}
