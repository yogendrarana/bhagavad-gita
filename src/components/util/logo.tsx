import React from 'react'
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={"/"}>
            <p className='text-xl font-bold'>Sanatan</p>
        </Link>
    )
}

export default Logo;