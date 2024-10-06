import { z } from 'zod'

import { Standings } from './standings.scheme'

export const LeagueStandings = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  standings: Standings
})

export type LeagueStandingsType = z.infer<typeof LeagueStandings>
