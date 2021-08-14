import React from 'react'
import { SkelefireProvider } from './SkelefireContext'

export default function KokoaProvider({ children }) {
    return <SkelefireProvider>{children}</SkelefireProvider>
}
