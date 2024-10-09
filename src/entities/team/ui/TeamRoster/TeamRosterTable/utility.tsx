import dayjs from 'dayjs'
import type { TableData } from '@mantine/core'

import { lbToKilograms } from '@/shared/lib/lbToKilograms'
import { inchesToCentimeters } from '@/shared/lib/inchesToCentimeters'
import type { AthletePosition, TeamRoster } from '../../../model/team-roster.scheme'

const VALUE_FALLBACK = '—'

export const getTeamRosterTableBody = (
  athletesCategories: TeamRoster['athletes']
): TableData['body'] => {
  const athletes = athletesCategories.map(category => category.items)
  const plainAthletes = athletes.reduce((acc, cur) => [...acc, ...cur], [])

  return plainAthletes.map(athlete => {
    const { fullName, jersey, position, dateOfBirth, height, weight } = athlete

    return [
      // TODO: Fallback
      athlete.headshot?.href ? (
        <img src={athlete.headshot.href} alt={`${fullName} headshot`} width={100} />
      ) : <div></div>,
      fullName,
      jersey ?? VALUE_FALLBACK,
      getAthleteDisplayPosition(position),
      dayjs(dateOfBirth).format('MM MMMM YYYY'),
      Math.floor(inchesToCentimeters(height)),
      Math.floor(lbToKilograms(weight))
    ]
  })
}

const getAthleteDisplayPosition = (position: AthletePosition): string => {
  let displayPosition = position.displayName

  if (position.leaf) {
    displayPosition = `${displayPosition} ${position.parent.displayName}`
  }

  return displayPosition
}
