import React from 'react'
import { numberToRupiah } from 'services/utils/numberToRupiah'

export const ThisMonthStats = ({
  currentMonthData: { work_hours, earnings },
}) => {
  return (
    <div className="stats">
      <div className="stat bg-secondary text-secondary-content">
        <div className="stat-value">{work_hours} hours</div>
        <div className="stat-title">of work done this month</div>
        <div className="stat-desc">{numberToRupiah(earnings)} earned</div>
      </div>
    </div>
  )
}

export const FullStats = ({
  stats: {
    totalEarning,
    totalEarningPaid,
    totalWorkHours,
    workingMonths,
    paidMonths,
  },
}) => {
  return (
    <div className="col-span-3 w-full shadow stats">
      <div className="stat">
        <div className="stat-title">Total Earnings</div>
        <div className="stat-value text-primary mb-1">
          {numberToRupiah(totalEarning)}
        </div>
        <div className="stat-desc">
          {numberToRupiah(totalEarning / workingMonths)} monthly average
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Total Earnings Paid</div>
        <div className="stat-value text-success mb-1">
          {numberToRupiah(totalEarningPaid)}
        </div>
        <div className="stat-desc">
          {numberToRupiah(totalEarningPaid / paidMonths)} monthly average
        </div>
      </div>
      <div className="stat">
        <div className="stat-value">{totalWorkHours} hours</div>
        <div className="stat-title">of Work Done</div>
        <div className="stat-desc text-info">
          {Math.round((totalWorkHours / workingMonths) * 100) / 100} hours per
          Month on average
        </div>
      </div>
    </div>
  )
}
