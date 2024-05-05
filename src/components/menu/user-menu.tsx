"use client";

import {
    LogOut,
    Settings,
    User,
    UserRound,
    Equal,
    LayoutDashboard,
    CircleHelp
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function UserMenu() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="size-[var(--h-btn)] sm:size-[var(--h-lg-btn)] rounded-full grid place-items-center border">
                    <Equal className="size-4 text-gray-500" />
                    {/* <Avatar>
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>YR</AvatarFallback>
                    </Avatar> */}
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" forceMount className="w-auto p-4 rounded-xl" sideOffset={10}>
                <DropdownMenuLabel>Yogendra Rana</DropdownMenuLabel>
                <DropdownMenuLabel className="text-gray-400">yogendrarana4321@gmail.com</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserRound className="mr-2 h-4 w-4" />
                        <span>Login</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Explore</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CircleHelp className="mr-2 h-4 w-4" />
                        <span>FAQ</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}