import { Flex } from '@mantine/core'

import { Outlet } from '@/shared/lib/router'
import { Events } from '@/widgets/Events'
import { Header } from './Header/Header'

export const Layout = () => (
  <Flex direction='column' w='100dwv'>
    <Header />

    <Flex component='main' px='24px' py='16px' direction='column' rowGap='4px' w='100%'>
      <Events />

      <Outlet />
    </Flex>
  </Flex>
)
