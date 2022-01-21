import moment from 'moment'
import React from 'react'

export const LogDate = ({ start_time, end_time }) => {
  const badge = () => {
    const day = moment(start_time).format('ddd')
    switch (day) {
      case 'Mon':
        return 'bg-emerald-700'
      case 'Tue':
        return 'bg-teal-700'
      case 'Wed':
        return 'bg-cyan-700'
      case 'Thu':
        return 'bg-sky-700'
      case 'Fri':
        return 'bg-blue-700'
      case 'Sat':
        return 'bg-indigo-700'
      case 'Sun':
        return 'bg-violet-700'
    }
  }

  return (
    <>
      <div className="text-center">
        <span className={`badge mr-2 text-white ${badge()}`}>
          {moment(start_time).format('ddd')}
        </span>
        <span className="text-neutral-content">
          {moment(start_time).format('D MMM YYYY')}{' '}
        </span>
      </div>
      <div className="text-center">
        {moment(start_time).utc().format('HH:mm')} -{' '}
        {moment(end_time).utc().format('HH:mm')}
      </div>
    </>
  )
}
