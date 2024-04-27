import { LANGUAGE, LANGUAGE_CODE } from "@/app/constants";

export type LangType = {
    code: string;
    name: string;
}

export const languages: LangType[] = [
    {
        code: LANGUAGE_CODE.EN,
        name: LANGUAGE.ENGLISH,
    },
    {
        code: LANGUAGE_CODE.NP,
        name: LANGUAGE.NEPALI,
    },
    {
        code: LANGUAGE_CODE.HI,
        name: LANGUAGE.HINDI,
    },
    {
        code: LANGUAGE_CODE.SA,
        name: LANGUAGE.SANSKRIT,
    },
]