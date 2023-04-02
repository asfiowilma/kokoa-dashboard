import 'styles/global.css'

import type { AppProps } from 'next/app'
import KokoaProvider from '@context/KokoaProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <KokoaProvider>
      <Component {...pageProps} />
    </KokoaProvider>
  )
}
