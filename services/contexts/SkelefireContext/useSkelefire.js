import React from 'react'
import { SkelefireContext } from './SkelefireProvider'

export function useSkelefire() {
  const context = React.useContext(SkelefireContext)
  if (context === undefined) {
    throw new Error('useSkelefire must be used within a SkelefireProvider')
  }
  return context
}
