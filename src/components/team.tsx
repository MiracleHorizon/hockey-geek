import { Flex } from '@mantine/core'

import { TeamSchedule } from './team-schedule'

function TeamPage() {
  return (
    <Flex direction='column' w='100%'>
      <TeamSchedule />
    </Flex>
  )
}

export { TeamPage as Team }
