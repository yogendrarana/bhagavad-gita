"use client";

import React, { useEffect } from 'react'

// components
import Navbar from '../nav/navbar';
import { MotionButton } from '../ui/button';
import { CustomSelect } from '../custom/custom-select';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// data
import { languages, LangType } from '@/config/languages';
import useActiveLanguage from '@/hooks/useActiveLanguage';
import { cn } from '@/lib/utils';

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
        <div className='flex-1'></div>

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