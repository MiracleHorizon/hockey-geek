import { z } from 'zod'

export const TeamScheme = z.object({
  id: z.string(),
  uid: z.string(),
  slug: z.string(),
  location: z.string(),
  nickname: z.string(),
  abbreviation: z.string(),
  displayName: z.string(),
  shortDisplayName: z.string(),
  color: z.string(),
  alternateColor: z.string(),
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
  standingSummary: z.string()
})

export type Team = z.infer<typeof TeamScheme>
