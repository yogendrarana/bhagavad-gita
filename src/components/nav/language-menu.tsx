import {
    LogOut,
    Settings,
    User,
    UserRound,
    Equal,
    LayoutDashboard,
    CircleHelp,
    Flag,
    FlagIcon,
    TicketCheck,
    Check,
    CalendarCheck,
    Dot
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { languages } from "@/config/languages"
import { cn } from "@/lib/utils"
import useActiveLanguage from "@/hooks/useActiveLanguage";

export function LanguageDropdownMenu() {
    const { activeLanguage, changeActiveLanguage } = useActiveLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="size-[var(--h-button)] rounded-full grid place-items-center border">
                    <Flag className="size-4 text-gray-500" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" forceMount className="w-auto p-4 rounded-xl" sideOffset={10}>
                <DropdownMenuGroup>
                    {
                        languages.map((lang, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => changeActiveLanguage(lang.code)}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <Dot className={cn("h-2 w-2 rounded-full", activeLanguage === lang.code ? "bg-black" : "bg-gray-300")} />
                                <span>{lang.name}</span>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}