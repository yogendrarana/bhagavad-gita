import React from 'react'
import { Button } from '../ui/button'
import Logo from '@/components/util/logo'
import { ProfileDropdownMenu } from './nav-dropdown-menu'
import { SelectLanguage } from '../select/select-language'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] flex items-center'>
      <Logo />
      <div className='ml-auto flex gap-2'>
        <Button variant="secondary" className='h-[var(--h-button)] w-24 rounded-full'>Donate</Button>
        <SelectLanguage />
        <ProfileDropdownMenu />
      </div>
    </div>
  )
}

export default Navbar;