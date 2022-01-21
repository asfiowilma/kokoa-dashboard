import {
  fetchMonthlyEarnings,
  fetchYearlyEarnings,
  scrapeAndFetch,
} from '@api/strawberry'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import React, { useEffect, useState } from 'react'
import { CURRENT_MONTH, CURRENT_YEAR } from 'services/constants'
import OfferCard from './Listing'
import { LogsSection } from './Logs'
import { QuicklogSection } from './Quicklog'
import QuicklogCard from './Quicklog/QuicklogCard'
import { ReportCard } from './ReportCard'
import { FullStats, ThisMonthStats } from './Stats'

export default function index() {
  const [isLoadingListings, setLoadingListings] = useState(true)
  const [isFetchingYearly, setFetchingYearly] = useState(true)
  const [isFetchingMonthly, setFetchingMonthly] = useState(false)

  const [year, setYear] = useState(CURRENT_YEAR)
  const [tab, setTab] = useState(0)
  const [currentMonthData, setCurrentData] = useState({})
  const {
    strawberry: { reports },
    dispatch,
  } = useStrawberry()

  useEffect(async () => {
    const listing = await scrapeAndFetch()
    dispatch({ type: 'set_listings', payload: listing })
    setLoadingListings(false)
  }, [])

  useEffect(async () => {
    const { data: result } = await fetchMonthlyEarnings(
      CURRENT_MONTH,
      CURRENT_YEAR
    )
    setCurrentData(result)
    setFetchingMonthly(false)
    return
  }, [])

  useEffect(async () => {
    setFetchingYearly(true)
    const { data: raw } = await fetchYearlyEarnings(year)
    dispatch({ type: 'set_reports', payload: raw.data })
    setFetchingYearly(false)
  }, [year])

  const calculateStats = () => {
    const workingMonths = reports.filter((x) => x.earnings > 0)
    const paidMonths = workingMonths.filter((x) => x.is_paid)
    const stats = {
      totalEarning: workingMonths.reduce((x, y) => x + y.earnings - 2900, 0),
      totalEarningPaid: paidMonths.reduce((x, y) => x + y.earnings - 2900, 0),
      totalWorkHours: reports.reduce((x, y) => x + y.work_hours, 0),
      workingMonths: workingMonths.length || 1,
      paidMonths: paidMonths.length || 1,
    }
    return stats
  }

  return (
    <div className="grid grid-dense grid-cols-3 grid-rows-1 gap-4 w-full h-full">
      <FullStats stats={calculateStats()} />
      <QuicklogSection
        {...{ currentMonthData, isLoading: isFetchingMonthly, tab, setTab }}
      />
      <ReportCard {...{ isFetching: isFetchingYearly, year, setYear }} />
      {tab ? <OfferCard isLoading={isLoadingListings} /> : <LogsSection />}
    </div>
  )
}
