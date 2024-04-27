import { useEffect, useState } from 'react'
import { languages } from '@/config/languages'

const useLanguage = () => {
    const [activeLanguage, setActiveLanguage] = useState<string>('');

    useEffect(() => {
        const lang = localStorage.getItem('language');
        if (!lang) {
            setActiveLanguage(languages[0].name);
            localStorage.setItem('language', languages[0].name);
        } else {
            setActiveLanguage(lang);
        }
    }, []);

    const changeActiveLanguage = (lang: string) => {
        setActiveLanguage(lang);
        localStorage.setItem('language', lang);
    }

    return {
        activeLanguage,
        setActiveLanguage,
        changeActiveLanguage,
    }
}

export default useLanguage