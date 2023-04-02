import { CURRENT_MONTH, CURRENT_YEAR } from 'services/constants'
import React, { useEffect, useState } from 'react'
import { fetchMonthlyLogs, scrapeLogs } from '@api/strawberry'

import { CardTitle } from './CardTitle'
import { LogsTable } from './LogsTable'
import toast from 'react-hot-toast'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import useStrawberryStore from 'services/hooks/useStrawberryStore'

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
        logs?.filter(
          (log) =>
            log.description.toLowerCase().includes(search) ||
            log.category.toLowerCase().includes(search)
        )
      )
    else setlogsFiltered(logs)
  }, [search, logs])

  useEffect(() => {
    const fetchData = async () => await fetchLogsByMonth(month)
    fetchData()
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
          <div className="tabs tabs-boxed bg-base-100">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                onClick={() => setMonth(i + 1)}
                className={`tab ${month === i + 1 && 'tab-active'}`}
              >
                {labels[i]}
              </div>
            ))}
          </div>
          <LogsTable logs={logsFiltered} />
        </div>
      )}
    </div>
  )
}
