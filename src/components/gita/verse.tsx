import { useEffect, useState } from 'react'
import { LangType } from '@/config/languages';
import { ChapterType, VerseType } from '@/data/gita-data'

type PropType = {
    currentChapter: ChapterType;
    currentVerse: VerseType;
    activeLanguage?: LangType;
}

const Verse: React.FC<PropType> = ({ currentChapter, currentVerse, activeLanguage }) => {
    const [verse, setVerse] = useState<string>('');

    useEffect(() => {
        const lang = localStorage.getItem('language') || 'english';
        setVerse(currentVerse.text[lang as 'english' | 'nepali' | 'hindi' | 'sanskrit']);
    }, [currentChapter, currentVerse, activeLanguage])

    return (
        <div className='flex flex-col gap-2 text-2xl font-medium'>
            <div className='text-2xl'>Bhagavad Gita</div>
            <div className='flex flex-col text-lg text-gray-400'> 
                {`Chapter ${currentChapter.chapter}, Verse ${currentVerse.verse}`}
            </div>
            <div className='mt-10'>
                {verse}
            </div>
        </div>
    )
}

export default Verse;