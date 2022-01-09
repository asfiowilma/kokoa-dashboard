import React, { useContext } from 'react'

import StatusBadge from './StatusBadge'

export default function OfferRow({ listing }) {
  return (
    <tr>
      <td className="whitespace-normal text-left">{listing.title}</td>
      <td className="text-info">{listing.needed}</td>
      <td className="text-primary">{listing.applied}</td>
      <td className="text-success">{listing.accepted}</td>
      <td>
        {listing.status !== '-------' && (
          <StatusBadge status={listing.status} />
        )}
      </td>
    </tr>
  )
}
