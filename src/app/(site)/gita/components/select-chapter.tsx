import * as React from "react"
import { Check } from "lucide-react";

// data and store
import { GITA_DATA } from "@/data/gita-data"
import { useGitaStore } from "@/store/useGitaStore";

// components
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "../../../../components/ui/dropdown-menu";

export default function SelectChapter() {
    const { selectGitaChapter, currentGitaChapter } = useGitaStore();
    const chapters = GITA_DATA.map(chapter => chapter.chapter)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-[var(--h-btn)] sm:h-[var(--h-lg-btn)] w-[125px] px-4 rounded-lg flex justify-center gap-2 items-center border">
                    <span>Chapter</span>
                    <div className="w-4">{currentGitaChapter.chapter}</div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount className="w-[125px] rounded-lg" sideOffset={10}>
                <DropdownMenuGroup>
                    {
                        chapters.map((chp, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => selectGitaChapter(chp)}
                            >
                                {currentGitaChapter.chapter === chp ?
                                    <Check className="size-3.5 mr-2 " /> : <div className="size-4 mr-2"></div>
                                }
                                <span>Chapter {chp}</span>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}