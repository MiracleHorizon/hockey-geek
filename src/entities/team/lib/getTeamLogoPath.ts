const ESPN_CDN_LOGO_STATIC_PATH = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl'

export const getTeamLogoPath = ({
  href,
  size = 40,
  dark = false
}: {
  href: string
  size?: number
  dark?: boolean
}): string => {
  const basicPath = `${ESPN_CDN_LOGO_STATIC_PATH}/500${dark ? '-dark' : ''}/scoreboard`
  const fileName = href.split('/').pop()

  return `${basicPath}/${fileName}&h=${size}&w=${size}`
}
