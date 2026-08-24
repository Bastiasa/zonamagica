import type { MetadataRoute } from "next";
import { ENTERPRISE_DEFINED_SERVICES } from "../data/services";
import { servicePage } from "../utils/websitePage";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const gen = (path: string) => {
        return new URL(
            path,
            "https://zonamagica.site/",
        ).toString();
    };

    const SERVICES_PAGES = ENTERPRISE_DEFINED_SERVICES.map(
        (serviceData) =>
            ({
                url: servicePage(serviceData),
                lastModified,
                images: [gen(serviceData.image ?? "")],
            }) as MetadataRoute.Sitemap[number],
    );

    const MAIN_PAGES = [
        {
            url: "https://zonamagica.site",
            lastModified,
        },
        {
            url: gen("/contacto"),
            lastModified,
        },
        {
            url: gen("/sobre-nosotros"),
            lastModified,
        },
        {
            url: gen("/contacto"),
            lastModified,
        },
        {
            url: gen("/planes"),
            lastModified,
        },
    ];

    return [...MAIN_PAGES, ...SERVICES_PAGES];
}
