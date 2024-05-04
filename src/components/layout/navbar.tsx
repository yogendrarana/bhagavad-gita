import React from 'react'
import { Button } from '../ui/button'
import Logo from '@/components/util/logo'
import UserMenu from '@/components/menu/user-menu'
import LanguageMenu from '@/components/menu/language-menu'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] flex items-center'>
      <Logo />
      <div className='ml-auto flex gap-2'>
        <Button variant="secondary" className='h-[var(--h-button)] w-24 rounded-full'>Donate</Button>
        <LanguageMenu />
        <UserMenu />
      </div>
    </div>
  )
}

export default Navbar;