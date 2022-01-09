import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import React, { useEffect, useState } from 'react'
import { FaUser, FaUsers, FaUserCheck } from 'react-icons/fa'

import OfferRow from './OfferRow'

export default function OfferTable() {
  const {
    strawberry: { listings },
    dispatch,
  } = useStrawberry()

  const [search, setSearch] = useState('')
  const [filteredListings, setFilteredListing] = useState(listings)

  useEffect(() => {
    if (search !== '')
      setFilteredListing(
        listings.filter((listing) =>
          listing.title.toLowerCase().includes(search)
        )
      )
    else setFilteredListing(listings)
  }, [search, listings])

  return (
    <div>
      <div className="form-control mb-2 flex">
        <input
          type="text"
          placeholder="🔍 Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full input input-primary input-bordered input-sm"
        />
      </div>
      <table className="table w-full text-center relative">
        <thead className="sticky top-0 z-20">
          <tr>
            <th
              className="cursor-pointer hover:text-amber-300"
              onClick={() => dispatch({ type: 'sort_by_course_name' })}
            >
              Course
            </th>
            <th
              onClick={() => dispatch({ type: 'sort_by_needed' })}
              className="text-info cursor-pointer hover:text-amber-300"
            >
              <FaUser className="w-4 h-4 mx-auto" />
            </th>
            <th
              onClick={() => dispatch({ type: 'sort_by_applied' })}
              className="text-primary cursor-pointer hover:text-amber-300"
            >
              <FaUsers className="w-4 h-4 mx-auto" />
            </th>
            <th
              onClick={() => dispatch({ type: 'sort_by_accepted' })}
              className="text-success cursor-pointer hover:text-amber-300"
            >
              <FaUserCheck className="w-4 h-4 mx-auto" />
            </th>
            <th
              onClick={() => dispatch({ type: 'sort_by_status' })}
              className="cursor-pointer hover:text-amber-300"
            >
              Status
            </th>
          </tr>
        </thead>
        {filteredListings.length != 0 && (
          <tbody>
            {filteredListings.map((listing) => (
              <OfferRow key={listing.url} listing={listing} />
            ))}
          </tbody>
        )}
      </table>
      {filteredListings.length == 0 && (
        <div className="w-full pt-6 flex justify-center">
          <img
            src={process.env.BACKEND_URL + '/empty-inbox.svg'}
            alt="empty"
            className="h-60"
          />
        </div>
      )}
    </div>
  )
}
