import React from 'react'
import { SidebarProvider } from './SidebarContext'
import { SkelefireProvider } from './SkelefireContext/SkelefireProvider'
import { StrawberryProvider } from './StrawberryContext/StrawberryProvider'

export default function KokoaProvider({ children }) {
  return (
    <SidebarProvider>
      <SkelefireProvider>
        <StrawberryProvider>{children}</StrawberryProvider>
      </SkelefireProvider>
    </SidebarProvider>
  )
}
