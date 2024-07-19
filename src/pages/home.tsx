import { Flex } from '@mantine/core'

import { Standings, StandingsLeague } from '@/components/Standings'

export const HomePage = () => (
  <Flex direction='column' w='100%'>
    <Standings>
      <StandingsLeague />
    </Standings>
  </Flex>
)
