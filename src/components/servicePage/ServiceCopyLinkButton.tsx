"use client";

import { gtmManager } from "@/src/utils/gtm";
import { withBasePath } from "@/src/utils/withBasepath";
import { ActionIcon } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import {
    IconExclamationCircle,
    IconLink,
} from "@tabler/icons-react";
import { CheckIcon } from "lucide-react";

export function ServiceCopyLinkButton({
    serviceData,
}: {
    serviceData: EnterpriseServiceData;
}) {
    const clipboard = useClipboard();

    return (
        <ActionIcon
            size={"lg"}
            onClick={() => {
                clipboard.copy(
                    new URL(
                        withBasePath(
                            `/servicios/${serviceData.slug}`,
                        ),
                        window.location.origin,
                    ),
                );

                gtmManager.serviceLinkCopied({
                    service: serviceData,
                });
            }}
        >
            {clipboard.copied ? (
                <CheckIcon />
            ) : clipboard.error ? (
                <IconExclamationCircle />
            ) : (
                <IconLink />
            )}
        </ActionIcon>
    );
}
