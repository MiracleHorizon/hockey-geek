import { z } from 'zod'

export const Team = z.object({
  id: z.string(),
  uid: z.string(),
  slug: z.string(),
  abbreviation: z.string(),
  name: z.string(),
  displayName: z.string(),
  shortDisplayName: z.string(),
  nickname: z.string(),
  location: z.string(),
  color: z.string(),
  alternateColor: z.string(),
  isActive: z.boolean(),
  isAllStar: z.boolean(),
  logos: z.array(
    z
      .object({
        href: z.string(),
        width: z.number(),
        height: z.number(),
        alt: z.string(),
        rel: z.tuple([z.string(), z.string()])
      })
      .optional()
  ),
  links: z.array(
    z.object({
      language: z.string(),
      rel: z.tuple([z.string(), z.string(), z.string()]),
      href: z.string(),
      text: z.string(),
      shortText: z.string(),
      isExternal: z.boolean(),
      isPremium: z.boolean(),
      isHidden: z.boolean()
    })
  )
})

export const League = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  shortName: z.string(),
  slug: z.string(),
  teams: z
    .object({
      team: Team
    })
    .array(),
  year: z.number(),
  season: z.object({
    year: z.number(),
    displayName: z.string()
  })
})

export const Sports = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string(),
  slug: z.string(),
  leagues: z.array(League)
})

export const Teams = z.object({
  sports: z.array(Sports)
})

export type TeamsType = z.infer<typeof Teams>
