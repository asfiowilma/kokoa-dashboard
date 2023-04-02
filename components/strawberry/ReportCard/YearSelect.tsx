import React from 'react'

export const YearSelect = ({ years, year, setYear }) => {
  return (
    <div className="btn-group mb-4">
      {years.map((yr) => (
        <div
          key={yr}
          className={`btn btn-sm ${
            yr === year ? 'btn-primary' : 'btn-secondary'
          }`}
          onClick={() => setYear(yr)}
        >
          {yr}
        </div>
      ))}
    </div>
  )
}
