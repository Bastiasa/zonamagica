import { ServiceInformation } from "@/src/components/servicePage/ServiceInformation";
import { ENTERPRISE_DEFINED_SERVICES } from "@/src/data/services";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
    return ENTERPRISE_DEFINED_SERVICES.map(({ slug }) => ({
        slug,
    }));
}

export default function ServicePageHandler({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = React.use(params);

    const foundServiceData =
        ENTERPRISE_DEFINED_SERVICES.find(
            (sd) => sd.slug === slug,
        );

    if (!foundServiceData) {
        notFound();
    }

    return (
        <ServiceInformation
            serviceData={foundServiceData}
        />
    );
}
