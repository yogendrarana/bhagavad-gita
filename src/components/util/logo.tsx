import React from 'react'
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={"/"}>
            <p className='text-4'>Gita</p>
        </Link>
    )
}

export default Logo;