import React from 'react'
import { MotionButton } from '../ui/button'
import { Play, SkipBack, SkipForward } from 'lucide-react'

const Controllers = () => {
  return (
    <div className='flex gap-1'>
        <MotionButton variant="secondary" className='h-[var(--h-button)]'>
          <SkipBack size={18} />
        </MotionButton>
        <MotionButton className="p-4" variant="secondary">
          <Play size={18} />
        </MotionButton>
        <MotionButton variant="secondary" className='h-[var(--h-button)]'>
          <SkipForward size={18} />
        </MotionButton>
    </div>
  )
}

export default Controllers