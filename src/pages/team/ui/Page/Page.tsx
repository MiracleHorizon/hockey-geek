import { Redirect, useLocation } from '@/shared/lib/router'

export const TeamPage = () => {
  const { pathname } = useLocation()

  return <Redirect path={`${pathname}/schedule`} />
}
