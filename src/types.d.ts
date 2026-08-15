export {};

declare global {
    type EnterpriseServiceData = {
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
