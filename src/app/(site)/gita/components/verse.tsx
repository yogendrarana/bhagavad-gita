"use client";

import { useEffect, useState } from 'react'
import { useGitaStore } from '@/store/useGitaStore';
import { useLanguageStore } from '@/store/useLanguageStore';

const Verse: React.FC = () => {
    const [verse, setVerse] = useState<string>('');
    const { activeLanguage } = useLanguageStore();
    const { currentGitaVerse, currentGitaChapter } = useGitaStore();

    useEffect(() => {
        const lang = JSON.parse(localStorage.getItem('language') || '');
        setVerse(currentGitaVerse.text[lang?.state?.activeLanguage.name as 'english' | 'nepali' | 'hindi' | 'sanskrit']);
    }, [currentGitaChapter, currentGitaVerse, activeLanguage])

    return (
        <div className='flex flex-col text-2xl font-medium'>
            <div>
                <p className='text-2xl'>Bhagavad Gita</p>
                <p className='flex flex-col text-lg text-gray-400'>
                    {`Chapter ${currentGitaChapter.chapter}, Verse ${currentGitaVerse.verse}`}
                </p>
            </div>
            <div className='p-10'>
                {verse}
            </div>
        </div>
    )
}

export default Verse;