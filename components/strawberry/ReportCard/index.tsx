import React, { useState } from 'react'
import { BiLineChart } from 'react-icons/bi'
import { CURRENT_YEAR } from 'services/constants'
import { YearSelect } from './YearSelect'
import { Detailed } from './Detailed'
import { LineChart } from './LineChart'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'

export const ReportCard = ({
  isFetching,
  year,
  setYear,
  refreshYearlyEarning,
}) => {
  const {
    strawberry: { reports },
  } = useStrawberry()
  const data = reports.map((x) => x.earnings)
  const [tab, setTab] = useState('chart')

  const years = Array.from({ length: CURRENT_YEAR - 2019 }).map(
    (_, i) => 2020 + i
  )

  return (
    <div className="card bg-base-100 col-span-2 overflow-visible">
      <div className="card-body">
        <div className="card-title flex justify-between items-start">
          <div className="flex items-center">
            <BiLineChart className="w-6 h-6 mr-2" /> Statistics
          </div>
          <div className="btn-group">
            <div
              className={`btn ${tab === 'chart' && 'btn-primary'}`}
              onClick={() => setTab('chart')}
            >
              Summary
            </div>
            <div
              className={`btn ${tab === 'detailed' && 'btn-primary'}`}
              onClick={() => setTab('detailed')}
            >
              Detailed
            </div>
          </div>
          <button
            onClick={() => refreshYearlyEarning()}
            className={`btn btn-sm btn-ghost ${isFetching && 'loading'}`}
          >
            {isFetching ? 'loading' : 'refresh'}
          </button>
        </div>

        <YearSelect {...{ years, year, setYear }} />
        {tab === 'chart' ? <LineChart {...{ year, data }} /> : <Detailed />}
      </div>
    </div>
  )
}
