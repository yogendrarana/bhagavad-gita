"use client";

import { useEffect, useState } from 'react'
import { useGitaStore } from '@/store/useGitaStore';
import { useLanguageStore } from '@/store/useLanguageStore';

const Verse: React.FC = () => {
    const [verse, setVerse] = useState<string>('');
    const { activeLanguage } = useLanguageStore();
    const { currentGitaVerse, currentGitaChapter } = useGitaStore();

    useEffect(() => {
        try {
            const storedLang = localStorage.getItem('language_store');
            if (storedLang) {
                const lang = JSON.parse(storedLang);
                if (lang && lang.state && lang.state.activeLanguage && lang.state.activeLanguage.name) {
                    setVerse(currentGitaVerse.text[lang.state.activeLanguage.name as 'english' | 'nepali' | 'hindi' | 'sanskrit']);
                    return;
                }
            }
        } catch (error) {
            console.error('Error parsing language from localStorage:', error);
        }
        setVerse(currentGitaVerse.text['english']);
    }, [currentGitaChapter, currentGitaVerse, activeLanguage]);

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