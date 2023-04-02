import React from 'react'
import { SkelefireProvider } from './SkelefireContext/SkelefireProvider'
import { StrawberryProvider } from './StrawberryContext/StrawberryProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function KokoaProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SkelefireProvider>
        <StrawberryProvider>{children}</StrawberryProvider>
      </SkelefireProvider>
    </QueryClientProvider>
  )
}
