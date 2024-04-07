import { Flex } from '@mantine/core'

import { Standings } from '@/components/standings'
import { StandingsLeague } from '@/components/standings/standings-league'

export const HomePage = () => (
  <Flex direction='column' w='100%'>
    <Standings>
      <StandingsLeague />
    </Standings>
  </Flex>
)
