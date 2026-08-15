"use client";

import { Button, ButtonProps } from "@mantine/core";
import { useRouter } from "next/navigation";
export function NavigationButton({
    to,
    ...props
}: ButtonProps & { to: string }) {
    const { push } = useRouter();

    return <Button onClick={() => push(to)} {...props} />;
}
