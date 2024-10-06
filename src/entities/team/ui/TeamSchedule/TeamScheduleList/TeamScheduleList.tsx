import { forwardRef, type MutableRefObject } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import { TeamScheduleCompetition } from './TeamScheduleCompetition/TeamScheduleCompetition'
import type { TeamScheduleEvent } from '../../../model/team-schedule.scheme'
import styles from './TeamScheduleList.module.css'

type Props = {
  events: TeamScheduleEvent[]
}

export const TeamScheduleList = forwardRef<HTMLDivElement, Props>(({ events }, scrollRef) => {
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
