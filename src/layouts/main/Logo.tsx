import Image from "next/image";
import Link from "next/link";
import { Group, Text } from "@mantine/core";
import { withBasePath } from "@/src/utils/withBasepath";

/**
 * Brand assets expected at:
 *   /public/logo.png  (1536x1024 — full "Zona Mágica" lockup with top hat)
 *   /public/icon.png  (1254x1254 — square "M" mark with top hat, for compact spots)
 *
 * Recommended pairing (optional): a rounded, poster-style display face like
 * "Baloo 2" for the wordmark next to the icon, set up via next/font in your
 * root layout. Falls back cleanly to the default sans if you skip that.
 */

type LogoProps = {
    /** "full" = the wide lockup (great for headers/hero). "icon" = square mark only (favicons, tight nav, footers). */
    variant?: "full" | "icon";
    /** Rendered height in px. Width follows the image's own aspect ratio. */
    size?: number;
    /** When variant="icon", also set the "Zona Mágica" wordmark next to it. */
    withWordmark?: boolean;
    href?: string;
    className?: string;
};

export function Logo({
    variant = "full",
    size = 48,
    withWordmark = false,
    href = "/",
    className = "",
}: LogoProps) {
    const mark =
        variant === "full" ? (
            <Image
                src={withBasePath("/logo.webp")}
                alt="Zona Mágica"
                width={1536}
                height={1024}
                priority
                style={{ height: size, width: "auto" }}
                className="object-contain select-none"
            />
        ) : (
            <Image
                src={withBasePath("/favicon.webp")}
                alt="Zona Mágica"
                width={1254}
                height={1254}
                priority
                style={{ height: size, width: size }}
                className="object-contain select-none"
            />
        );

    return (
        <Link
            href={href}
            aria-label="Zona Mágica — Ir al inicio"
            className={`inline-flex items-center gap-2.5 ${className}`}
        >
            {mark}
            {variant === "icon" && withWordmark && (
                <Group
                    gap={2}
                    wrap="nowrap"
                    align="baseline"
                >
                    <Text
                        fw={800}
                        className="tracking-tight text-[#7619c2] leading-none"
                        style={{ fontSize: size * 0.46 }}
                    >
                        Zona
                    </Text>
                    <span> </span>
                    <Text
                        fw={800}
                        className="tracking-tight text-[#EC1FA0] leading-none"
                        style={{ fontSize: size * 0.46 }}
                    >
                        Mágica
                    </Text>
                </Group>
            )}
        </Link>
    );
}

export default Logo;
