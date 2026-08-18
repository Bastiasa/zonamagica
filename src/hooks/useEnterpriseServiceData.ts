import { useMemo } from "react";
import { ENTERPRISE_DEFINED_SERVICES } from "../data/services";

export default (slug: string) => {
    return useMemo(
        () =>
            ENTERPRISE_DEFINED_SERVICES.find(
                (s) => s.slug === slug,
            ),
        [slug],
    );
};
