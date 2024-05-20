import { languages } from "@/config/languages";

export function getActiveLanguage() {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            const language = languages.find(l => l.name === storedLanguage);
            if (language) {
                return language;
            }
        }
    }

    return languages[0];
}