import { z } from 'zod'

export const Team = z.object({
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
  standingSummary: z.string()
})
