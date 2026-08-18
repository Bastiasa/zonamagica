import { ServiceInformation } from "@/src/components/servicePage/ServiceInformation";
import { ENTERPRISE_DEFINED_SERVICES } from "@/src/data/services";
import useEnterpriseServiceData from "@/src/hooks/useEnterpriseServiceData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
    return ENTERPRISE_DEFINED_SERVICES.map(({ slug }) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const serviceData = ENTERPRISE_DEFINED_SERVICES.find(
        (s) => s.slug === slug,
    );

    if (!serviceData) {
        return {
            title: "Zona Mágica | Planes",
        };
    }

    return {
        title: `Zona Mágica | Plan ${serviceData.name}`,
        alternates: {
            canonical: `https://zonamagica.site/servicios/${serviceData.slug}`,
        },
    };
}

export default function ServicePageHandler({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = React.use(params);

    const serviceData = useEnterpriseServiceData(slug);

    if (!serviceData) {
        notFound();
    }

    return <ServiceInformation serviceData={serviceData} />;
}
