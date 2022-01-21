import { useStrawberry } from '@context/StrawberryContext/useStrawberry'
import React from 'react'

import { LogsRow } from './LogsRow'

export const LogsTable = ({ logs }) => {
  return (
    <table className="table">
      <thead>
        <tr className="text-center">
          <th>Date</th>
          <th>Work Hour</th>
          <th>Category</th>
          <th>Description</th>
          <th>Earning</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{logs && logs.map((log) => <LogsRow {...log} />)}</tbody>
    </table>
  )
}
