import React, { useContext, useState } from 'react'
import { getSkeleFire, getUnreadActivities } from '@api/skelefire'
import { SkelefireContext } from '@context/SkelefireContext'
import { GiFire } from 'react-icons/gi'

export default function ActionButtons() {
  const [isFetching, setFetching] = useState(false)

  const { skelefire, setActivities, countUnreadActivities, markAsRead } =
    useContext(SkelefireContext)

  function refreshSkelefire() {
    setFetching(true)
    getSkeleFire().then(() => {
      getUnreadActivities().then((res) => {
        setActivities(res.data)
        countUnreadActivities()
        setFetching(false)
      })
    })
  }

  function markSelectedAsRead() {
    const moduleIDs = skelefire.activities
      .filter((a) => a.selected)
      .map((a) => a.moduleID)
    markAsRead(moduleIDs)
  }

  function markAllAsRead() {
    const moduleIDs = skelefire.activities.map((activity) => activity.moduleID)
    markAsRead(moduleIDs)
  }

  return (
    <div className="card-title flex justify-between">
      <div className="flex items-center">
        <GiFire className="w-6 h-6 mr-2" /> Skelefire
      </div>
      <div>
        <div className="dropdown dropdown-end dropdown-hover">
          <div tabIndex="0" className="m-1 btn btn-sm btn-ghost">
            Actions
          </div>
          <ul className="shadow menu dropdown-content bg-primary text-primary-content rounded-box w-52 text-base">
            <li>
              <a onClick={markSelectedAsRead}>Mark selected as read</a>
            </li>
            <li>
              <a onClick={markAllAsRead}>Mark all as read</a>
            </li>
          </ul>
        </div>

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
