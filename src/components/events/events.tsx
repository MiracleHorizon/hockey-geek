import { lazy, Suspense } from 'react'
import { Flex, ScrollArea } from '@mantine/core'

import { EventCardSkeleton } from './event-card-skeleton'
import { useGetScoreboard } from '@/api/get-scoreboard'

const EventCard = lazy(() => import('./event-card'))

const Skeleton = () => new Array(6).fill('').map((_, index) => <EventCardSkeleton key={index} />)

export function Events() {
  const { data: scoreboard, isLoading } = useGetScoreboard()

  return (
    <ScrollArea scrollbars='x' w='100%'>
      <Flex align='center' pb='16px' columnGap='md' w='100%'>
        {isLoading && <Skeleton />}
        {scoreboard &&
          scoreboard.events.map(event => (
            <Suspense key={event.id} fallback={<EventCardSkeleton />}>
              <EventCard {...event} />
            </Suspense>
          ))}
      </Flex>
    </ScrollArea>
  )
}
