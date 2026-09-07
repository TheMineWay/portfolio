"use server"

import { cookies } from "next/headers"
import { LOCALE_COOKIE_KEY } from "./constants";
import { Locale } from "./locale";

const DEFAULT_LOCALE = Locale.EN;

export const getLocale = async (): Promise<Locale> => {
    const store = await cookies();
    const locale = store.get(LOCALE_COOKIE_KEY)?.value as Locale ?? DEFAULT_LOCALE;

    if (!Object.values(Locale).includes(locale)) {
        return DEFAULT_LOCALE;
    }

    return locale;
}

export const setLocale = async (locale: Locale) => {
    if (Object.values(Locale).includes(locale)) {
        const store = await cookies();
        store.set(LOCALE_COOKIE_KEY, locale);
    }
}