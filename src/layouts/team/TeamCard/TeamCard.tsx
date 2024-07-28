import { Card, Flex, Text, Title } from '@mantine/core'

import { TeamLogoImage } from '@/components/TeamLogoImage'
import type { Team } from '@/schemas/team.scheme'
import type { Coaches } from '@/schemas/team-roster.scheme'

interface Props {
  team: Team | null
  coaches: Coaches
}

export const TeamCard = ({ team, coaches }: Props) => {
  if (!team) {
    return null
  }

  const { displayName, logos } = team

  return (
    <Card radius='12px' withBorder>
      <Flex direction='column' align='start' justify='space-between' h='100%'>
        <Flex columnGap='sm' align='center'>
          <TeamLogoImage size={36} href={logos[0]?.href} alt={team.abbreviation} />

          <Title size='32px'>{displayName}</Title>
        </Flex>

        {coaches && coaches.length > 0 && (
          <Text size='18px'>Coach: {`${coaches[0].firstName} ${coaches[0].lastName}`}</Text>
        )}
      </Flex>
    </Card>
  )
}
