import { forwardRef, type MutableRefObject } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import { TeamScheduleCompetition } from './team-schedule-competition'
import type { TeamScheduleEvent } from '@/schemas/team-schedule.scheme'
import styles from './team-schedule-list.module.css'

const TeamScheduleList = forwardRef<HTMLDivElement, Props>(({ events }, scrollRef) => {
  const rowVirtualizer = useVirtualizer({
    count: events.length,
    getScrollElement: () => (scrollRef as MutableRefObject<HTMLDivElement | null>).current,
    estimateSize: () => 160,
    gap: 10
  })

  return (
    <ul
      className={styles.root}
      style={{
        height: rowVirtualizer.getTotalSize() + 'px'
      }}
    >
      {rowVirtualizer.getVirtualItems().map(virtualItem => {
        const item = events[virtualItem.index]
        if (!item) {
          return null
        }

        return (
          <TeamScheduleCompetition
            key={virtualItem.key}
            virtualItem={virtualItem}
            competition={item.competitions[0]}
          />
        )
      })}
    </ul>
  )
})

TeamScheduleList.displayName = 'TeamScheduleList'

interface Props {
  events: TeamScheduleEvent[]
}

export default TeamScheduleList
