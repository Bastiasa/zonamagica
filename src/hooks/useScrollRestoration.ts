"use client";

import { useEffect } from "react";

export function useScrollRestoration() {
    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        const restoreScroll = () => {
            const scrollY =
                sessionStorage.getItem("scrollY");

            if (scrollY !== null) {
                requestAnimationFrame(() => {
                    window.scrollTo(0, Number(scrollY));
                });
            }
        };

        restoreScroll();

        const saveScroll = () => {
            sessionStorage.setItem(
                "scrollY",
                String(window.scrollY),
            );
        };

        window.addEventListener("scroll", saveScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                saveScroll,
            );
        };
    }, []);
}
