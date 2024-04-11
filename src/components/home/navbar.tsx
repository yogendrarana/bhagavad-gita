import React from 'react'
import Logo from '@/components/util/logo'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] px-[var(--px)] flex items-center'>
        <Logo />
    </div>
  )
}

export default Navbar