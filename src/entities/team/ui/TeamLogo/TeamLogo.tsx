import { memo } from 'react'

import { useDarkTheme } from '@/entities/theme'
import { getTeamLogoPath } from '../../lib/getTeamLogoPath'

type Props = {
  href?: string
  size?: number
  alt?: string
}

// TODO: Fallback
export const TeamLogo = memo(({ href, alt = 'Team Logo', size = 50 }: Props) => {
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
        // TODO: Почему 20?
        size: size + 20,
        dark: isDarkTheme
      })}
      alt={alt}
    />
  )
})
