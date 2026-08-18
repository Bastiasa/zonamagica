"use client";

import { ActionIcon } from "@mantine/core";
import { IconChevronsDown } from "@tabler/icons-react";

export function SeeDetailsButton() {
    return (
        <ActionIcon
            component="a"
            href="#detalles"
            hiddenFrom="sm"
            size={"lg"}
        >
            <IconChevronsDown />
        </ActionIcon>
    );
}
