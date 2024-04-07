import { Flex, type TableData, NavLink as MantineLink } from '@mantine/core'
import { Link } from 'react-router-dom'

import { PATH_TEAM } from '@/site/paths'
import { getTeamLogoImage } from '@/utility/getTeamLogoImage'
import type { StandingsType } from '@/schemas/standings.scheme'

const VALUE_FALLBACK = '-'

export const getTableDataBody = (standings: StandingsType): TableData['body'] => standings?.entries.map(({ team, stats }) => {
  const gamesPlayed = stats.find(({ name }) => name === 'gamesPlayed')?.value
  const wins = stats.find(({ name }) => name === 'wins')?.value
  const losses = stats.find(({ name }) => name === 'losses')?.value
  const overtimeWins = stats.find(({ name }) => name === 'overtimeWins')?.value
  const points = stats.find(({ name }) => name === 'points')?.value
  const pointsDiff = stats.find(({ name }) => name === 'pointsDiff')?.value
  const streak = stats.find(({ name }) => name === 'streak')?.displayValue

  const logoHref = team.logos[0]?.href

  return [
    <Flex align='center' key={team.id + '_logo'} columnGap='10px'>
      {logoHref && (
        <img
          src={getTeamLogoImage({
            href: logoHref,
            size: 50
          })}
          width='26'
          height='26'
          alt={team.displayName}
        />
      )}
      <MantineLink component={Link} to={`${PATH_TEAM}/${team.id}`} label={team.displayName} />
    </Flex>,
    points,
    gamesPlayed,
    wins,
    losses,
    overtimeWins,
    pointsDiff,
    streak
  ].map(v => (typeof v === 'undefined' ? VALUE_FALLBACK : v))
})
