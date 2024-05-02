import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";
import { ChapterType, GITA_DATA, VerseType } from '@/data/gita-data';

// gita state type
type GitaStateType = {
    currentGitaChapter: ChapterType;
    currentGitaChapterNumber: number;
    currentGitaVerse: VerseType;
    currentGitaVerseNumber: number;
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
    currentGitaChapterNumber: JSON.parse(localStorage.getItem("current_gita_chapter_number") as string) || 1,
    currentGitaVerseNumber: JSON.parse(localStorage.getItem("current_gita_verse_number") as string) || 1,
    currentGitaChapter: GITA_DATA.find((chap) =>
        chap.chapter === (JSON.parse(localStorage.getItem("current_gita_chapter") as string) || 1)) || GITA_DATA[0],
    currentGitaVerse: (GITA_DATA.find((chap) => chap.chapter === (JSON.parse(localStorage.getItem("current_gita_chapter") as string) || 1))?.verses || GITA_DATA[0].verses)
        .find((verse) => verse.verse === (JSON.parse(localStorage.getItem("current_gita_verse") as string) || 1)) || GITA_DATA[0].verses[0],
}

export const useGitaStore = create<GitaStateType & GitaActionType>()(
    persist(
        (set, get) => ({
            ...initialState,
            nextVerse: () => {
                const { currentGitaChapter, currentGitaVerse } = get();

                // if the verse is last verse of the last chapter set the chapter to first chapter
                if (currentGitaChapter.chapter === GITA_DATA.length && currentGitaVerse.verse === currentGitaChapter.verses.length) {
                    set({ currentGitaChapter: GITA_DATA[0], currentGitaVerse: GITA_DATA[0].verses[0] })
                    localStorage.setItem('current_gita_chapter', JSON.stringify(1))
                    localStorage.setItem('current_gita_verse', JSON.stringify(1))
                }

                // if the verse is last verse of the chapter set the chapter to next chapter
                if (currentGitaVerse.verse === currentGitaChapter.verses.length) {
                    const nextChapter = GITA_DATA.find(chap => chap.chapter === currentGitaChapter.chapter + 1)
                    if (nextChapter) {
                        set({ currentGitaChapter: nextChapter, currentGitaVerse: nextChapter.verses[0] })
                        localStorage.setItem('current_gita_chapter', JSON.stringify(nextChapter.chapter))
                        localStorage.setItem('current_gita_verse', JSON.stringify(1))
                    }
                }

                // set the verse to next verse
                const nextVerse = currentGitaChapter.verses.find(verse => verse.verse === currentGitaVerse.verse + 1)
                if (nextVerse) {
                    set({ currentGitaVerse: nextVerse })
                    localStorage.setItem('current_gita_verse', JSON.stringify(nextVerse.verse))
                }
            },
            prevVerse: () => {
                const { currentGitaChapter, currentGitaVerse } = get();

                // if the verse is first verse of the first chapter, set last chapter last verse
                if (currentGitaChapter.chapter === 1 && currentGitaVerse.verse === 1) {
                    const lastChapter = GITA_DATA[GITA_DATA.length - 1]
                    set({ currentGitaChapter: lastChapter, currentGitaVerse: lastChapter.verses[lastChapter.verses.length - 1] })
                    localStorage.setItem('current_gita_chapter', JSON.stringify(lastChapter.chapter))
                    localStorage.setItem('current_gita_verse', JSON.stringify(lastChapter.verses[lastChapter.verses.length - 1].verse))
                }

                // if the verse is first verse of the chapter set the chapter to previous chapter, last verse
                if (currentGitaChapter.chapter > 1 && currentGitaVerse.verse === 1) {
                    const prevChapter = GITA_DATA.find(chap => chap.chapter === currentGitaChapter.chapter - 1)
                    if (prevChapter) {
                        set({ currentGitaChapter: prevChapter, currentGitaVerse: prevChapter.verses[prevChapter.verses.length - 1] })
                        localStorage.setItem('current_gita_chapter', JSON.stringify(prevChapter.chapter))
                        localStorage.setItem('current_gita_verse', JSON.stringify(prevChapter.verses[prevChapter.verses.length - 1].verse))
                    }
                }

                // set the verse to previous verse
                const prevVerse = currentGitaChapter.verses.find(verse => verse.verse === currentGitaVerse.verse - 1)
                if (prevVerse) {
                    set({ currentGitaVerse: prevVerse })
                    localStorage.setItem('current_gita_verse', JSON.stringify(prevVerse.verse))
                }
            },
            nextChapter: () => {
                const { currentGitaChapter } = get();

                // if the chapter is last chapter set the current chapter to first chapter and verse to first verse
                if (currentGitaChapter.chapter === GITA_DATA.length) {

                    set({ currentGitaChapter: GITA_DATA[0], currentGitaVerse: GITA_DATA[0].verses[0] })
                    localStorage.setItem('current_gita_chapter', JSON.stringify(1))
                    localStorage.setItem('current_gita_verse', JSON.stringify(1))
                }

                // else set chapter to next
                const nextChapter = GITA_DATA.find(ch => ch.chapter === currentGitaChapter.chapter + 1);
                if (nextChapter) {
                    set({ currentGitaChapter: nextChapter, currentGitaVerse: nextChapter.verses[0] })
                    localStorage.setItem('current_gita_chapter', JSON.stringify(nextChapter.chapter))
                    localStorage.setItem('current_gita_verse', JSON.stringify(1))
                }
            },
            prevChapter: () => {
                const { currentGitaChapter } = get();
                // if the chapter is first chapter set the current chapter to last chapter and verse to last verse
                if (currentGitaChapter.chapter === 1) {
                    const lastChapter = GITA_DATA[GITA_DATA.length - 1]
                    set({ currentGitaChapter: lastChapter, currentGitaVerse: lastChapter.verses[0] })
                    localStorage.setItem('current_gita_chapter', JSON.stringify(lastChapter.chapter))
                    localStorage.setItem('current_gita_verse', JSON.stringify(1))
                }

                // else set chapter to previous
                const prevChapter = GITA_DATA.find(ch => ch.chapter === currentGitaChapter.chapter - 1);
                if (prevChapter) {
                    set({ currentGitaChapter: prevChapter, currentGitaVerse: prevChapter.verses[0] })
                    localStorage.setItem('current_gita_chapter', JSON.stringify(prevChapter.chapter))
                    localStorage.setItem('current_gita_verse', JSON.stringify(1))
                }
            },
            selectChapter: (chapter: number) => {
                const selectedChapter = GITA_DATA.find(ch => ch.chapter === chapter);
                if (selectedChapter) {
                    set({ currentGitaChapter: selectedChapter, currentGitaVerse: selectedChapter.verses[0] })
                    localStorage.setItem('current_gita_chapter', JSON.stringify(selectedChapter.chapter))
                    localStorage.setItem('current_gita_verse', JSON.stringify(1))
                }
            },
            selectVerse: (verse: number) => {
                const { currentGitaChapter } = get();
                const selectedVerse = currentGitaChapter.verses.find(v => v.verse === verse);
                if (selectedVerse) {
                    set({ currentGitaVerse: selectedVerse })
                    localStorage.setItem('current_gita_verse', JSON.stringify(selectedVerse.verse))
                }
            },
        }),
        {
            name: "current_gita",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                currentGitaChapterNumber: state.currentGitaChapterNumber,
                currentGitaVerseNumber: state.currentGitaVerseNumber,
            }),
        }
    )
);