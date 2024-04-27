import { useEffect, useState } from 'react'
import { LangType, languages } from '@/config/languages'

const useLanguage = () => {
    const [activeLanguage, setActiveLanguage] = useState<LangType>();

    useEffect(() => {
        const lang = localStorage.getItem('language');
        if (!lang) {
            setActiveLanguage(languages[0]);
            localStorage.setItem('language', languages[0].name);
        } else {
            setActiveLanguage(languages.find(l => l.name === lang));
        }
    }, []);

    const changeActiveLanguage = (lang: LangType) => {
        setActiveLanguage(lang);
        localStorage.setItem('language', lang.name);
    }

    return {
        activeLanguage,
        setActiveLanguage,
        changeActiveLanguage,
    }
}

export default useLanguage