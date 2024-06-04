"use client";

import * as React from "react"
import { Check } from "lucide-react";

// data and store
import { useGitaStore } from "@/store/useGitaStore";

// components
import { ScrollArea } from "@/components/ui/scroll-area"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function SelectVerse() {
    const { currentGitaChapter, selectGitaVerse, currentGitaVerse } = useGitaStore()
    const verses = currentGitaChapter.verses.map(verse => verse.verse)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="h-[var(--h-btn)] sm:h-[var(--h-lg-btn)] w-[125px] px-6 rounded-lg flex justify-center gap-2 items-center border">
                <span>Verse</span>
                <div className="">{currentGitaVerse.verse}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount className="p-0" sideOffset={10}>
                <DropdownMenuGroup>
                    <ScrollArea className="h-[300px] w-[125px] rounded-md">
                        {
                            verses.map((verse, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    onClick={() => selectGitaVerse(verse)}
                                >
                                    {currentGitaVerse.verse === verse ?
                                        <Check className="size-3.5 mr-2 " /> : <div className="size-4 mr-2"></div>
                                    }
                                    <span>Verse {verse}</span>
                                </DropdownMenuItem>
                            ))
                        }
                    </ScrollArea>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}