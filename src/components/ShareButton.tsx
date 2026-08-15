"use client";

import { ActionIcon } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";

export type ShareButtonProps = {
    shareData: {
        title: string;
        text: string;
        url: string;
    };
};

export function ShareButton({
    shareData,
}: ShareButtonProps) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {}

            return;
        }
    };

    return (
        <ActionIcon onClick={handleShare} size={"lg"}>
            <IconShare />
        </ActionIcon>
    );
}
