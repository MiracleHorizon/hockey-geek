import { memo } from 'react'

import { useDarkTheme } from '@/lib/mantine/useDarkTheme'
import { getTeamLogoPath } from '@/utility/getTeamLogoPath'

interface Props {
  href?: string
  size?: number
  alt?: string
}

// TODO: Logo fallback
export const TeamLogoImage = memo(({ href, alt = 'Team logo', size = 50 }: Props) => {
  const { isDarkTheme } = useDarkTheme()

  if (!href) {
    return null
  }

  return (
    <img
      width={size}
      height={size}
      src={getTeamLogoPath({
        href,
        size: size + 20,
        dark: isDarkTheme
      })}
      alt={alt}
    />
  )
})
