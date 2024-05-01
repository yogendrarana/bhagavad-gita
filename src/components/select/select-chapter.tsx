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

// prop type
interface PropType {
    text: string;
    selectChapter: (chapter: number) => void;
}

export default function SelectChapter({ text, selectChapter }: PropType) {
    const chapters = GITA_DATA.map(chapter => chapter.chapter)

    const handleChange = (value: string) => {
        const chapter = parseInt(value)
        selectChapter(chapter)
    }

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[125px]">
                <SelectValue placeholder={text} />
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