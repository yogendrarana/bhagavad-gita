import { create } from 'zustand';
import { LANGUAGE } from '@/app/constants';
import { persist } from 'zustand/middleware';

type LanguageStateType = {
    language: LANGUAGE
}

type LanguageActionType = {
    setLanguage: (language: LANGUAGE) => void;
}

const initialState = {
    language: LANGUAGE.ENGLISH
}

export const useLanguageStore = create<LanguageStateType & LanguageActionType>()(
    persist(
        (set, get) => ({
            ...initialState,
            setLanguage: (language: LANGUAGE) => {
                set({ language });
            }
        }),
        {
            name: 'language',
            getStorage: () => localStorage,
        }
    )
)