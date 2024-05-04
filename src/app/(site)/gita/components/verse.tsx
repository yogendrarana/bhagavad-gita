import { useEffect, useState } from 'react'
import { useGitaStore } from '@/store/useGitaStore';
import { useLanguageStore } from '@/store/useLanguageStore';

const Verse: React.FC = () => {
    const [verse, setVerse] = useState<string>('');
    const { activeLanguage } = useLanguageStore();
    const { currentGitaVerse, currentGitaChapter } = useGitaStore();

    useEffect(() => {
        const lang = localStorage.getItem('language') || 'english';
        setVerse(currentGitaVerse.text[lang as 'english' | 'nepali' | 'hindi' | 'sanskrit']);
    }, [currentGitaChapter, currentGitaVerse, activeLanguage])

    return (
        <div className='flex flex-col gap-2 text-2xl font-medium'>
            <div className='text-2xl'>Bhagavad Gita</div>
            <div className='flex flex-col text-lg text-gray-400'>
                {`Chapter ${currentGitaChapter.chapter}, Verse ${currentGitaVerse.verse}`}
            </div>
            <div className='mt-10'>
                {verse}
            </div>
        </div>
    )
}

export default Verse;