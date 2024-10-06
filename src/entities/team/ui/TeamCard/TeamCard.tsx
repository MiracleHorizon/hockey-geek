import { Card, Flex, Text, Title } from '@mantine/core'

import { TeamLogo } from '../TeamLogo/TeamLogo'
import type { Team } from '../../model/team.scheme'
import type { Coaches } from '../../model/team-roster.scheme'

type Props = {
  team: Team
  coaches: Coaches
}

export const TeamCard = ({ team: { displayName, logos, abbreviation }, coaches }: Props) => (
  <Card radius='12px' withBorder>
    <Flex direction='column' align='start' justify='space-between' h='100%'>
      <Flex columnGap='sm' align='center'>
        <TeamLogo size={36} href={logos[0]?.href} alt={abbreviation} />

        <Title size='32px'>{displayName}</Title>
      </Flex>

      {coaches && coaches.length > 0 && (
        <Text size='18px'>Coach: {`${coaches[0].firstName} ${coaches[0].lastName}`}</Text>
      )}
    </Flex>
  </Card>
)
