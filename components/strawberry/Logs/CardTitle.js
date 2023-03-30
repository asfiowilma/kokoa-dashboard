import { ImBook } from 'react-icons/im'
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import useStrawberryStore from 'services/hooks/useStrawberryStore'
import { scrapeOlderLogs } from '@api/strawberry'

export const CardTitle = ({ search, setSearch, onRefreshLogs }) => {
  const { activeCourse } = useStrawberryStore()
  const [isLoading, setIsLoading] = useState(false)

  const onRefreshOlderLogs = async () => {
    setIsLoading(true)
    await scrapeOlderLogs()
    toast.success('Scraped older logs~')
    setIsLoading(false)
  }

  return (
    <div className="card-title flex justify-between">
      <div className="flex items-center">
        <ImBook className="w-6 h-6 mr-2" /> Logs
        <a
          href={`https://siasisten.cs.ui.ac.id/log/listLogMahasiswa/${activeCourse}/`}
          target="_blank"
          className={`btn btn-sm ml-2 btn-secondary`}
        >
          Live Page
        </a>
      </div>
      <div className="flex">
        <div
          className={`btn btn-ghost ${isLoading ? 'loading' : ''}`}
          onClick={() => onRefreshOlderLogs()}
        >
          {isLoading ? 'scraping..' : 'scrape all'}
        </div>
        <div className="btn btn-ghost" onClick={() => onRefreshLogs()}>
          refresh
        </div>
        <div className="relative w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by desc, category, date"
            className="w-full pr-16 input input-primary input-bordered"
          />
          <button className="absolute top-0 right-0 rounded-l-none btn btn-primary btn-square">
            <BiSearchAlt className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
