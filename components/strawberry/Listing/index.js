import React from 'react'

import ActionButtons from './ActionButtons'
import OfferTable from './ListingTable'

export default function OfferCard({ isLoading }) {
  return (
    <div className="col-span-full">
      <div className="card bg-base-100 flex-1">
        {isLoading ? (
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
