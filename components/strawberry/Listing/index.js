import { scrapeAndFetch } from '@api/strawberry'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import React, { useEffect, useState } from 'react'

import ActionButtons from './ActionButtons'
import OfferTable from './ListingTable'

export default function OfferCard() {
  const [isLoadingListings, setLoadingListings] = useState(true)
  const { dispatch } = useStrawberry()

  useEffect(async () => {
    const listing = await scrapeAndFetch()
    dispatch({ type: 'set_listings', payload: listing })
    setLoadingListings(false)
  }, [])

  return (
    <div className="col-span-full">
      <div className="card bg-base-100 flex-1">
        {isLoadingListings ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={process.env.BACKEND_URL + '/kokoa-logo.png'}
              alt="loader"
              className="animate-pulse"
            />
          </div>
        ) : (
          <div className="card-body">
            <ActionButtons />
            <OfferTable />
          </div>
        )}
      </div>
    </div>
  )
}
