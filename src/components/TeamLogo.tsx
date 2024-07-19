import { memo } from 'react'

import { useDarkTheme } from '@/lib/mantine/useDarkTheme'
import { getTeamLogoImage } from '@/utility/getTeamLogoImage'

interface Props {
  href?: string
  size?: number
  alt?: string
}

// TODO: Logo fallback
export const TeamLogo = memo(({ href, alt = 'Team logo', size = 50 }: Props) => {
  const { isDarkTheme } = useDarkTheme()

  if (!href) {
    return null
  }

  return (
    <img
      width={size}
      height={size}
      src={getTeamLogoImage({
        href,
        size: size + 20,
        dark: isDarkTheme
      })}
      alt={alt}
    />
  )
})
