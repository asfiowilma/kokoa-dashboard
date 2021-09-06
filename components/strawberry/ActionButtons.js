import React, { useContext, useState } from 'react'
import { SkelefireContext } from '@context/SkelefireContext'
import { GiBinoculars } from 'react-icons/gi'
import { HiOutlineFilter } from 'react-icons/hi'

export default function ActionButtons() {
  const [isFetching, setFetching] = useState(false)

  const { skelefire, setActivities, countUnreadActivities, markAsRead } =
    useContext(SkelefireContext)

  function refreshSkelefire() {
    // setFetching(true)
    // getSkeleFire().then(() => {
    //   getUnreadActivities().then((res) => {
    //     setActivities(res.data)
    //     countUnreadActivities()
    //     setFetching(false)
    //   })
    // })
  }

  function markAllAsRead() {
    // const moduleIDs = skelefire.activities.map((activity) => activity.moduleID)
    // markAsRead(moduleIDs)
  }

  return (
    <div className="card-title flex justify-between">
      <div className="flex items-center">
        <GiBinoculars className="w-6 h-6 mr-2" /> Job Offers
      </div>
      <div>
        <button className="btn btn-sm btn-ghost ">
          <HiOutlineFilter className="h-3 w-3 mr-2" /> Watching
        </button>
        <button
          onClick={markAllAsRead}
          className={`btn btn-sm btn-ghost ${isFetching && 'loading'}`}
        >
          {isFetching ? 'loading' : 'read all'}
        </button>

        <button
          onClick={refreshSkelefire}
          className={`btn btn-sm btn-ghost ${isFetching && 'loading'}`}
        >
          {isFetching ? 'loading' : 'refresh'}
        </button>
      </div>
    </div>
  )
}
