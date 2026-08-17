"use client";

import {
    Button,
    ButtonProps,
    PolymorphicComponentProps,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { ComponentProps, FunctionComponent } from "react";
export function NavigationButton({
    to,
    ...props
}: ButtonProps &
    ComponentProps<"a"> & {
        to: string;
    }) {
    const { push } = useRouter();

    return (
        <Button
            component="a"
            onClick={() => push(to)}
            {...props}
        />
    );
}
