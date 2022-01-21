import { fetchMonthlyLogs, scrapeLogs } from '@api/strawberry'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { CURRENT_MONTH, CURRENT_YEAR } from 'services/constants'
import { CardTitle } from './CardTitle'
import { LogsTable } from './LogsTable'

export const LogsSection = ({ isLoading, setIsLoading }) => {
  const {
    strawberry: { logs },
    dispatch,
  } = useStrawberry()
  const [logsFiltered, setlogsFiltered] = useState(logs)
  const [search, setSearch] = useState('')

  const onRefreshLogs = async () => {
    setIsLoading(true)
    const response = await scrapeLogs()
    const logs_ = response.data.data
    logs_.sort((a, b) => (a.start_time > b.start_time ? -1 : 1))
    dispatch({ type: 'set_logs', payload: logs_ })
    setIsLoading(false)
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
    const response = await fetchMonthlyLogs(CURRENT_MONTH, CURRENT_YEAR)
    const logs_ = response.data.data
    logs_.sort((a, b) => (a.start_time > b.start_time ? -1 : 1))
    dispatch({ type: 'set_logs', payload: logs_ })
  }, [])

  return (
    <div className="col-span-full card bg-base-100 flex-1">
      {isLoading ? (
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
          <LogsTable logs={logsFiltered} />
        </div>
      )}
    </div>
  )
}
