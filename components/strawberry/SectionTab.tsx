import React from 'react'

interface SectionTabProps {
  tab: number
  setTab: (to: number) => void
}

export const SectionTab = ({ tab, setTab }: SectionTabProps) => {
  return (
    <div className="flex-1 flex items-end">
      <div className="btn-group w-full">
        <div
          className={`flex-1 btn ${!tab ? 'btn-primary' : 'bg-base-100'}`}
          onClick={() => setTab(0)}
        >
          Logs
        </div>
        <div
          className={`flex-1 btn ${tab ? 'btn-primary' : 'bg-base-100'}`}
          onClick={() => setTab(1)}
        >
          Job Listings
        </div>
      </div>
    </div>
  )
}
