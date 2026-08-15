"use client";

import { Text } from "@mantine/core";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavigationItemProps = {
    children?: string;
    to: string;
    onClick?: () => void;
};

export function NavigationItem({
    children,
    to,
    onClick,
}: NavigationItemProps) {
    const [hover, setHover] = useState(false);
    const elementRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const onMouseEnter = () => {
            setHover(true);
        };

        const onMouseLeave = () => {
            setHover(false);
        };

        const element = elementRef.current;
        element.addEventListener(
            "mouseenter",
            onMouseEnter,
        );
        element.addEventListener(
            "mouseleave",
            onMouseLeave,
        );

        return () => {
            element.removeEventListener(
                "mouseenter",
                onMouseEnter,
            );
            element.removeEventListener(
                "mouseleave",
                onMouseLeave,
            );
        };
    }, []);

    return (
        <Link onClick={onClick} href={to}>
            <Text
                tt="uppercase"
                ref={elementRef}
                td={hover ? "underline" : undefined}
            >
                {children}
            </Text>
        </Link>
    );
}
