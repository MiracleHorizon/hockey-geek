import { z } from 'zod'

import { Team } from './scoreboard.scheme'

export const EventStatus = z.object({
  clock: z.number(),
  displayClock: z.string(),
  period: z.number(),
  type: z.object({
    id: z.string(),
    completed: z.boolean(),
    description: z.string(),
    detail: z.string(),
    shortDetail: z.string(),
    state: z.string()
  })
})

const EventLinescores = z.object({
  value: z.number()
})

export const EventCompetitor = z.object({
  id: z.string(),
  uid: z.string(),
  homeAway: z.enum(['home', 'away']),
  team: Team,
  score: z.string().optional(),
  linescores: z.array(EventLinescores).optional()
})

export const EventCompetition = z.object({
  id: z.string(),
  uid: z.string(),
  date: z.date(),
  venue: z.object({
    id: z.string(),
    fullName: z.string(),
    address: z.object({
      city: z.string(),
      state: z.string(),
      country: z.string()
    })
  }),
  competitors: z.array(EventCompetitor)
})

export const Event = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  shortName: z.string(),
  date: z.date(),
  attendance: z.number().optional(),
  status: EventStatus,
  competitions: z.array(EventCompetition)
})

export type EventCompetitorType = z.infer<typeof EventCompetitor>
