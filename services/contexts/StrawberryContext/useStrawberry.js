import React from 'react'
import { StrawberryContext } from './StrawberryProvider'

export function useStrawberry() {
  const context = React.useContext(StrawberryContext)
  if (context === undefined) {
    throw new Error('useStrawberry must be used within a StrawberryProvider')
  }
  return context
}
