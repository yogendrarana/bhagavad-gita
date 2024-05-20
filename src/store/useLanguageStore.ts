import { create } from 'zustand';
import { LANGUAGE } from '@/constants';
import { LangType, languages } from '@/config/languages';
import { createJSONStorage, persist } from 'zustand/middleware';
import * as langHelper from '@/helpers/language.helper';

type LanguageStateType = {
    activeLanguage: LangType
}

type LanguageActionType = {
    setActiveLanguage: (lang: LangType) => void;
}

const initialState = {
    activeLanguage: langHelper.getActiveLanguage()
};


export const useLanguageStore = create<LanguageStateType & LanguageActionType>()(
    persist(
        (set, get) => ({
            // states
            ...initialState,

            // actions
            setActiveLanguage: (lang: LangType) => {
                set({ activeLanguage: lang });
                localStorage.setItem("gita_store", JSON.stringify({ state: { activeLanguage: lang }, }));
            }
        }),
        {
            name: 'language',
            storage: createJSONStorage(() => localStorage)
        }
    )
)