"use client";

import { useEffect } from "react";

export function useScrollRestoration() {
    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        const key = `scroll:${window.location.pathname}`;

        const saved = sessionStorage.getItem(key);

        if (saved !== null) {
            requestAnimationFrame(() => {
                window.scrollTo(0, Number(saved));
            });
        }

        const save = () => {
            sessionStorage.setItem(
                key,
                String(window.scrollY),
            );
        };

        window.addEventListener("scroll", save);

        return () => {
            save();
            window.removeEventListener("scroll", save);
        };
    }, []);
}
