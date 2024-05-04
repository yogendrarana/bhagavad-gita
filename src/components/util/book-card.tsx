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

interface BookCardProps {
    book: BookType
}


const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <Card className='cursor-pointer shadow-sm hover:shadow-md delay-100'>
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