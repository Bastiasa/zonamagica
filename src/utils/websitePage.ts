export const servicePage = (
    serviceOrSlug: EnterpriseServiceData | string,
) => {
    let slug: string;

    if (typeof serviceOrSlug == "string") {
        slug = serviceOrSlug;
    } else {
        slug = serviceOrSlug.slug;
    }

    return websitePage(`/planes/${slug}`);
};

export default function websitePage(path: string) {
    return new URL(
        path,
        "https://zonamagica.site/",
    ).toString();
}
