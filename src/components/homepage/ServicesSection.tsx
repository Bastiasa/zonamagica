import {
    AppShellSection,
    Flex,
    Grid,
    GridCol,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { CenteredSection } from "../CenteredSection";
import { ServiceElement } from "../ServiceElement";
import useEnterpriseServicesInCategories from "@/src/hooks/useEnterpriseServicesInCategories";
import { Fragment } from "react/jsx-runtime";

export type ServicesSectionProps<
    Categories extends EnterpriseServiceCategories,
> = {
    services: EnterpriseServiceData<Categories>[];
    categories: Categories;
};

export function ServicesSection<
    ServicesCategories extends EnterpriseServiceCategories,
>({
    services,
    categories,
}: ServicesSectionProps<ServicesCategories>) {
    const servicesInCategories =
        useEnterpriseServicesInCategories(
            services,
            categories,
        );

    return (
        <CenteredSection>
            <Stack>
                <Title>Explora nuestros planes</Title>

                <Text>
                    En Zona Mágica ofrecemos una calidad de
                    servicios amplia, para ajustarnos
                    perfectamente a tu evento.
                </Text>

                <Grid gap={"md"}>
                    {servicesInCategories.map(
                        (categoryData) => {
                            return (
                                <Fragment
                                    key={categoryData.slug}
                                >
                                    <GridCol span={12}>
                                        <div className="mt-16 mb-18 px-8 py-12 bg-[#EC1FA0]">
                                            <Title
                                                order={2}
                                                className="text-white"
                                            >
                                                {
                                                    categoryData.label
                                                }
                                            </Title>
                                        </div>
                                    </GridCol>

                                    {categoryData.services.map(
                                        (
                                            serviceData,
                                            i,
                                        ) => (
                                            <ServiceElement
                                                serviceData={
                                                    serviceData
                                                }
                                                key={i}
                                            />
                                        ),
                                    )}
                                </Fragment>
                            );
                        },
                    )}
                </Grid>
            </Stack>
        </CenteredSection>
    );
}
