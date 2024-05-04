import { title } from "process";

export type BookType = {
    title: string;
    author: string;
    description: string;
    other: {
        href: string;
        available: boolean;
    }
}

export const BOOKS = [
    {
        title: "Bhagavad Gita",
        author: "Ved Vyasa",
        description: "The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a sacred text of the Hindu religion. The Gita is set in a narrative framework of a dialogue between Pandava prince Arjuna and his guide and charioteer Krishna.",
        other: {
            href: "/gita",
            available: true
        }
    },

    {
        title: "Ramayana",
        author: "Valmiki",
        description: "The Ramayana is one of the two great Indian epics. It is ascribed to the Hindu sage Valmiki and forms an important part of the Hindu literature. The Ramayana is known for its moral and ethical values. It is a story of Rama, the prince of Ayodhya, who is exiled from his kingdom by his father King Dasharatha.",
        other: {
            href: "/ramayan",
            available: false
        }
    },

    {
        title: "Mahabharata",
        author: "Ved Vyasa",
        description: "The Mahabharata is one of the two major Sanskrit epics of ancient India, the other being the Ramayana. It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pandava princes and their successors.",
        other: {
            href: "/mahabharata",
            available: false
        }
    },

    {
        title: "Vedas",
        author: "Ved Vyasa",
        description: "The Vedas are ancient Indian texts that are a genre of Indian written literature. They are a vast genre of Indian literature that includes hymns, rituals, and other religious and philosophical teachings. The Vedas are known for their religious and philosophical content.",
        other: {
            href: "/vedas",
            available: false
        }
    },

    {
        title: "Upanishads",
        author: "Ved Vyasa",
        description: "The Upanishads are ancient Indian texts that are a genre of Indian written literature. They are a vast genre of Indian literature that includes philosophical and spiritual teachings. The Upanishads are known for their religious and philosophical content.",
        other: {
            href: "/upanishads",
            available: false
        }
    },

    {
        title: "Puranas",
        author: "Ved Vyasa",
        description: "The Puranas are ancient Indian texts that are a genre of Indian written literature. They are a vast genre of Indian literature that includes myths, legends, and other traditional lore. The Puranas are known for their religious and philosophical content.",
        other: {
            href: "/puranas",
            available: false
        }
    },

    {
        title: "Smritis",
        author: "Ved Vyasa",
        description: "The Smritis are a genre of texts in Hindu literature. They are a vast genre of Indian literature that includes laws, customs, and traditions. The Smritis are known for their religious and philosophical content.",
        other: {
            href: "/smritis",
            available: false
        }
    }


]