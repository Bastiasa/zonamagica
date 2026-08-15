"use client";

import { useEffect, useState } from "react";
import { ShareButton } from "../ShareButton";
import { withBasePath } from "@/src/utils/withBasepath";

export function ShareServiceButton({
    serviceData,
}: {
    serviceData: EnterpriseServiceData;
}) {
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        setCanShare(
            typeof navigator !== "undefined" &&
                typeof navigator.share === "function",
        );
    }, []);

    if (!canShare) {
        return null;
    }

    return (
        <ShareButton
            shareData={{
                text: `Mira este servicio ${serviceData.name} de Zona Mágica`,
                url: new URL(
                    withBasePath(
                        `/servicios/${serviceData.slug}`,
                    ),
                    window.location.origin,
                ).toString(),
                title: serviceData.name,
            }}
        ></ShareButton>
    );
}
