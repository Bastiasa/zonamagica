"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export function GoBackButton({
    children,
}: {
    children?: any;
}) {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.back()}
            children={children}
        />
    );
}
