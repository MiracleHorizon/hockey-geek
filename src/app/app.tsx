import '@mantine/core/styles.css'

import { RouterProvider } from '@/shared/lib/router'
import { MantineProvider } from '@/shared/lib/mantine'
import { ReactQueryProvider } from '@/shared/lib/react-query'
import { createRouter } from './app-router'

export const App = () => (
  <MantineProvider>
    <ReactQueryProvider>
      <RouterProvider router={createRouter()} />
    </ReactQueryProvider>
  </MantineProvider>
)
