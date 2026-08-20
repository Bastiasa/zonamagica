"use client";

import { Button, ButtonProps } from "@mantine/core";
import Link from "next/link";
export function NavigationButton({
    to,
    className,
    ...props
}: ButtonProps & {
    to: string;
    onClick?: () => void;
}) {
    return (
        <Link href={to}>
            <Button
                w={"100%"}
                className={`${className}`}
                {...props}
            />
        </Link>
    );
}
