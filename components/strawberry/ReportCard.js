import React, { useState } from 'react'
import { BiLineChart } from 'react-icons/bi'

export const ReportCard = () => {
  const [isFetching, setFetching] = useState(false)

  return (
    <div className="card bg-base-100 col-span-2">
      <div className="card-body">
        <div className="card-title flex justify-between">
          <div className="flex items-center">
            <BiLineChart className="w-6 h-6 mr-2" /> Statistics
          </div>
          <button className={`btn btn-sm btn-ghost ${isFetching && 'loading'}`}>
            {isFetching ? 'loading' : 'refresh'}
          </button>
        </div>
      </div>
    </div>
  )
}
