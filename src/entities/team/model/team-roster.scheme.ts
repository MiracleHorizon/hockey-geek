import { z } from 'zod'

const AthleteBirthplaceScheme = z.object({
  city: z.string(),
  state: z.string(),
  country: z.string(),
  displayText: z.string()
})

const AthletePositionScheme = z.object({
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
  abbreviation: z.string(),
  leaf: z.boolean()
})

const AthleteScheme = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  fullName: z.string(),
  weight: z.number(),
  height: z.number(),
  age: z.number(),
  jersey: z.string().optional(),
  dateOfBirth: z.string(),
  birthPlace: AthleteBirthplaceScheme,
  headshot: z.object({
    href: z.string().optional(),
    alt: z.string().optional()
  }),
  position: AthletePositionScheme.extend({
    parent: AthletePositionScheme
  })
})

const AthletesCategoryScheme = z.object({
  position: z.enum(['Centers', 'Left Wings', 'Right Wings', 'Defense', 'Goalies']),
  items: z.array(AthleteScheme)
})

const Coach = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  experience: z.number()
})

const TeamRosterScheme = z.object({
  athletes: z.array(AthletesCategoryScheme),
  coach: z.array(Coach)
})

export type TeamRoster = z.infer<typeof TeamRosterScheme>
export type Coaches = TeamRoster['coach']
export type AthletesCategory = z.infer<typeof AthletesCategoryScheme>
export type AthletePosition = AthletesCategory['items'][0]['position']
