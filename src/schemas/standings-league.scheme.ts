import { z } from 'zod'

import { Standings } from './standings.scheme'

export const StandingConferences = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  standings: Standings
})

export type StandingLeagueType = z.infer<typeof StandingConferences>
