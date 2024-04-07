import { z } from 'zod'

import { Standings } from './standings.scheme'

export const Conference = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  standings: Standings
})

export const StandingConferences = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  children: z.array(Conference)
})

export type StandingConferencesType = z.infer<typeof StandingConferences>
