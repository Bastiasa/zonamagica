import { useMemo } from "react";

export default <
    Categories extends EnterpriseServiceCategories,
>(
    services: EnterpriseServiceData<Categories>[],
    categories: Categories,
) => {
    return useMemo(() => {
        return categories.map((category) => ({
            ...category,
            services: [
                ...services.filter(
                    (service) =>
                        service.category === category.slug,
                ),
            ],
        }));
    }, [services, categories]);
};
