import { create } from 'zustand';
import { LANGUAGE } from '@/constants';
import { LangType, languages } from '@/config/languages';
import { persist, PersistStorage } from 'zustand/middleware';

type LanguageStateType = {
    activeLanguage: LangType
}

type LanguageActionType = {
    setActiveLanguage: (lang: LangType) => void;
}

const initialState = {
    activeLanguage: languages.find(l => l.name === localStorage.getItem("language") as LANGUAGE) || languages[0]
};


export const useLanguageStore = create<LanguageStateType & LanguageActionType>()(
    persist(
        (set, get) => ({
            // states
            ...initialState,

            // actions
            setActiveLanguage: (lang: LangType) => {
                set({ activeLanguage: lang });
                localStorage.setItem("language", lang.name);
            }
        }),
        {
            name: 'language',
            storage: localStorage as unknown as PersistStorage<LanguageStateType & LanguageActionType>,
        }
    )
)