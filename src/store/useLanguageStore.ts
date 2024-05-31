import { create } from 'zustand';
import { LangType } from '@/config/languages';
import * as langHelper from '@/helpers/language.helper';
import { createJSONStorage, persist } from 'zustand/middleware';

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
                localStorage.setItem("language_store", JSON.stringify({ state: { activeLanguage: lang }, }));
            }
        }),
        {
            name: 'language_store',
            storage: createJSONStorage(() => localStorage)
        }
    )
)