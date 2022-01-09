import { fetchAllListings } from '@api/strawberry'
import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import React, { useEffect, useState } from 'react'
import OfferCard from './OfferCard'
import QuicklogCard from './QuicklogCard'
import { ReportCard } from './ReportCard'

export default function index() {
  const [isLoading, setLoading] = useState(true)
  const { dispatch } = useStrawberry()

  useEffect(() => {
    fetchAllListings().then((result) => {
      console.log(result)
      dispatch({ type: 'set_listings', payload: result.data })
      setLoading(false)
    })
  }, [])

  return (
    <div className="grid grid-dense grid-cols-3 grid-rows-1 gap-4 w-full h-full">
      <QuicklogCard />
      <ReportCard />
      <OfferCard isLoading={isLoading} />
    </div>
  )
}
