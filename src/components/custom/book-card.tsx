import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BookType } from '@/data/books-data'
import { cn } from '@/lib/utils'

interface BookCardProps {
    book: BookType,
    className?: string
}

const BookCard: React.FC<BookCardProps> = ({ book, className }) => {
    return (
        <Card className={cn('p-8 flex flex-col gap-4 cursor-pointer shadow-sm hover:shadow-md delay-100', className)}>
            <CardTitle>{book.title}</CardTitle>
            <CardDescription>{book.description}</CardDescription>
            <Link href={book.other.href} className='mt-auto text-sm text-gray-400 hover:text-black underline'>Start Reading</Link>
        </Card>

    )
}

export default BookCard;