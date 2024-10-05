import { Link as RouterLink, type LinkProps } from 'react-router-dom'

type Props<T extends string> = Omit<LinkProps, 'to'> & {
  href: T
}

export const Link = <T extends string>({ href, ...props }: Props<T>) => (
  <RouterLink to={href} {...props} />
)
