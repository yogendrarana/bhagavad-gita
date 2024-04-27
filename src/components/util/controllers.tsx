import { FC, KeyboardEvent } from 'react'
import { MotionButton } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// prop types
type PropType = {
  next: () => void;
  prev: () => void;
}

const Controllers: FC<PropType> = ({ next, prev }) => {
  return (
    <div className='flex gap-1'>
      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => prev()}>
        <ChevronLeft size={18} />
      </MotionButton>

      <MotionButton variant="secondary" className='h-[var(--h-button)]' onClick={() => next()}>
        <ChevronRight size={18} />
      </MotionButton>
    </div>
  )
}

export default Controllers