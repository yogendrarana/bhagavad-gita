import * as BookImages from "@/assets/index";


export type BookType = {
    title: string;
    author: string;
    description: string;
    image: any;
    other: {
        href: string;
        available: boolean;
    }
}

export const BOOKS = [
    {
        title: "Bhagavad Gita",
        author: "Ved Vyasa",
        description: "The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Hindu epic Mahabharata. The Gita is set in a narrative framework of a dialogue between Pandava prince Arjuna and his guide and charioteer Krishna.",
        image: BookImages.BhagavadGita,
        other: {
            href: "/gita",
            available: true
        }
    },

    {
        title: "Ramayana",
        author: "Valmiki",
        description: "The Ramayana is a story of Rama, the prince of Ayodhya, who is exiled from his kingdom by his father King Dasharatha.",
        image: BookImages.Mahabharat,
        other: {
            href: "/ramayan",
            available: false
        }
    },

    {
        title: "Mahabharata",
        author: "Ved Vyasa",
        description: "The Mahabharata narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pandava princes and their successors.",
        image: BookImages.Mahabharat,
        other: {
            href: "/mahabharata",
            available: false
        }
    },

    {
        title: "Vedas",
        author: "Ved Vyasa",
        description: "The Vedas are a vast genre of Hindu literature that includes hymns, rituals, and other religious and philosophical teachings. The Vedas are known for their religious and philosophical content.",
        image: BookImages.Mahabharat,
        other: {
            href: "/vedas",
            available: false
        }
    },

    {
        title: "Upanishads",
        author: "Ved Vyasa",
        description: "The Upanishads are a vast genre of Hindu literature that includes philosophical and spiritual teachings. The Upanishads are known for their religious and philosophical content.",
        image: BookImages.Mahabharat,
        other: {
            href: "/upanishads",
            available: false
        }
    },

    {
        title: "Puranas",
        author: "Ved Vyasa",
        description: "The Puranas are a vast genre of Hindu literature that includes myths, legends, and other traditional lore. The Puranas are known for their religious and philosophical content.",
        image: BookImages.Mahabharat,
        other: {
            href: "/puranas",
            available: false
        }
    },

    {
        title: "Smritis",
        author: "Ved Vyasa",
        description: "The Smritis are a vast genre of Hindu literature that includes laws, customs, and traditions. The Smritis are known for their religious and philosophical content.",
        image: BookImages.Mahabharat,
        other: {
            href: "/smritis",
            available: false
        }
    }


]