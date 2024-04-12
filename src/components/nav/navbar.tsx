import React from 'react'
import Logo from '@/components/util/logo'
import { ProfileDropdownMenu } from './profile-dropdown-menu'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] flex items-center'>
      <Logo />
      <div className='ml-auto flex gap-2'>
        <Button variant="secondary" className='h-[var(--h-button)] px-6 rounded-full'>Donate</Button>
        <ProfileDropdownMenu />
      </div>
    </div>
  )
}

export default Navbar;