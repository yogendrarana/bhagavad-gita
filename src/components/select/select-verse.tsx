import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useGitaStore } from "@/state/useGitaStore";

export default function SelectVerse() {
    const { currentGitaChapter, selectGitaVerse } = useGitaStore()
    const verses = currentGitaChapter.verses.map(verse => verse.verse)

    const handleVerseChange = (value: string) => {
        const verse = parseInt(value)
        selectGitaVerse(verse)
    }

    return (
        <Select onValueChange={handleVerseChange}>
            <SelectTrigger className="w-[125px]">
                <SelectValue placeholder={"Verse"} />
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