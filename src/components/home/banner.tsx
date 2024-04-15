"use client";

import React from 'react'

// components
import Navbar from '../nav/navbar';
import { MotionButton } from '../ui/button';
import { CustomSelect } from '../custom/custom-select';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        <div className='h-16 flex justify-center items-center'>
          <div className='flex gap-2'>
            <MotionButton 
              size={"icon"}
              variant={"secondary"} 
              whileTap={{ scale: 0.75 }}
              className='shadow-md'
            >
              <ChevronLeft size={18} />
            </MotionButton>

            <MotionButton 
              size={"icon"}
              variant={"secondary"} 
              whileTap={{ scale: 0.75 }}
              className='shadow-md'
            >
              <ChevronRight size={18} />
            </MotionButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;