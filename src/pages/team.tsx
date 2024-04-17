import { Flex } from '@mantine/core'

import { Team } from '@/components/team'

export function TeamPage() {
  return (
    <Flex align='center' justify='center' py='xl' direction='column' w='100%'>
      <Team />
    </Flex>
  )
}
