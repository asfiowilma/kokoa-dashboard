import { CURRENT_MONTH, CURRENT_YEAR } from 'services/constants'
import React, { useEffect, useState } from 'react'
import { fetchMonthlyEarnings, fetchYearlyEarnings } from '@api/strawberry'

import { FullStats } from './Stats'
import { LogsSection } from './Logs'
import OfferCard from './Listing'
import { QuicklogSection } from './Quicklog'
import { ReportCard } from './ReportCard'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'

export default function StrawberryComponent() {
  const [isFetchingYearly, setFetchingYearly] = useState(true)

  const [year, setYear] = useState(CURRENT_YEAR)
  const [tab, setTab] = useState(0)
  const [currentMonthData, setCurrentData] = useState({})
  const {
    strawberry: { logs, reports },
    dispatch,
  } = useStrawberry()

  useEffect(() => {
    setTab(localStorage.getItem('strawberry_is_working') == 'true' ? 0 : 1)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const { data: result } = await fetchMonthlyEarnings(
        CURRENT_MONTH,
        CURRENT_YEAR
      )
      setCurrentData(result)
    }
    fetchData()
  }, [logs])

  useEffect(() => {
    refreshYearlyEarning()
  }, [logs, year])

  const refreshYearlyEarning = async () => {
    setFetchingYearly(true)
    const { data: raw } = await fetchYearlyEarnings(year)
    dispatch({ type: 'set_reports', payload: raw.data })
    setFetchingYearly(false)
  }

  const calculateStats = () => {
    const workingMonths = reports.filter((x) => x.earnings > 0)
    const paidMonths = workingMonths.filter((x) => x.is_paid)
    return {
      totalEarning: workingMonths.reduce((x, y) => x + y.earnings - 2900, 0),
      totalEarningPaid: paidMonths.reduce((x, y) => x + y.earnings - 2900, 0),
      totalWorkHours: reports.reduce((x, y) => x + y.work_hours, 0),
      workingMonths: workingMonths.length || 1,
      paidMonths: paidMonths.length || 1,
    }
  }

  return (
    <div className="grid grid-dense grid-cols-3 grid-rows-1 gap-4 w-full h-full">
      <FullStats stats={calculateStats()} />
      <QuicklogSection {...{ currentMonthData, tab, setTab }} />
      <ReportCard
        {...{
          isFetching: isFetchingYearly,
          year,
          setYear,
          refreshYearlyEarning,
        }}
      />
      {tab ? <OfferCard /> : <LogsSection />}
    </div>
  )
}
