import { FC, KeyboardEvent } from 'react'
import { MotionButton } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// prop types
type PropType = {
  nextVerse: () => void;
  prevVerse: () => void;
  nextChapter: () => void;
  prevChapter: () => void;
}

const Controllers: FC<PropType> = ({ nextVerse, prevVerse, nextChapter, prevChapter }) => {
  return (
    <div className='flex gap-1'>
      <MotionButton variant="secondary" onClick={() => prevChapter()}>
        Prev Chapter
      </MotionButton>

      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => prevVerse()}>
        <ChevronLeft size={18} />
      </MotionButton>

      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => nextVerse()}>
        <ChevronRight size={18} />
      </MotionButton>

      <MotionButton variant="secondary" onClick={() => nextChapter()}>
        Next Chapter
      </MotionButton>
    </div>
  )
}

export default Controllers