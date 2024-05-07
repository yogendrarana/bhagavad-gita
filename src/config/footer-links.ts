export type FooterLinkType = {
    label: string,
    links: { label: string, href: string }[]
}

export const FOOTER_LINKS: FooterLinkType[] = [
    {
        label: "Company",
        links: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" }
        ]
    },

    {
        label: "Read",
        links: [
            { label: "Bhagavad Gita", href: "/gita" },
            { label: "Ramayan", href: "/ramayan" },
            { label: "Mahabharat", href: "/mahabharat" },
            { label: "Vedas", href: "/vedas" },
            { label: "Upanishads", href: "/updanishads" },
            { label: "Purans", href: "/purans" },
            { label: "Smritis", href: "/smritis" }
        ]
    },

    {
        label: "Follow Us",
        links: [
            { label: "Facebook", href: "/" },
            { label: "Twitter", href: "/" },
            { label: "Instagram", href: "/" }
        ]
    },
]