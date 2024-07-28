import { useParams } from 'react-router-dom'

export const useTeamId = (): string | null => {
  const params = useParams()

  return params?.teamId ?? null
}
