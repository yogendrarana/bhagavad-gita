import { Flag, Dot, ChevronDown } from "lucide-react"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuGroup, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { languages } from "@/config/languages"
import useLanguage from "@/hooks/useLanguage";

export function LanguageDropdownMenu() {
    const { activeLanguage, changeActiveLanguage } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-[var(--h-button)] w-20 rounded-full flex justify-center gap-2 items-center border">
                    <div className="w-4">{activeLanguage?.code || languages[0].code}</div>
                    <ChevronDown className="size-4 text-gray-500" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" forceMount className="w-auto p-4 rounded-xl" sideOffset={10}>
                <DropdownMenuGroup>
                    {
                        languages.map((lang, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => changeActiveLanguage(lang)}
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