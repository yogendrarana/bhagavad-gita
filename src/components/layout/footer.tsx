import React from 'react'
import Logo from '../util/logo';
import Link from 'next/link';
import { BOOKS } from '@/data/books-data';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <div className='w-full p-10 border rounded-lg space-y-8 lg:flex lg:gap-10 lg:space-y-0'>
      <div className='w-full flex flex-col gap-2'>
        <Logo />
        <div className='flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:gap-4'>
          {BOOKS.map((book, index) => (
            <div key={index} className='hover:text-gray-500'>
              <Link href={book.other.href}>{book.title}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full space-y-2 lg:w-[500px]'>
        <p className='font-bold'>Join our newsletter</p>
        <div className="w-full flex flex-col gap-2 items-center lg:flex-row">
          <Input type="email" className='w-full' placeholder="enter your email" />
          <Button type="submit" className='w-full lg:w-[150px]'>Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

export default Footer;