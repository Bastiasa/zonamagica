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
    onClick,
}: ShareButtonProps & {
    onClick?: () => void;
}) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {}

            return;
        }
    };

    return (
        <ActionIcon
            onClick={() => {
                onClick?.();
                handleShare();
            }}
            size={"lg"}
        >
            <IconShare />
        </ActionIcon>
    );
}
