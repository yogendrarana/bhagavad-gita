import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChapterType } from "@/data/gita-data";

// prop type
interface PropType {
    text: string,
    selectVerse: (verse: number) => void;
    currentChapter: ChapterType;
}

export default function SelectVerse({ text, currentChapter, selectVerse }: PropType) {
    const verses = currentChapter.verses.map(verse => verse.verse)

    const handleVerseChange = (value: string) => {
        const verse = parseInt(value)
        selectVerse(verse)
    }
    
    return (
        <Select onValueChange={handleVerseChange}>
            <SelectTrigger className="w-[125px]">
                <SelectValue placeholder={text} />
            </SelectTrigger>
            <SelectContent className="w-[125px]">
                <SelectGroup>
                    {
                        verses.map((verse, index) => (
                            <SelectItem
                                key={index}
                                value={String(verse)}
                            >Verse {verse}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}