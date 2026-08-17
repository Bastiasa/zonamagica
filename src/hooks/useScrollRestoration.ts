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

        let ticking = false;

        const save = () => {
            if (ticking) return;

            ticking = true;

            requestAnimationFrame(() => {
                sessionStorage.setItem(
                    key,
                    String(window.scrollY),
                );

                ticking = false;
            });
        };

        window.addEventListener("scroll", save, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", save);
        };
    }, []);
}
