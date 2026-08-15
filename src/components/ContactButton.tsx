"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Text, Group } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { CONTACT } from "../data/contact";

export function ContactButton({
    label,
    wsIcon = <IconBrandWhatsapp />,
    wsMessage = "¡Hola! Quisiera cotizar un evento.",
}: {
    label?: any;
    wsIcon?: any;
    wsMessage?: string;
}) {
    return (
        <a
            href={`${CONTACT.whatsappHref}?text=${encodeURIComponent(wsMessage ?? "")}`}
        >
            <ShimmerButton
                shimmerSize="6px"
                background="green"
                className="shadow-2xl"
            >
                <Group>
                    {!label && (
                        <Text className="">
                            Cotiza tu evento aquí
                        </Text>
                    )}

                    {label && label}

                    {wsIcon}
                </Group>
            </ShimmerButton>
        </a>
    );
}
