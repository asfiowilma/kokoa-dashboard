import React from 'react'

export default function StatusBadge({ status }) {
  const getClasses = () => {
    switch (status) {
      case 'direkomendasikan':
        return 'badge-info'
      case 'diterima':
        return 'badge-success'
      default:
        return ''
    }
  }
  return <div className={`badge ${getClasses()}`}>{status}</div>
}
