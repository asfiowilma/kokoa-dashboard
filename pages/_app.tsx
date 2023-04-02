import 'styles/global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { AppProps } from 'next/app'

// Create a client
const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
