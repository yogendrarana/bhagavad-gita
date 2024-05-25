import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Logo from '@/components/util/logo'
import LanguageMenu from '../menu/language-menu'
import UserMenu from '@/components/menu/user-menu'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] flex items-center'>
      <Logo />
      <div className='ml-auto flex items-center gap-2'>
        <div className='flex gap-4 mr-2'>
          <Link href='/' className='hover:font-bold'>home.</Link>
          <Link href='/about' className='hover:font-bold'>about.</Link>
          <Link href='/contact' className='hover:font-bold'>contact.</Link>
        </div>
        <Button variant="secondary" className='h-[var(--h-btn)] sm:h-[var(--h-lg-btn)] w-24 rounded-full'>Donate</Button>
        <LanguageMenu />
        <UserMenu />
      </div>
    </div>
  )
}

export default Navbar;