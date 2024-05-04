"use client";

import React from 'react'

// components
import Verse from './verse';
import Controllers from './controllers';
import SelectVerse from './select-verse';
import SelectChapter from './select-chapter';

const GitaReader = () => {
  return (
    <div className='h-full'>
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

export default GitaReader;