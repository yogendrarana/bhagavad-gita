import { CircleHelp, Home, LayoutDashboard, LogOut, Settings, User, UserRound } from "lucide-react";

export const app_links = {
    authenticated_links: [
        {
            label: "Home",
            icon: Home,
            href: "/",
        },
        {
            label: "Profile",
            icon: User,
            href: "/profile",
        },
        {
            label: "Explore",
            icon: LayoutDashboard,
            href: "/explore",
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/settings",
        },
        {
            label: "Logout",
            icon: LogOut,
            href: "/logout",
        }
    ],
    unauthenticated_links: [
        {
            label: "Login",
            icon: UserRound,
            href: "/login",
        },
        {
            label: "Register",
            icon: UserRound,
            href: "/register",
        },
        {
            label: "Home",
            icon: Home,
            href: "/",
        },
        {
            label: "Explore",
            icon: LayoutDashboard,
            href: "/explore",
        },
        {
            label: "FAQ",
            icon: CircleHelp,
            href: "/faq",
        }
    ]
}