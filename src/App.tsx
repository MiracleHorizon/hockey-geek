import { RouterProvider } from 'react-router-dom'
import '@mantine/core/styles.css'

import { MantineProvider } from '@/lib/mantine'
import { ReactQueryProvider } from '@/lib/react-query'
import { router } from '@/lib/react-router'

export function App() {
  return (
    <MantineProvider>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </MantineProvider>
  )
}
