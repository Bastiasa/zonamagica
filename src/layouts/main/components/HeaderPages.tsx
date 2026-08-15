"use client";

import { HEADER_PAGES } from "@/src/data/headerPages";
import { NavigationItem } from "./NavigationItem";

export function HeaderPages({
    onAnyClicked,
}: {
    onAnyClicked?: () => void;
}) {
    return HEADER_PAGES.map(([href, title], i) => (
        <NavigationItem
            onClick={() => {
                onAnyClicked?.();
            }}
            to={href}
            key={i}
        >
            {title}
        </NavigationItem>
    ));
}
