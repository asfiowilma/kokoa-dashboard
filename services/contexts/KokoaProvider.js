import React from 'react'
import { SkelefireProvider } from './SkelefireContext/SkelefireProvider'
import { StrawberryProvider } from './StrawberryContext/StrawberryProvider'

export default function KokoaProvider({ children }) {
  return (
    <SkelefireProvider>
      <StrawberryProvider>{children}</StrawberryProvider>
    </SkelefireProvider>
  )
}
