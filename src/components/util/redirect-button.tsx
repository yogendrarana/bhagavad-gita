"use client";

import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'


// prop types
interface PropType {
    href: string;
    label: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

const RedirectButton: React.FC<PropType> = ({ variant, href, label, className }) => {
    const router = useRouter()
    return (
        <Button
            variant={variant}
            className={className}
            onClick={() => router.push(href)}
        >{label}</Button>
    )
}

export default RedirectButton