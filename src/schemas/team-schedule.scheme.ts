import { z } from 'zod'

const EventSchema = z.object({
  id: z.string(),
  date: z.string(),
  name: z.string(),
  competitions: z.array(
    z.object({
      id: z.string(),
      date: z.string(),
      attendance: z.number(),
      status: z.object({
        clock: z.number(),
        period: z.number(),
        type: z.object({
          state: z.string(),
          completed: z.boolean()
        })
      }),
      competitors: z.array(
        z.object({
          id: z.string(),
          winner: z.boolean(),
          homeAway: z.enum(['home', 'away']),
          team: z.object({
            id: z.string(),
            location: z.string(),
            displayName: z.string(),
            abbreviation: z.string(),
            logos: z.array(
              z.object({
                href: z.string(),
                width: z.number(),
                height: z.number(),
                rel: z.array(z.string())
              })
            )
          }),
          score: z
            .object({
              value: z.string(),
              displayValue: z.string()
            })
            .optional()
        })
      )
    })
  )
})

const TeamScheduleSchema = z.object({
  team: z.object({
    id: z.string(),
    location: z.string(),
    abbreviation: z.string(),
    name: z.string(),
    displayName: z.string(),
    logo: z.string(),
    standingSummary: z.string()
  }),
  events: z.array(EventSchema)
})

export type TeamSchedule = z.infer<typeof TeamScheduleSchema>
export type TeamScheduleEvent = z.infer<typeof EventSchema>
export type TeamScheduleCompetition = TeamScheduleEvent['competitions'][0]
export type TeamScheduleTeam = TeamScheduleCompetition['competitors'][0]['team']
