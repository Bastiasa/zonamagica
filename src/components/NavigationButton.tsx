import { Button, ButtonProps } from "@mantine/core";
import Link from "next/link";
export function NavigationButton({
    to,
    className,
    ...props
}: ButtonProps & {
    to: string;
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
