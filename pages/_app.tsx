import 'styles/global.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import KokoaProvider from '@context/KokoaProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <KokoaProvider>
      <Head>
        <link rel="icon" type="image/png" href="/kokoa-favicon.png" />
        <title>Kokoa Dashboard</title>
      </Head>
      <Component {...pageProps} />
    </KokoaProvider>
  )
}
