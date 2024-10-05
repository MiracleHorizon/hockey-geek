import { Anchor, Flex } from '@mantine/core'
import MediaQuery from 'react-responsive'

import { Link } from '@/shared/lib/router'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@/shared/lib/react-responsive'
import { TeamLogo as BaseLogo } from '../../../TeamLogo/TeamLogo'
import type { TeamScheduleTeam } from '../../../../model/team-schedule.scheme'

type Props = TeamScheduleTeam & {
  position: 'left' | 'right'
}

export const TeamLogo = ({ id, logos = [], abbreviation, displayName, position }: Props) => (
  <Flex
    pos='absolute'
    align='center'
    direction='column'
    rowGap='md'
    left={position === 'left' ? '10px' : undefined}
    right={position === 'right' ? '10px' : undefined}
  >
    <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.sm}>
      <BaseLogo size={80} href={logos[0]?.href} alt={abbreviation} />
    </MediaQuery>
    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.sm}>
      <BaseLogo size={60} href={logos[0]?.href} alt={abbreviation} />
    </MediaQuery>

    <Anchor fz='24px' c='var(--text-color)' href={`team/${id}`} component={Link}>
      <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.sm}>{displayName}</MediaQuery>
      <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.sm}>{abbreviation}</MediaQuery>
    </Anchor>
  </Flex>
)
