import { Flex, type TableData, NavLink as MantineLink, Text } from '@mantine/core'

import { Link } from '@/shared/lib/router'
import { TeamLogo } from '@/entities/team'
import type { StandingsType } from '@/entities/standings'

const VALUE_FALLBACK = '—'

export const getTableDataBody = (standings: StandingsType): TableData['body'] =>
  standings?.entries.map(({ team, stats }, index) => {
    const gamesPlayed = stats.find(({ name }) => name === 'gamesPlayed')?.value
    const wins = stats.find(({ name }) => name === 'wins')?.value
    const losses = stats.find(({ name }) => name === 'losses')?.value
    const overtimeWins = stats.find(({ name }) => name === 'overtimeWins')?.value
    const points = stats.find(({ name }) => name === 'points')?.value
    const pointsDiff = stats.find(({ name }) => name === 'pointsDiff')?.value
    const streak = stats.find(({ name }) => name === 'streak')?.displayValue
    const logos = team.logos ?? []

    return [
      <Flex align='center' key={team.id + '_logo'} columnGap='10px'>
        <Text>{index + 1}.</Text>
        <TeamLogo size={36} href={logos[0]?.href} alt={team.abbreviation} />
        <MantineLink component={Link} href={`team/${team.id}`} label={team.displayName} />
      </Flex>,
      points,
      gamesPlayed,
      wins,
      losses,
      overtimeWins,
      pointsDiff,
      streak
    ].map(v => (v === undefined ? VALUE_FALLBACK : v))
  })
