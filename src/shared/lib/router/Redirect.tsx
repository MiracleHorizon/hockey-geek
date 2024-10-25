import { useEffect } from 'react'

import { useNavigate, type NavigateOptions } from 'react-router-dom'

export const Redirect = ({ path, options }: { path: string; options?: NavigateOptions }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(path, options)
  }, [path, options])

  return null
}
