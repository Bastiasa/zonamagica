"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function GoBackButton({
    children,
}: {
    children?: any;
}) {
    const router = useRouter();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        setCanGoBack(window.history.length > 1);
    }, []);
    return (
        <Button
            disabled={!canGoBack}
            onClick={() => router.back()}
            children={children}
        />
    );
}
