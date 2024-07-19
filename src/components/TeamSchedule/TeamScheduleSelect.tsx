import { Select } from '@mantine/core'
import { useSearchParams } from 'react-router-dom'

import { SEASON_TYPE } from '@/api/get-team-schedule'
import { SEASON_TYPE_SEARCH } from './constants'

interface Props {
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
]

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
