import React from 'react'

// components
import Verse from './verse';
import Controllers from './controllers';
import SelectVerse from './select-verse';
import SelectChapter from './select-chapter';
import LanguageMenu from '@/components/menu/language-menu';

const GitaReader = () => {
  return (
    <div className='h-full p-4 flex flex-col border rounded-lg'>
      {/* header */}
      <div className='w-full ml-auto flex justify-end gap-2'>
        <SelectChapter />
        <SelectVerse />
        <LanguageMenu />
      </div>

      {/* verse */}
      <div className='flex flex-1 justify-center items-center text-center'>
        <Verse />
      </div>

      {/* footer */}
      <div className='flex justify-center items-center'>
        <Controllers />
      </div>
    </div>
  )
}

export default GitaReader;