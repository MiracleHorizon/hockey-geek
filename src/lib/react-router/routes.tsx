import type { RouteObject } from 'react-router-dom'

import { DefaultLayout } from '@/layouts/default'
import { HomePage } from '@/pages/home'
import { TeamPage } from '@/pages/team'
import { DivisionsPage } from '@/pages/divisions'
import { ConferencesPage } from '@/pages/conferences'
import { PATH_CONFERENCES, PATH_DIVISIONS, PATH_ROOT, PATH_TEAM } from '@/site/paths'

// TODO: Lazy loading, default layout
export const routes: RouteObject[] = [
  {
    path: PATH_ROOT,
    element: (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    )
  },
  {
    path: PATH_CONFERENCES,
    element: (
      <DefaultLayout>
        <ConferencesPage />
      </DefaultLayout>
    )
  },
  {
    path: PATH_DIVISIONS,
    element: (
      <DefaultLayout>
        <DivisionsPage />
      </DefaultLayout>
    )
  },
  {
    path: PATH_TEAM + '/:teamId',
    element: (
      <DefaultLayout>
        <TeamPage />
      </DefaultLayout>
    )
  }
]
