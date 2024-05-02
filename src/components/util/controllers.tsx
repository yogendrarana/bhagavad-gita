import { FC, KeyboardEvent } from 'react'
import { MotionButton } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useGitaStore } from '@/state/useGitaStore'

const Controllers: FC = () => {
  const { nextGitaVerse, prevGitaVerse, prevGitaChapter, nextGitaChapter } = useGitaStore()
  return (
    <div className='flex gap-1'>
      <MotionButton variant="secondary" onClick={() => prevGitaChapter()}>
        Prev Chapter
      </MotionButton>

      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => prevGitaVerse()}>
        <ChevronLeft size={18} />
      </MotionButton>

      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => nextGitaVerse()}>
        <ChevronRight size={18} />
      </MotionButton>

      <MotionButton variant="secondary" onClick={() => nextGitaChapter()}>
        Next Chapter
      </MotionButton>
    </div>
  )
}

export default Controllers