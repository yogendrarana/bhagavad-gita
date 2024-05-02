import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";
import { ChapterType, GITA_DATA, VerseType } from '@/data/gita-data';

// gita state type
type GitaStateType = {
    currentChapter: ChapterType;
    currentChapterNumber: number;
    currentVerse: VerseType;
    currentVerseNumber: number;
}

// gita action type
type GitaActionType = {
    nextVerse: () => void;
    prevVerse: () => void;
    nextChapter: () => void;
    prevChapter: () => void;
    selectVerse: (verse: number) => void;
    selectChapter: (chapter: number) => void;
}


// initial state
const initialState = {
    currentChapterNumber: 1,
    currentChapter: GITA_DATA[0],
    currentVerseNumber: 1,
    currentVerse: GITA_DATA[0].verses[0],
}

export const useGitaStore = create<GitaStateType & GitaActionType>()(
    persist(
        (set, get) => ({
            ...initialState,
            nextVerse: () => {},
            prevVerse: () => { },
            nextChapter: () => { },
            prevChapter: () => { },
            selectChapter: (chapter: number) => { },
            selectVerse: (verse: number) => { },
        }),
        {
            name: "current_gita",
            storage: createJSONStorage(() => localStorage)
        }
    )
);