import '@mantine/core/styles.css'

import { ThemeProvider } from '@/entities/theme'
import { RouterProvider } from '@/shared/lib/router'
import { ReactQueryProvider } from '@/shared/lib/react-query'
import { createRouter } from './app-router'

export const App = () => (
  <ThemeProvider>
    <ReactQueryProvider>
      <RouterProvider router={createRouter()} />
    </ReactQueryProvider>
  </ThemeProvider>
)
