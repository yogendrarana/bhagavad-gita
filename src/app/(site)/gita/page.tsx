import React from 'react'
import Navbar from '@/components/layout/navbar'
import GitaReader from './components/gita-reader'

const GitaPage = () => {
    return (
        <div className="h-ful flex flex-col " >
            <div className="h-full ">
                <Navbar />
                <GitaReader />
            </div>
        </div>
    )
}

export default GitaPage;