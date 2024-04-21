import { languages } from '@/config/languages'
import { useEffect, useState } from 'react'

const useActiveLanguage = () => {
    const [activeLanguage, setActiveLanguage] = useState<string>('');

    useEffect(() => {
        const lang = localStorage.getItem('language');
        if (!lang) {
            setActiveLanguage(languages[0].code);
            localStorage.setItem('language', languages[0].code);
        }else {
            setActiveLanguage(lang);
        }
    }, []);

    const changeActiveLanguage = (lang: string) => {
        setActiveLanguage(lang);
        localStorage.setItem('language', lang);
    }

    return {
        activeLanguage,
        changeActiveLanguage,
    }
}

export default useActiveLanguage