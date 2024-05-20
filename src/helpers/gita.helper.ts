import { languages } from "@/config/languages";
import { GITA_DATA } from "@/data/gita-data";

export function getLanguageFromLocalStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            const language = languages.find(l => l.name === storedLanguage);
            if (language) {
                return language;
            }
        }
    }
    return languages[0];
}

export function getCurrentGitaChapterNumber () {
    if (typeof window !== 'undefined' && window.localStorage) {
        return JSON.parse(localStorage.getItem("gita_store") as string)?.state?.currentGitaChapterNumber || 1;
    }
    return 1;
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