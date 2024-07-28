import { ABORT_TIMEOUT } from './config'
import { ESPN_API_URL, TEAMS_ENDPOINT } from './espn'
import type { Team } from '@/schemas/team.scheme'

class TeamService {
  private readonly requestURL: string = `${ESPN_API_URL}/${TEAMS_ENDPOINT}`
  private readonly ROSTER_ENDPOINT = 'roster'

  constructor() {}

  public async getTeam(teamId: string): Promise<{ team: Team }> {
    try {
      const url = `${this.requestURL}/${teamId}`
      const res = await fetch(url, {
        signal: AbortSignal.timeout(ABORT_TIMEOUT)
      })

      if (!res.ok) {
        return Promise.reject('[TEAM_DATA]: Failed to fetch team data')
      }

      return res.json()
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`[TEAM_DATA]: Failed to fetch team data, ${err.message}`)
      }

      throw err
    }
  }

  async getTeamRoster(teamId: string) {
    try {
      const url = `${this.requestURL}/${teamId}/${this.ROSTER_ENDPOINT}`
      const res = await fetch(url, {
        signal: AbortSignal.timeout(ABORT_TIMEOUT)
      })

      if (!res.ok) {
        return Promise.reject('[TEAM_ROSTER]: Failed to fetch team roster')
      }

      return res.json()
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`[TEAM_ROSTER]: Failed to fetch team roster, ${err.message}`)
      }

      throw err
    }
  }
}

export const teamService = new TeamService()
