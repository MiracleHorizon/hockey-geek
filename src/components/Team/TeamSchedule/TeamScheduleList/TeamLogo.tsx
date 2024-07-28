import { Anchor, Flex } from '@mantine/core'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import { TeamLogoImage } from '@/components/TeamLogoImage'
import { PATH_TEAM } from '@/site/paths'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@/lib/react-responsive/breakpoints'
import type { TeamScheduleTeam } from '@/schemas/team-schedule.scheme'

interface Props extends TeamScheduleTeam {
  side: 'left' | 'right'
}

export const TeamLogo = ({ id, logos = [], abbreviation, displayName, side }: Props) => (
  <Flex
    pos='absolute'
    align='center'
    direction='column'
    rowGap='md'
    left={side === 'left' ? '10px' : undefined}
    right={side === 'right' ? '10px' : undefined}
  >
    <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.sm}>
      <TeamLogoImage size={80} href={logos[0]?.href} alt={abbreviation} />
    </MediaQuery>
    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.sm}>
      <TeamLogoImage size={60} href={logos[0]?.href} alt={abbreviation} />
    </MediaQuery>

    <Anchor fz='24px' c='var(--text-color)' to={`${PATH_TEAM}/${id}`} component={Link}>
      <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.sm}>{displayName}</MediaQuery>
      <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.sm}>{abbreviation}</MediaQuery>
    </Anchor>
  </Flex>
)
