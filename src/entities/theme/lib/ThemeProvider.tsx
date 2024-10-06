import { MantineProvider, type MantineTheme } from '@mantine/core'
import type { PropsWithChildren } from 'react'

const theme: Partial<MantineTheme> = {
  primaryColor: 'blue'
}

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <MantineProvider defaultColorScheme='dark' theme={theme}>
    {children}
  </MantineProvider>
)
