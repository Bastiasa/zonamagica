import type { MetadataRoute } from "next";
import { ENTERPRISE_DEFINED_SERVICES } from "../data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const gen = (path: string) => {
        return new URL(
            path,
            "https://zonamagica.site/",
        ).toString();
    };

    const SERVICES_PAGES = ENTERPRISE_DEFINED_SERVICES.map(
        (serviceData) => ({
            url: gen(`/servicios/${serviceData.slug}`),
            lastModified: new Date(),
        }),
    );

    const MAIN_PAGES = [
        {
            url: "https://zonamagica.site",
            lastModified: new Date(),
        },
        {
            url: gen("/contacto"),
            lastModified: new Date(),
        },
        {
            url: gen("/sobre-nosotros"),
            lastModified: new Date(),
        },
        {
            url: gen("/contacto"),
            lastModified: new Date(),
        },
    ];

    return [...MAIN_PAGES, ...SERVICES_PAGES];
}
