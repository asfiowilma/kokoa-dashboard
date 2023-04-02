import { LogsRow } from './LogsRow'
import React from 'react'

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
      <tbody>
        {logs?.map((log) => (
          <LogsRow key={log.start_time} {...log} />
        ))}
        {logs?.length == 0 && 'No logs found.'}
      </tbody>
    </table>
  )
}
