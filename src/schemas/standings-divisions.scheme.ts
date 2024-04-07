import { z } from 'zod'

import { Standings } from './standings.scheme'

export const Division = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  standings: Standings
})

export const StandingDivisions = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  children: z.array(
    z.object({
      id: z.string(),
      uid: z.string(),
      name: z.string(),
      abbreviation: z.string(),
      children: z.array(Division)
    })
  )
})

export type StandingDivisionsType = z.infer<typeof StandingDivisions>
