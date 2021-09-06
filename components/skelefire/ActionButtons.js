import React, { useContext, useState } from 'react'
import { getSkeleFire, getUnreadActivities } from '@api/skelefire'
import { SkelefireContext } from '@context/SkelefireContext'
import { GiFire } from 'react-icons/gi'
import Push from 'push.js'

export default function ActionButtons() {
  const [isFetching, setFetching] = useState(false)

  const { skelefire, setActivities, countUnreadActivities, markAsRead } =
    useContext(SkelefireContext)

  async function refreshSkelefire() {
    setFetching(true)
    await getSkeleFire()
    var unreadActivities = await getUnreadActivities()
    setActivities(unreadActivities.data)
    countUnreadActivities()
    setFetching(false)
    if (unreadActivities.data.length > 0)
      Push.create('Skelefire', {
        body: 'New updates found!',
        icon: process.env.BACKEND_URL + '/kokoa-skelefire.png',
        onClick: function () {
          window.focus()
          this.close()
        },
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
