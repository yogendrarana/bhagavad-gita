import React from 'react'

// components
import Navbar from '../nav/navbar';

const Banner = () => {
  return (
    <div className='h-full pb-[var(--h-nav)]'>
      <Navbar />

      <div className='h-[calc(100vh-2*var(--h-nav))] border-2 rounded-lg grid place-items-center'>
        <div className='w-1/2 text-center'>
          asf
        </div>
      </div>
    </div>
  )
}

export default Banner;