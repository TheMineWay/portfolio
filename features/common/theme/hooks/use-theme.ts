"use client"
import { useCallback, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme | null>(getInitialTheme());

    // Update document and localStorage when theme changes
    useEffect(() => {
        if (!theme) return;
        const root = window.document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        setInitialTheme(theme);
    }, [theme]);

    const toggle = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    return {
        setTheme,
        theme,
        toggle,
    }
}

/* Utils */

const getInitialTheme = (): Theme | null => {
    if (typeof window === "undefined") return null;
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
        return storedTheme;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}

const setInitialTheme = (theme: Theme) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("theme", theme);
}