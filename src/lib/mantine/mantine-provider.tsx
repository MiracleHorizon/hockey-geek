import { MantineProvider, type MantineTheme } from '@mantine/core'
import type { FC, PropsWithChildren } from 'react'

const theme: Partial<MantineTheme> = {
  primaryColor: 'blue'
}

const CustomMantineProvider: FC<PropsWithChildren> = ({ children }) => (
  <MantineProvider defaultColorScheme='dark' theme={theme}>
    {children}
  </MantineProvider>
)

export { CustomMantineProvider as MantineProvider }
