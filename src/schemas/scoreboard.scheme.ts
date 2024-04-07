import { z } from 'zod'

const Status = z.object({
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
  logo: z.string()
})

const Competitor = z.object({
  id: z.string(),
  uid: z.string(),
  homeAway: z.enum(['home', 'away']),
  team: Team,
  score: z.string().optional(),
  linescores: z
    .array(
      z.object({
        value: z.number()
      })
    )
    .optional()
})

const Event = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  shortName: z.string(),
  date: z.date(),
  status: Status,
  competitions: z.array(
    z.object({
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
      competitors: z.array(Competitor)
    })
  )
})

export const Scoreboard = z.object({
  events: z.array(Event)
})

export type EventTeamType = z.infer<typeof Team>
export type EventType = z.infer<typeof Event>
export type CompetitorType = z.infer<typeof Competitor>
export type ScoreboardType = z.infer<typeof Scoreboard>
