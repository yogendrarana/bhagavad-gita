import React from 'react'
import Navbar from '@/components/layout/navbar'
import GitaReader from './components/gita-reader'

const GitaPage = () => {
    return (
        <div className="h-full flex flex-col " >
            <div className="h-full flex flex-col pb-[var(--px)] sm:pb-[var(--px-sm)] md:pb-[var(--px-md)] lg:pb-[var(--px-lg)] overflow-hidden ">
                <Navbar />
                <div className='flex-1'>
                    <GitaReader />
                </div>
            </div>
        </div>
    )
}

export default GitaPage;