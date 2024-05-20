import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";
import { ChapterType, GITA_DATA, VerseType } from '@/data/gita-data';
import * as gitaHelper from '@/helpers/gita.helper';

// gita state type
type GitaStateType = {
    currentGitaChapter: ChapterType;
    currentGitaChapterNumber: number;
    currentGitaVerse: VerseType;
    currentGitaVerseNumber: number;
}

// gita action type
type GitaActionType = {
    nextGitaVerse: () => void;
    prevGitaVerse: () => void;
    nextGitaChapter: () => void;
    prevGitaChapter: () => void;
    selectGitaVerse: (verse: number) => void;
    selectGitaChapter: (chapter: number) => void;
}

// initial state
const initialState: GitaStateType = {
    currentGitaChapterNumber: gitaHelper.getCurrentGitaChapterNumber(),
    currentGitaVerseNumber: gitaHelper.getCurrentGitaVerseNumber(),
    currentGitaChapter: gitaHelper.getCurrentGitaChapter(),
    currentGitaVerse: gitaHelper.getCurrentGitaVerse()
};

export const useGitaStore = create<GitaStateType & GitaActionType>()(
    persist(
        (set, get) => ({

            // gita states
            ...initialState,

            // gita actions
            nextGitaVerse: () => {
                const { currentGitaChapter, currentGitaVerse } = get();

                // if the verse is last verse of the last chapter set the chapter to first chapter
                if (currentGitaChapter.chapter === GITA_DATA.length && currentGitaVerse.verse === currentGitaChapter.verses.length) {
                    set({ currentGitaChapter: GITA_DATA[0], currentGitaVerse: GITA_DATA[0].verses[0] })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: 1, currentGitaVerseNumber: 1 },
                        version: 0
                    }));
                }

                // if the verse is last verse of the chapter set the chapter to next chapter
                if (currentGitaVerse.verse === currentGitaChapter.verses.length) {
                    const nextChapter = GITA_DATA.find(chap => chap.chapter === currentGitaChapter.chapter + 1)
                    if (nextChapter) {
                        set({ currentGitaChapter: nextChapter, currentGitaVerse: nextChapter.verses[0] })
                        localStorage.setItem("gita_store", JSON.stringify({
                            state: { currentGitaChapterNumber: nextChapter.chapter, currentGitaVerseNumber: 1 },
                            version: 0
                        }));
                    }
                }

                // set the verse to next verse
                const nextVerse = currentGitaChapter.verses.find(verse => verse.verse === currentGitaVerse.verse + 1)
                if (nextVerse) {
                    set({ currentGitaVerse: nextVerse })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: currentGitaChapter.chapter, currentGitaVerseNumber: nextVerse.verse },
                        version: 0
                    }));
                }
            },
            prevGitaVerse: () => {
                const { currentGitaChapter, currentGitaVerse } = get();

                // if the verse is first verse of the first chapter, set last chapter last verse
                if (currentGitaChapter.chapter === 1 && currentGitaVerse.verse === 1) {
                    const lastChapter = GITA_DATA[GITA_DATA.length - 1]
                    set({ currentGitaChapter: lastChapter, currentGitaVerse: lastChapter.verses[lastChapter.verses.length - 1] })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: lastChapter.chapter, currentGitaVerseNumber: lastChapter.verses[lastChapter.verses.length - 1].verse },
                        version: 0
                    }));
                }

                // if the verse is first verse of the chapter set the chapter to previous chapter, last verse
                if (currentGitaChapter.chapter > 1 && currentGitaVerse.verse === 1) {
                    const prevChapter = GITA_DATA.find(chap => chap.chapter === currentGitaChapter.chapter - 1)
                    if (prevChapter) {
                        set({ currentGitaChapter: prevChapter, currentGitaVerse: prevChapter.verses[prevChapter.verses.length - 1] })
                        localStorage.setItem("gita_store", JSON.stringify({
                            state: { currentGitaChapterNumber: prevChapter.chapter, currentGitaVerseNumber: prevChapter.verses[prevChapter.verses.length - 1].verse },
                            version: 0
                        }));
                    }
                }

                // set the verse to previous verse
                const prevVerse = currentGitaChapter.verses.find(verse => verse.verse === currentGitaVerse.verse - 1)
                if (prevVerse) {
                    set({ currentGitaVerse: prevVerse })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: currentGitaChapter.chapter, currentGitaVerseNumber: prevVerse.verse },
                        version: 0
                    }));
                }
            },
            nextGitaChapter: () => {
                const { currentGitaChapter } = get();

                // if the chapter is last chapter set the current chapter to first chapter and verse to first verse
                if (currentGitaChapter.chapter === GITA_DATA.length) {

                    set({ currentGitaChapter: GITA_DATA[0], currentGitaVerse: GITA_DATA[0].verses[0] })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: 1, currentGitaVerseNumber: 1 },
                        version: 0
                    }));
                }

                // else set chapter to next
                const nextChapter = GITA_DATA.find(ch => ch.chapter === currentGitaChapter.chapter + 1);
                if (nextChapter) {
                    set({ currentGitaChapter: nextChapter, currentGitaVerse: nextChapter.verses[0] })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: nextChapter.chapter, currentGitaVerseNumber: 1 },
                        version: 0
                    }));
                }
            },
            prevGitaChapter: () => {
                const { currentGitaChapter } = get();
                // if the chapter is first chapter set the current chapter to last chapter and verse to last verse
                if (currentGitaChapter.chapter === 1) {
                    const lastChapter = GITA_DATA[GITA_DATA.length - 1]
                    set({ currentGitaChapter: lastChapter, currentGitaVerse: lastChapter.verses[0] })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: lastChapter.chapter, currentGitaVerseNumber: 1 },
                        version: 0
                    }));
                }

                // else set chapter to previous
                const prevChapter = GITA_DATA.find(ch => ch.chapter === currentGitaChapter.chapter - 1);
                if (prevChapter) {
                    set({ currentGitaChapter: prevChapter, currentGitaVerse: prevChapter.verses[0] })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: prevChapter.chapter, currentGitaVerseNumber: 1 },
                        version: 0
                    }));
                }
            },
            selectGitaChapter: (chapter: number) => {
                const selectedChapter = GITA_DATA.find(ch => ch.chapter === chapter);
                if (selectedChapter) {
                    set({ currentGitaChapter: selectedChapter, currentGitaVerse: selectedChapter.verses[0] })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: selectedChapter.chapter, currentGitaVerseNumber: 1 },
                        version: 0
                    }));
                }
            },
            selectGitaVerse: (verse: number) => {
                const { currentGitaChapter } = get();
                const selectedVerse = currentGitaChapter.verses.find(v => v.verse === verse);
                if (selectedVerse) {
                    set({ currentGitaVerse: selectedVerse })
                    localStorage.setItem("gita_store", JSON.stringify({
                        state: { currentGitaChapterNumber: currentGitaChapter.chapter, currentGitaVerseNumber: selectedVerse.verse },
                        version: 0
                    }));
                }
            },
        }),
        {
            name: "gita_store",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                currentGitaChapterNumber: state.currentGitaChapterNumber,
                currentGitaVerseNumber: state.currentGitaVerseNumber,
            }),
        }
    )
);