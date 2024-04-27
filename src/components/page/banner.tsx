"use client";

import React from 'react'

// components
import Verse from '../gita/verse';
import Navbar from '../nav/navbar';
import { MotionButton } from '../ui/button';
import { CustomSelect } from '../custom/custom-select';

// data
import { GITA_DATA } from '@/data/gita-data';

// other
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Controllers from '../util/controllers';

const Banner = () => {
  return (
    <div className='h-full'>
      <Navbar />

      <div className='h-[calc(100vh-2*var(--h-nav))] flex flex-col border rounded-lg'>

        {/* header */}
        <div className='p-4 flex'>
          <div className='ml-auto flex gap-2'>
            <CustomSelect placeholderText="Chapter" />
            <CustomSelect placeholderText="Verse" />
          </div>
        </div>

        {/* main body */}
        <div className='p-10 flex-1 flex justify-center items-center text-center'>
          <Verse text={GITA_DATA[0].verses[0].text.nepali} />
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