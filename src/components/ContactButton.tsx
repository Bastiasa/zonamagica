"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Group, Text } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { CONTACT } from "../data/contact";
import { gtmManager } from "../utils/gtm";

const whatsappGtm = gtmManager.whatsappButtonClicked;

export function ContactButton({
    label,
    wsIcon = <IconBrandWhatsapp />,
    wsMessage = "¡Hola! Quisiera cotizar un evento.",
    gtmProperties = {},
}: {
    label?: any;
    wsIcon?: any;
    wsMessage?: string;
    gtmProperties?: Parameters<typeof whatsappGtm>[0];
}) {
    return (
        <a
            onClick={() => {
                gtmManager.whatsappButtonClicked(
                    gtmProperties,
                );
            }}
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
