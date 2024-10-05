import { Flex } from '@mantine/core'

import { LeagueStandings, Standings } from '@/widgets/Standings'

export const HomePage = () => (
  <Flex direction='column' w='100%'>
    <Standings>
      <LeagueStandings />
    </Standings>
  </Flex>
)
