import { useEffect, useState } from 'react'
import { ChapterType, GITA_DATA, VerseType } from '@/data/gita-data'

const useGita = () => {
    const [currentChapter, setCurrentChapter] = useState<ChapterType>(GITA_DATA[0])
    const [currentVerse, setCurrentVerse] = useState<VerseType>(currentChapter.verses[0]);

    // use effect
    useEffect(() => {
        const currentChapterNumber = localStorage.getItem('current_chapter');
        const currentVerseNumber = localStorage.getItem('current_verse');

        if (currentChapterNumber) {
            setCurrentChapter(GITA_DATA.find(chap => chap.chapter === JSON.parse(currentChapterNumber)) || GITA_DATA[0])
        }else {
            setCurrentChapter(GITA_DATA[0])
            localStorage.setItem('current_chapter', JSON.stringify(1))
        }

        if (currentVerseNumber) {
            setCurrentVerse(currentChapter.verses.find(verse => verse.verse === JSON.parse(currentVerseNumber)) || currentChapter.verses[0])
        }else {
            setCurrentVerse(currentChapter.verses[0])
            localStorage.setItem('current_verse', JSON.stringify(1))            
        }
    }, [])


    // next verse
    const nextVerse = () => {
        // if the verse is last verse of the last chapter set the chapter to first chapter
        if (currentChapter.chapter === GITA_DATA.length && currentVerse.verse === currentChapter.verses.length) {
            setCurrentChapter(GITA_DATA[0])
            setCurrentVerse(GITA_DATA[0].verses[0])
            localStorage.setItem('current_chapter', JSON.stringify(1))
            localStorage.setItem('current_verse', JSON.stringify(1))
        }

        // if the verse is last verse of the chapter set the chapter to next chapter
        if (currentVerse.verse === currentChapter.verses.length) {
            const nextChapter = GITA_DATA.find(chap => chap.chapter === currentChapter.chapter + 1)
            if (nextChapter) {
                setCurrentChapter(nextChapter)
                setCurrentVerse(nextChapter.verses[0])
                localStorage.setItem('current_chapter', JSON.stringify(nextChapter.chapter))
                localStorage.setItem('current_verse', JSON.stringify(1))
            }
        }

        // set the verse to next verse
        const nextVerse = currentChapter.verses.find(verse => verse.verse === currentVerse.verse + 1)
        if (nextVerse) {
            setCurrentVerse(nextVerse)
            localStorage.setItem('current_verse', JSON.stringify(nextVerse.verse))
        }
    }

    // prev verse
    const prevVerse = () => {
        // if the verse is first verse of the first chapter, set last chapter last verse
        if (currentChapter.chapter === 1 && currentVerse.verse === 1) {
            const lastChapter = GITA_DATA[GITA_DATA.length - 1]
            setCurrentChapter(lastChapter)
            setCurrentVerse(lastChapter.verses[lastChapter.verses.length - 1])
            localStorage.setItem('current_chapter', JSON.stringify(lastChapter.chapter))
            localStorage.setItem('current_verse', JSON.stringify(lastChapter.verses[lastChapter.verses.length - 1].verse))
        }

        // if the verse is first verse of the chapter set the chapter to previous chapter, last verse
        if (currentChapter.chapter > 1 && currentVerse.verse === 1) {
            const prevChapter = GITA_DATA.find(chap => chap.chapter === currentChapter.chapter - 1)
            if (prevChapter) {
                setCurrentChapter(prevChapter)
                setCurrentVerse(prevChapter.verses[prevChapter.verses.length - 1])
                localStorage.setItem('current_chapter', JSON.stringify(prevChapter.chapter))
                localStorage.setItem('current_verse', JSON.stringify(prevChapter.verses[prevChapter.verses.length - 1].verse))
            }
        }

        // set the verse to previous verse
        const prevVerse = currentChapter.verses.find(verse => verse.verse === currentVerse.verse - 1)
        if (prevVerse) {
            setCurrentVerse(prevVerse)
            localStorage.setItem('current_verse', JSON.stringify(prevVerse.verse))
        }
    }

    // next chapter
    const nextChapter = () => {
        // if the chapter is last chapter set the current chapter to first chapter and verse to first verse
        if (currentChapter.chapter === GITA_DATA.length) {
            setCurrentChapter(GITA_DATA[0]);
            setCurrentVerse(GITA_DATA[0].verses[0])
            localStorage.setItem('current_chapter', JSON.stringify(1))
            localStorage.setItem('current_verse', JSON.stringify(1))
        }

        // else set chapter to next
        const nextChapter = GITA_DATA.find(ch => ch.chapter === currentChapter.chapter + 1);
        if (nextChapter) {
            setCurrentChapter(nextChapter)
            setCurrentVerse(nextChapter.verses[0])
            localStorage.setItem('current_chapter', JSON.stringify(nextChapter.chapter))
            localStorage.setItem('current_verse', JSON.stringify(1))
        }
    }


    // prev chapter
    const prevChapter = () => {
        // if the chapter is first chapter set the current chapter to last chapter and verse to last verse
        if (currentChapter.chapter === 1) {
            const lastChapter = GITA_DATA[GITA_DATA.length - 1]
            setCurrentChapter(lastChapter)
            setCurrentVerse(lastChapter.verses[0])
            localStorage.setItem('current_chapter', JSON.stringify(lastChapter.chapter))
            localStorage.setItem('current_verse', JSON.stringify(1))
        }

        // else set chapter to previous
        const prevChapter = GITA_DATA.find(ch => ch.chapter === currentChapter.chapter - 1);
        if (prevChapter) {
            setCurrentChapter(prevChapter)
            setCurrentVerse(prevChapter.verses[0])
            localStorage.setItem('current_chapter', JSON.stringify(prevChapter.chapter))
            localStorage.setItem('current_verse', JSON.stringify(1))
        }
    }

    // skip to last
    const skipToLast = () => {
        const lastChapter = GITA_DATA[GITA_DATA.length - 1]
        setCurrentChapter(lastChapter)
        setCurrentVerse(lastChapter.verses[lastChapter.verses.length - 1])
        localStorage.setItem('current_chapter', JSON.stringify(lastChapter.chapter))
        localStorage.setItem('current_verse', JSON.stringify(1));
    }

    // skip to first
    const skipToFirst = () => {
        const firstChapter = GITA_DATA[0]
        setCurrentChapter(firstChapter)
        setCurrentVerse(firstChapter.verses[0])
        localStorage.setItem('current_chapter', JSON.stringify(firstChapter.chapter))
        localStorage.setItem('current_verse', JSON.stringify(1));
    }

    return { 
        currentChapter, 
        currentVerse, 
        nextVerse, 
        prevVerse ,
        nextChapter,
        prevChapter,
    };
}

export default useGita;