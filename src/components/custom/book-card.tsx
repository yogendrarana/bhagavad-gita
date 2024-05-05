import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BookType } from '@/data/books-data'

interface BookCardProps {
    book: BookType,
    className?: string
}

const BookCard: React.FC<BookCardProps> = ({ book, className }) => {
    return (
        <Card className={cn('cursor-pointer shadow-sm hover:shadow-md delay-100', className)}>
            <CardHeader>
                <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{book.description}</CardDescription>
            </CardContent>
            <CardFooter className='mt-auto cursor-pointer'>
                <Link href={book.other.href} className='underline'>Start Reading</Link>
            </CardFooter>
        </Card>

    )
}

export default BookCard;