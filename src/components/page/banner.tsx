"use client";

import React from 'react'

// components
import Verse from '../gita/verse';
import Navbar from '../nav/navbar';
import Controllers from '../util/controllers';
import SelectVerse from '../select/select-verse';
import SelectChapter from '../select/select-chapter';

const Banner = () => {
  return (
    <div className='h-full'>
      <Navbar />

      <div className='h-[calc(100vh-2*var(--h-nav))] flex flex-col border rounded-lg'>

        {/* header */}
        <div className='p-4 flex'>
          <div className='ml-auto flex gap-2'>
            <SelectChapter />
            <SelectVerse />
          </div>
        </div>

        {/* main body */}
        <div className='p-10 flex flex-1 justify-center items-center text-center'>
          <Verse />
        </div>

        {/* footer */}
        <div className='p-4 flex justify-center items-center'>
          <Controllers />
        </div>
      </div>
    </div>
  )
}

export default Banner;