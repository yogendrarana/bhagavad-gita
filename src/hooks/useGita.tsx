import { useEffect, useState } from 'react'
import { ChapterType, GITA_DATA, VerseType } from '@/data/gita-data'

const useGita = () => {
    const [currentChapter, setCurrentChapter] = useState<ChapterType>(GITA_DATA[0])
    const [currentVerse, setCurrentVerse] = useState<VerseType>(currentChapter.verses[0])

    const next = () => {
        // if the verse is last verse of the last chapter set the chapter to first chapter
        if (currentChapter.chapter === GITA_DATA.length && currentVerse.verse === currentChapter.verses.length) {
            setCurrentChapter(GITA_DATA[0])
            setCurrentVerse(GITA_DATA[0].verses[0])
        }

        // if the verse is last verse of the chapter set the chapter to next chapter
        if (currentVerse.verse === currentChapter.verses.length) {
            const nextChapter = GITA_DATA.find(chap => chap.chapter === currentChapter.chapter + 1)
            if (nextChapter) {
                setCurrentChapter(nextChapter)
                setCurrentVerse(nextChapter.verses[0])
            }
        }

        // set the verse to next verse
        const nextVerse = currentChapter.verses.find(verse => verse.verse === currentVerse.verse + 1)
        if (nextVerse) {
            setCurrentVerse(nextVerse)
        }
    }

    const prev = () => {
        // if the verse is first verse of the first chapter, set last chapter last verse
        if (currentChapter.chapter === 1 && currentVerse.verse === 1) {
            const lastChapter = GITA_DATA[GITA_DATA.length - 1]
            setCurrentChapter(lastChapter)
            setCurrentVerse(lastChapter.verses[lastChapter.verses.length - 1])
        }

        // if the verse is first verse of the chapter set the chapter to previous chapter, last verse
        if (currentChapter.chapter > 1 && currentVerse.verse === 1) {
            const prevChapter = GITA_DATA.find(chap => chap.chapter === currentChapter.chapter - 1)
            if (prevChapter) {
                setCurrentChapter(prevChapter)
                setCurrentVerse(prevChapter.verses[prevChapter.verses.length - 1])
            }
        }

        // set the verse to previous verse
        const prevVerse = currentChapter.verses.find(verse => verse.verse === currentVerse.verse - 1)
        if (prevVerse) {
            setCurrentVerse(prevVerse)
        }
    }

    const skipToLast = () => {
        const lastChapter = GITA_DATA[GITA_DATA.length - 1]
        setCurrentChapter(lastChapter)
        setCurrentVerse(lastChapter.verses[lastChapter.verses.length - 1])
    }

    const skipToFirst = () => {
        const firstChapter = GITA_DATA[0]
        setCurrentChapter(firstChapter)
        setCurrentVerse(firstChapter.verses[0])
    }

    return { currentChapter, currentVerse, next, prev };
}

export default useGita;