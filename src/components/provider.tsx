'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'


const Provider = ({ children }: { children: ReactNode }) => {
    const [query] = useState(() => new QueryClient())
    return (
        <>
            <QueryClientProvider client={query}>
                {children}
            </QueryClientProvider>
        </>
    )
}

export default Provider