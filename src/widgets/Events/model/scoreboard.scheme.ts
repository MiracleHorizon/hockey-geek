import { z } from 'zod'

import { Event } from './event.scheme'

export const Team = z.object({
  id: z.string(),
  uid: z.string(),
  abbreviation: z.string(),
  name: z.string(),
  displayName: z.string(),
  location: z.string(),
  shortDisplayName: z.string(),
  color: z.string(),
  alternateColor: z.string(),
  isActive: z.boolean(),
  logo: z.string().optional()
})

export const Scoreboard = z.object({
  events: z.array(Event)
})

export type EventTeamType = z.infer<typeof Team>
export type EventType = z.infer<typeof Event>
export type ScoreboardType = z.infer<typeof Scoreboard>
