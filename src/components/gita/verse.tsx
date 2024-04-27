import React, { useEffect, useState } from 'react'
import { ChapterType, VerseType } from '@/data/gita-data'

type PropType = {
    currentChapter: ChapterType;
    currentVerse: VerseType;
}

const Verse: React.FC<PropType> = ({ currentChapter, currentVerse }) => {
    const [verse, setVerse] = useState<string>('');

    useEffect(() => {
        const lang = localStorage.getItem('language') || 'english';
        setVerse(currentVerse.text[lang as 'english' | 'nepali' | 'hindi' | 'sanskrit']);
    }, [currentChapter, currentVerse])

    return (
        <div className='flex flex-col gap-4 text-2xl font-medium'>
            <div>
                {`Chapter ${currentChapter.chapter} - Verse ${currentVerse.verse}`}
            </div>
            <div>
                {verse}
            </div>
        </div>
    )
}

export default Verse;