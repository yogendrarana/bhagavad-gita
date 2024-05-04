import { languages } from "@/config/languages";

export function getLanguageFromLocalStorage() {
    if (typeof window !== 'undefined') {
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
