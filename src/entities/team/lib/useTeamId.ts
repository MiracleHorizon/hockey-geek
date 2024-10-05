import { useParams } from '@/shared/lib/router'

export const useTeamId = (): string | null => {
  const params = useParams()

  return params['teamId'] ?? null
}
