const QUOTATION_MARK_CODE = '%3A'
const COMMA_CODE = '%2C'

const standingsSort = {
  points: 'desc',
  gamesplayed: 'asc',
  rotwins: 'desc',
  regwins: 'desc'
} as const

export const standingsSortQuery = Object.entries(standingsSort)
  .map(([key, value]) => key + QUOTATION_MARK_CODE + value)
  .join(COMMA_CODE)
