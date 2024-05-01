import { FC, KeyboardEvent } from 'react'
import { MotionButton } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// prop types
type PropType = {
  nextVerse: () => void;
  prevVerse: () => void;
}

const Controllers: FC<PropType> = ({ nextVerse, prevVerse }) => {
  return (
    <div className='flex gap-1'>
      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => prevVerse()}>
        <ChevronLeft size={18} />
      </MotionButton>

      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => nextVerse()}>
        <ChevronRight size={18} />
      </MotionButton>
    </div>
  )
}

export default Controllers