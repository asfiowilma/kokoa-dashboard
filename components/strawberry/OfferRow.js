import React, { useContext } from 'react'

import StatusBadge from './StatusBadge'

export default function OfferRow({ offer }) {
  return (
    <tr>
      <td className="max-w-snippet whitespace-normal">
        Pemrograman Berbasis Platform S1 Reguler
      </td>
      <td className="text-info">27</td>
      <td className="text-primary">69</td>
      <td className="text-success">27</td>
      <td>
        <StatusBadge status={offer} />
      </td>
    </tr>
  )
}
