"use client";

import { cn } from "@/lib/utils"
import { Dot, ChevronDown } from "lucide-react"

// data and store
import { languages } from "@/config/languages"
import { useLanguageStore } from "@/store/useLanguageStore";

// components
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageMenu() {
    const { activeLanguage, setActiveLanguage } = useLanguageStore();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-[var(--h-btn)] sm:h-[var(--h-lg-btn)] w-20 rounded-lg flex justify-center gap-4 items-center border">
                    <span className="w-4">{activeLanguage?.code || languages[0].code}</span>
                    <ChevronDown className="size-4 text-gray-500" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" forceMount className="w-[125px] p-2 rounded-lg" sideOffset={10}>
                <DropdownMenuGroup>
                    {
                        languages.map((lang, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => setActiveLanguage(lang)}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <Dot className={cn("h-2 w-2 rounded-full", activeLanguage?.name === lang.name ? "bg-black" : "bg-gray-200")} />
                                <span>{lang.name}</span>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}