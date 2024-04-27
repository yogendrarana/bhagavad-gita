"use client";

import React from 'react'

// components
import Verse from '../gita/verse';
import Navbar from '../nav/navbar';
import Controllers from '../util/controllers';
import CustomSelect from '../custom/custom-select';

// other
import useGita from '@/hooks/useGita';
import useLanguage from '@/hooks/useLanguage';

const Banner = () => {
  const { activeLanguage } = useLanguage();
  const { currentChapter, currentVerse, next, prev } = useGita();

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
          <Verse currentChapter={currentChapter} currentVerse={currentVerse} activeLanguage={activeLanguage} />
        </div>

        {/* footer */}
        <div className='p-4 flex justify-center items-center'>
          <Controllers next={next} prev={prev} />
        </div>
      </div>
    </div>
  )
}

export default Banner;