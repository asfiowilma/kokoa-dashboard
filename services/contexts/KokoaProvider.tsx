import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React from 'react'
import { StrawberryProvider } from './StrawberryContext/StrawberryProvider'

const queryClient = new QueryClient()

export default function KokoaProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <StrawberryProvider>{children}</StrawberryProvider>
    </QueryClientProvider>
  )
}
