import { fetchMonthlyLogs, scrapeLogs, scrapeOlderLogs } from '@api/strawberry'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CURRENT_MONTH, CURRENT_YEAR } from 'services/constants'
import useStrawberryStore from 'services/hooks/useStrawberryStore'
import { CardTitle } from './CardTitle'
import { LogsTable } from './LogsTable'

export const LogsSection = () => {
  const {
    strawberry: { logs },
    dispatch,
  } = useStrawberry()
  const [isFetchingMonthly, setFetchingMonthly] = useState(false)
  const [logsFiltered, setlogsFiltered] = useState(logs)
  const [search, setSearch] = useState('')
  const [month, setMonth] = useState(CURRENT_MONTH)
  const { activeCourse } = useStrawberryStore()

  const onRefreshLogs = async () => {
    setFetchingMonthly(true)
    const response = await scrapeLogs(activeCourse)
    const logs_ = response.data.data
    logs_.sort((a, b) => (a.start_time > b.start_time ? -1 : 1))
    dispatch({ type: 'set_logs', payload: logs_ })
    toast.success('Logs updated~')
    setFetchingMonthly(false)
  }

  useEffect(() => {
    if (search !== '')
      setlogsFiltered(
        logs.filter(
          (log) =>
            log.description.toLowerCase().includes(search) ||
            log.category.toLowerCase().includes(search)
        )
      )
    else setlogsFiltered(logs)
  }, [search, logs])

  useEffect(async () => {
    await fetchLogsByMonth(month)
  }, [month])

  const fetchLogsByMonth = async (month) => {
    setFetchingMonthly(true)
    const response = await fetchMonthlyLogs(month, CURRENT_YEAR)
    const logs_ = response.data.data
    logs_.sort((a, b) => (a.start_time > b.start_time ? -1 : 1))
    dispatch({ type: 'set_logs', payload: logs_ })
    setFetchingMonthly(false)
  }

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min)

  return (
    <div className="col-span-full card bg-base-100 flex-1">
      {isFetchingMonthly ? (
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={process.env.BACKEND_URL + '/kokoa-logo.png'}
            alt="loader"
            className="animate-pulse"
          />
        </div>
      ) : (
        <div className="card-body">
          <CardTitle {...{ search, setSearch, onRefreshLogs }} />
          <div class="tabs tabs-boxed bg-base-100">
            {range(1, 12).map((i) => (
              <div
                onClick={() => setMonth(i)}
                class={`tab ${month === i && 'tab-active'}`}
              >
                {labels[i - 1]}
              </div>
            ))}
          </div>
          <LogsTable logs={logsFiltered} />
        </div>
      )}
    </div>
  )
}
