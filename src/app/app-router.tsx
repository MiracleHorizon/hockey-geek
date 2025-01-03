import { createBrowserRouter } from '@/shared/lib/router'
import { HomePage } from '@/pages/home'
import { DivisionsPage } from '@/pages/divisions'
import { ConferencesPage } from '@/pages/conferences'
import { TeamPage } from '@/pages/team'
import { TeamSchedulePage } from '@/pages/team-schedule'
import { TeamRosterPage } from '@/pages/team-roster'
import { BaseLayout } from './layouts/BaseLayout'
import { TeamLayout } from './layouts/TeamLayout'

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/divisions',
          element: <DivisionsPage />
        },
        {
          path: '/conferences',
          element: <ConferencesPage />
        },
        {
          path: '/team',
          element: <TeamLayout />,
          children: [
            {
              path: ':teamId',
              children: [
                {
                  index: true,
                  element: <TeamPage />
                },
                {
                  path: 'schedule',
                  element: <TeamSchedulePage />
                },
                {
                  path: 'roster',
                  element: <TeamRosterPage />
                }
              ]
            }
          ]
        }
      ]
    }
  ])
