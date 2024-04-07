const LOGO_STATIC_PATH = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/scoreboard'
export const getTeamLogoImage = ({ href, size = 40 }: Params): string => {
  const fileName = href.split('/').pop()
  return `${LOGO_STATIC_PATH}/${fileName}&h=${size}&w=${size}`
}

interface Params {
  href: string
  size?: number
}
