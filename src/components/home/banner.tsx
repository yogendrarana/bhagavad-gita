"use client";

import React from 'react'

// components
import Verse from '../gita/verse';
import Navbar from '../nav/navbar';
import { MotionButton } from '../ui/button';
import { CustomSelect } from '../custom/custom-select';

// data
import { GITA_DATA } from '@/data/gita-data';
import { languages } from '@/config/languages';

// hooks
import useActiveLanguage from '@/hooks/useActiveLanguage';

// other
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const { activeLanguage, changeActiveLanguage } = useActiveLanguage();

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
        <div className='p-4 flex justify-between items-center'>
          <div className='flex gap-4'>
            {
              languages.map((lang, index) => (
                <div
                  key={index}
                  className={cn(
                    'cursor-pointer',
                    activeLanguage === lang.code ? 'border-b border-black' : ''
                  )}
                  onClick={() => changeActiveLanguage(lang.code)}
                >{lang.code}</div>
              ))
            }
          </div>

          <div className='flex gap-2'>
            <MotionButton
              size={"icon"}
              variant={"secondary"}
              whileTap={{ scale: 0.75 }}
            >
              <ChevronLeft size={18} />
            </MotionButton>

            <MotionButton
              size={"icon"}
              variant={"secondary"}
              whileTap={{ scale: 0.75 }}
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