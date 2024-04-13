import React from 'react'

// components
import Navbar from '../nav/navbar';
import { CustomSelect } from '../custom/custom-select';

const Banner = () => {
  return (
    <div className='h-full'>
      <Navbar />

      <div className='h-[calc(100vh-2*var(--h-nav))] flex flex-col border rounded-lg'>
        <div className='p-4 flex'>
          <div className='ml-auto flex gap-2'>
            <CustomSelect placeholderText="Chapter" />
            <CustomSelect placeholderText="Verse" />
          </div>
        </div>
        <div className='flex-1'></div>
        <div className='h-16'></div>
      </div>
    </div>
  )
}

export default Banner;