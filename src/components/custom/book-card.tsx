import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { BookType } from '@/data/books-data'
import { Card, CardDescription, CardTitle, } from "@/components/ui/card"
import RedirectButton from '../util/redirect-button'

interface BookCardProps {
    book: BookType,
    className?: string
}

const BookCard: React.FC<BookCardProps> = ({ book, className }) => {

    return (
        <Card className={cn('p-8 flex flex-col gap-4 cursor-pointer shadow-sm hover:shadow-md delay-100', className)}>
            <CardTitle>{book.title}</CardTitle>
            <CardDescription>{book.description}</CardDescription>
            <div className='mt-auto flex gap-2 items-center'>
                {book.other.available && <RedirectButton
                    variant="outline"
                    href={book.other.href}
                    label="Start Reading"
                    className='mt-auto text-sm'
                />}

                {!book.other.available &&
                    <Button variant="secondary">{book.other.available ? "Available" : "Not Available"}</Button>
                }
            </div>
        </Card>

    )
}

export default BookCard;