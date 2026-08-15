"use client";

import { MantineProvider } from "@mantine/core";
import {
    APP_THEME,
    cssVariablesResolver,
} from "../data/theme";

import "@mantine/core/styles.css";

export function Providers({
    children,
}: {
    children?: any;
}) {
    return (
        <MantineProvider
            defaultColorScheme="light"
            forceColorScheme="light"
            theme={APP_THEME}
            cssVariablesResolver={cssVariablesResolver}
        >
            {children}
        </MantineProvider>
    );
}
