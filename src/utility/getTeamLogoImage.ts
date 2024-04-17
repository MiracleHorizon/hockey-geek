const LOGO_STATIC_PATH = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl'
export const getTeamLogoImage = ({ href, size = 40, dark = false }: Params): string => {
  const basicPath = `${LOGO_STATIC_PATH}/500${dark ? '-dark' : ''}/scoreboard`
  const fileName = href.split('/').pop()
  return `${basicPath}/${fileName}&h=${size}&w=${size}`
}

interface Params {
  href: string
  size?: number
  dark?: boolean
}
