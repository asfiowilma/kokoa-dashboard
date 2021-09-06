import React from 'react'
import OfferCard from './OfferCard'
import QuicklogCard from './QuicklogCard'

export default function index() {
  return (
    <div className="grid grid-dense grid-cols-3 grid-rows-1 gap-4 w-full h-full">
      <QuicklogCard />
      <div className="card bg-base-100 col-span-2">
        <div className="card-body">ini stats</div>
      </div>
      <OfferCard />
    </div>
  )
}
