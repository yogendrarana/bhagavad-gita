import React from 'react'
import Navbar from '@/components/layout/navbar'
import GitaReader from './components/gita-reader'

const GitaPage = () => {
    return (
        <div className="h-full flex flex-col gap-4">
            <div className="h-full px-[var(--px)] ">
                <Navbar />
                <GitaReader />
            </div>
        </div>
    )
}

export default GitaPage;