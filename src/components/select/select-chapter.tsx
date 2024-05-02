import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { GITA_DATA } from "@/data/gita-data"
import { useGitaStore } from "@/state/useGitaStore";


export default function SelectChapter() {
    const { selectGitaChapter } = useGitaStore();
    const chapters = GITA_DATA.map(chapter => chapter.chapter)

    const handleChange = (value: string) => {
        const chapter = parseInt(value)
        selectGitaChapter(chapter)
    }

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[125px]">
                <SelectValue placeholder={"Chapters"} />
            </SelectTrigger>
            <SelectContent className="w-[125px]">
                <SelectGroup>
                    {
                        chapters.map((chp, index) => (
                            <SelectItem
                                key={index}
                                value={String(chp)}
                            >Chapter {chp}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}