"use client"

import { ReactNode, useState } from "react"
import { httpBatchLink } from "@trpc/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { trpc } from "./client"

const url = "http://localhost:3000/api/trpc"

export default function Provider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 1000 * 60 * 5
            }
        }

    }));
    const [trpcClient] = useState(() => {
        return trpc.createClient({
            // transformer: superjson,
            links: [
                httpBatchLink({ url })
            ]
        })
    })

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}