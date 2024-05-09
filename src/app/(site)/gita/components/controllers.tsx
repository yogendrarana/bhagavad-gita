"use client";

import { FC } from 'react'
import ControllerButton from './control-button'
import { useGitaStore } from '@/store/useGitaStore'
import { ChevronLeft, ChevronRight, PlayIcon } from 'lucide-react'

const Controllers: FC = () => {
  const { nextGitaVerse, prevGitaVerse, prevGitaChapter, nextGitaChapter } = useGitaStore();

  return (
    <div className='flex gap-1'>
      <ControllerButton
        onClick={() => prevGitaChapter()}
        className='h-[var(--h-btn)] w-[125px] sm:h-[var(--h-lg-btn)] rounded-full hidden sm:flex'
      >
        Prev Chapter
      </ControllerButton>

      <ControllerButton
        size="icon"
        onClick={() => prevGitaVerse()}
        className='h-[var(--h-lg-btn)] w-[var(--h-lg-btn)] rounded-full'
      >
        <ChevronLeft size={18} />
      </ControllerButton>

      {/* <ControllerButton
        size="icon"
        className='h-[var(--h-lg-btn)] w-[var(--h-lg-btn)] rounded-full'
      >
        <i className="fa-solid fa-play"></i>
      </ControllerButton> */}

      <ControllerButton
        size="icon"
        onClick={() => nextGitaVerse()}
        className=' h-[var(--h-lg-btn)] w-[var(--h-lg-btn)] rounded-full'
      >
        <ChevronRight size={18} />
      </ControllerButton>

      <ControllerButton
        onClick={() => prevGitaChapter()}
        className='h-[var(--h-btn)] w-[125px] sm:h-[var(--h-lg-btn)] rounded-full hidden sm:flex'
      >
        Next Chapter
      </ControllerButton>
    </div >
  )
}

export default Controllers