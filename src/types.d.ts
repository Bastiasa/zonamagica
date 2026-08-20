export {};

declare global {
    type EnterpriseServiceCategory = {
        slug: string;
        label: string;
    };

    type EnterpriseServiceCategories =
        readonly EnterpriseServiceCategory[];

    type EnterpriseServiceData<
        Categories extends EnterpriseServiceCategories =
            any,
    > = {
        category: Categories[number]["slug"];
        slug: string;
        name: string;
        price: number;
        hours: number;
        workers: number;
        description?: string;
        attributes?: string[];
        image?: string;
    };
}
