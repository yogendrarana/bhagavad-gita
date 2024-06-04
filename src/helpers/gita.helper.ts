import { GITA_DATA } from "@/data/gita-data";

export function getCurrentGitaChapterNumber () {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedCurrentGitaChapterNumber = localStorage.getItem("gita_store");
        if (storedCurrentGitaChapterNumber) {
            return JSON.parse(storedCurrentGitaChapterNumber).state.currentGitaChapterNumber;
        } else {
            localStorage.setItem("gita_store", JSON.stringify({
                state: { currentGitaChapterNumber: 1, currentGitaVerseNumber: 1 },
                version: 0
            }));
            return 1;
        }
    }
}

export function getCurrentGitaVerseNumber () {
    if (typeof window !== 'undefined' && window.localStorage) {
        return JSON.parse(localStorage.getItem("gita_store") as string)?.state?.currentGitaVerseNumber || 1;
    }
    return 1;
}

export function getCurrentGitaChapter() {
    if (typeof window !== 'undefined' && window.localStorage) {
        const currentGitaChapterNumber = getCurrentGitaChapterNumber();
        return GITA_DATA.find(chap => chap.chapter === currentGitaChapterNumber) || GITA_DATA[0];
    }
    return GITA_DATA[0];
}

export function getCurrentGitaVerse () {
    if (typeof window !== 'undefined' && window.localStorage) {
        const currentGitaChapterNumber = getCurrentGitaChapterNumber();
        const currentGitaVerseNumber = getCurrentGitaVerseNumber();
        const currentGitaChapter = GITA_DATA.find(chap => chap.chapter === currentGitaChapterNumber) || GITA_DATA[0];
        return currentGitaChapter.verses.find(verse => verse.verse === currentGitaVerseNumber) || currentGitaChapter.verses[0];
    }
    return GITA_DATA[0].verses[0];
}