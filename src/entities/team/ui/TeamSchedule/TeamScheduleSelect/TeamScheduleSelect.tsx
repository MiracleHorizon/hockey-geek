import { Select } from '@mantine/core'

import { useSearchParams } from '@/shared/lib/router'
import { SEASON_TYPE_SEARCH } from '../../../lib/constants'
import { SEASON_TYPE } from '../../../model/team-schedule.scheme'

type Props = {
  value: string
}

const data = [
  {
    value: SEASON_TYPE.PRE_SEASON,
    label: 'Preseason'
  },
  {
    value: SEASON_TYPE.REGULAR_SEASON,
    label: 'Regular Season'
  },
  {
    value: SEASON_TYPE.POST_SEASON,
    label: 'Postseason'
  }
] as const

export const TeamScheduleSelect = ({ value }: Props) => {
  const [, setSearchParams] = useSearchParams()

  const onChange = (value: string | null) => {
    if (!value) return

    setSearchParams([[SEASON_TYPE_SEARCH, value]])
  }

  return (
    <Select w='180px' checkIconPosition='right' data={data} value={value} onChange={onChange} />
  )
}
