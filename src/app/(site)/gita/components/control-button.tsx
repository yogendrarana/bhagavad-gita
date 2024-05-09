"use client";

import React from 'react'
import { Button } from '@/components/ui/button';

// prop types
interface PropType {
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

const ControllerButton: React.FC<PropType> = ({ variant, className, onClick, children, size }) => {
    return (
        <Button
            size={size}
            variant={variant || "outline"}
            className={className}
            onClick={onClick}
        >{children}</Button>
    )
}

export default ControllerButton