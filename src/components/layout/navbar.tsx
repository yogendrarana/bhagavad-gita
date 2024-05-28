import React from 'react'
import { Button } from '../ui/button'
import Logo from '@/components/util/logo'
import LanguageMenu from '../menu/language-menu'
import UserMenu from '@/components/menu/user-menu'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] flex items-center'>
      <Logo />
      <div className='ml-auto flex items-center gap-2'>
        <Button variant="secondary" className='h-[var(--h-btn)] sm:h-[var(--h-lg-btn)] w-24 rounded-full'>Donate</Button>
        <LanguageMenu />
        <UserMenu />
      </div>
    </div>
  )
}

export default Navbar;