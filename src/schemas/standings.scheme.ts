import { z } from 'zod'

export const Standings = z.object({
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
  entries: z.array(
    z.object({
      team: z.object({
        id: z.string(),
        uid: z.string(),
        location: z.string(),
        name: z.string(),
        abbreviation: z.string(),
        displayName: z.string(),
        shortDisplayName: z.string(),
        logos: z
          .array(
            z.object({
              href: z.string(),
              width: z.number(),
              height: z.number(),
              alt: z.string(),
              rel: z.tuple([z.string(), z.string()])
            })
          )
          .optional()
      }),
      stats: z.array(
        z.object({
          id: z.string().optional(),
          name: z.string(),
          displayName: z.string(),
          shortDisplayName: z.string(),
          description: z.string(),
          abbreviation: z.string(),
          type: z.string(),
          value: z.number(),
          displayValue: z.string()
        })
      )
    })
  )
})

export type StandingsType = z.infer<typeof Standings>
