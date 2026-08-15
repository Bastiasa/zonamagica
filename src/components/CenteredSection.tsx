import {
    AppShellSection,
    AppShellSectionProps,
} from "@mantine/core";

export function CenteredSection({
    children,
    ...props
}: AppShellSectionProps & { children?: any }) {
    return (
        <AppShellSection
            mx={"auto"}
            maw={1200}
            py={64}
            px={32}
            {...props}
            children={children}
        />
    );
}
