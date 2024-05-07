import React from 'react'
import Logo from '../util/logo';
import Link from 'next/link';
import { BOOKS } from '@/data/books-data';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <div className='p-10 flex flex-col gap-4 border rounded-lg'>
      <div className='w-full flex justify-between items-center '>
        <div className='flex flex-col gap-4'>
          <Logo />
          <div className='flex gap-4'>
            {BOOKS.map((book, index) => (
              <div key={index} className='hover:text-gray-500'>
                <Link href={book.other.href}>{book.title}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className='ml-auto space-y-2'>
          <p>Join our newsletter</p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="enter your email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>

      <hr />

      <div className='flex justify-between items-center'>
        <div>@2024, All rights reserved</div>
        <div className='flex gap-4'>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;