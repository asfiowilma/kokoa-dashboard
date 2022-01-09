import { fetchAllListings, scrapeListings } from '@api/strawberry'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import React, { useContext, useState } from 'react'
import { GiBinoculars } from 'react-icons/gi'
import { HiOutlineFilter } from 'react-icons/hi'

export default function ActionButtons() {
  const [isFetching, setFetching] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const { dispatch } = useStrawberry()

  function refreshListings() {
    setFetching(true)
    scrapeListings().then(() => {
      fetchAllListings().then((result) => {
        console.log(result)
        dispatch({ type: 'set_listings', payload: result.data })
        setFetching(false)
      })
    })
  }

  return (
    <div className="card-title flex justify-between">
      <div className="flex items-center">
        <GiBinoculars className="w-6 h-6 mr-2" /> Job Listings
        <a
          href="https://siasisten.cs.ui.ac.id/lowongan/listLowongan/"
          target="_blank"
          className={`btn btn-sm ml-2 btn-secondary`}
        >
          Live Page
        </a>
      </div>
      <div>
        <button
          onClick={refreshListings}
          className={`btn btn-sm btn-ghost ${isFetching && 'loading'}`}
        >
          {isFetching ? 'loading' : 'refresh'}
        </button>
      </div>
    </div>
  )
}
