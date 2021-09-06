import React from 'react'

import ActionButtons from './ActionButtons'
import OfferTable from './OfferTable'

export default function OfferCard() {
  return (
    <div className="col-span-full">
      <div className="card bg-base-100 flex-1">
        <div className="card-body">
          <ActionButtons />
          <div class="form-control mb-2 flex">
            <input
              type="text"
              placeholder="🔍 Search"
              class="w-full input input-primary input-bordered input-sm"
            />
          </div>
          <OfferTable />
        </div>
      </div>
    </div>
  )
}
