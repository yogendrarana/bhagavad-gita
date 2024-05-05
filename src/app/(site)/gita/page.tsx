import React from 'react'
import Navbar from '@/components/layout/navbar'
import GitaReader from './components/gita-reader'

const GitaPage = () => {
    return (
        <div className=" h-ful px-[var(--px)] sm:px-[var(--sm-px)] flex flex-col " >
            <div className="h-full px-[var(--px)] ">
                <Navbar />
                <GitaReader />
            </div>
        </div>
    )
}

export default GitaPage;