import React, { useContext, useState } from 'react'
import { FaUser, FaUsers, FaUserCheck } from 'react-icons/fa'

import OfferRow from './OfferRow'

export default function OfferTable({ activities }) {
  const offers = ['melamar', 'direkomendasikan', 'diterima', 'melamar']

  return (
    <div className="overflow-y-auto max-h-60 scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-yellow-600 hover:scrollbar-track-radius-full pr-1.5">
      <table className="table table-compact w-full text-center relative">
        <thead className="sticky top-0 z-20">
          <tr>
            <th>Course</th>
            <th className="text-info">
              <FaUser className="w-4 h-4 mx-auto" />
            </th>
            <th className="text-primary">
              <FaUsers className="w-4 h-4 mx-auto" />
            </th>
            <th className="text-success">
              <FaUserCheck className="w-4 h-4 mx-auto" />
            </th>
            <th>Status</th>
          </tr>
        </thead>
        {offers.length != 0 && (
          <tbody>
            {offers.map((offer, _) => (
              <OfferRow key={_} offer={offer} />
            ))}
          </tbody>
        )}
      </table>
      {offers.length == 0 && (
        <div className="w-full pt-6 flex justify-center">
          <img
            src={process.env.BACKEND_URL + '/empty-inbox.svg'}
            alt="empty"
            className={isOverview ? 'h-48' : 'h-60'}
          />
        </div>
      )}
    </div>
  )
}
