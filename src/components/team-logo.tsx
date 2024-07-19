import { type FC, memo } from 'react'

import { useDarkTheme } from '@/lib/mantine/useDarkTheme'
import { getTeamLogoImage } from '@/utility/getTeamLogoImage'

// TODO: Logo fallback
export const TeamLogo: FC<Props> = memo(({ size = 50, logo, alt = 'Team logo' }) => {
  const { isDarkTheme } = useDarkTheme()

  if (!logo) {
    return null
  }

  return (
    <img
      width={size}
      height={size}
      src={getTeamLogoImage({
        href: logo,
        size: size + 20,
        dark: isDarkTheme
      })}
      alt={alt}
    />
  )
})

interface Props {
  logo?: string
  size?: number
  alt?: string
}
