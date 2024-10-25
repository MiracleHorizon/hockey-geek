import { TeamScheduleCompetition } from './TeamScheduleCompetition/TeamScheduleCompetition'
import type { TeamScheduleEvent } from '../../../model/team-schedule.scheme'
import styles from './TeamScheduleList.module.css'

type Props = {
  events: TeamScheduleEvent[]
}

export const TeamScheduleList = ({ events }: Props) => (
  <ul className={styles.root}>
    {events.map((event, index) => (
      <TeamScheduleCompetition
        key={event.id}
        order={index + 1}
        competition={event.competitions[0]}
      />
    ))}
  </ul>
)
