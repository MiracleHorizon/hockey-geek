import { lazy, Suspense } from 'react'
import { Flex, ScrollArea } from '@mantine/core'

import { EventCardSkeleton } from './EventCard/EventCardSkeleton'
import { useGetScoreboard } from '@/api/get-scoreboard'

const EventCard = lazy(() => import('./EventCard'))

const Skeleton = () => new Array(6).fill('').map((_, index) => <EventCardSkeleton key={index} />)

export const Events = () => {
  const { data: scoreboard, isLoading } = useGetScoreboard()

  return (
    <ScrollArea scrollbars='x' w='100%'>
      <Flex align='center' pb='24px' columnGap='md' w='100%'>
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
