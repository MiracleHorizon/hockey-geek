import { MantineProvider, type MantineTheme } from '@mantine/core'
import type { PropsWithChildren } from 'react'

const theme: Partial<MantineTheme> = {
  primaryColor: 'blue'
}

const CustomMantineProvider = ({ children }: PropsWithChildren) => (
  <MantineProvider defaultColorScheme='dark' theme={theme}>
    {children}
  </MantineProvider>
)

export { CustomMantineProvider as MantineProvider }
