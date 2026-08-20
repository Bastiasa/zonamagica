import { copFormat } from "@/src/utils/copFormat";
import websitePage, {
    servicePage,
} from "@/src/utils/websitePage";
import {
    Divider,
    Grid,
    GridCol,
    Group,
    Image,
    List,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { useMemo } from "react";
import { CenteredSection } from "../CenteredSection";
import { GoBackButton } from "../GoBackButton";
import Ld from "../Ld";
import BuyButton from "./BuyButton";
import { SeeDetailsButton } from "./SeeDetailsButton";
import { ServiceCopyLinkButton } from "./ServiceCopyLinkButton";
import { ShareServiceButton } from "./ShareServiceButton";

export function ServiceInformation({
    serviceData,
}: {
    serviceData: EnterpriseServiceData;
}) {
    const jsonLd = useMemo(
        () => ({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": servicePage(
                `${serviceData.slug}#service`,
            ),

            name: `Plan ${serviceData.name}`,

            description: serviceData.description,

            url: servicePage(serviceData),

            provider: {
                "@id": websitePage("#business"),
            },

            areaServed: {
                "@type": "City",
                name: "Medellín",
            },

            image: websitePage(serviceData.image ?? ""),

            offers: {
                "@type": "Offer",
                price: serviceData.price.toString(),
                priceCurrency: "COP",
                availability: "https://schema.org/InStock",
                url: servicePage(serviceData),
            },
        }),
        [serviceData],
    );

    return (
        <CenteredSection maw={1200}>
            <Ld content={jsonLd} />

            <SimpleGrid
                cols={{
                    base: 1,
                    xs: 1,
                    sm: 2,
                }}
                spacing={64}
            >
                <Image
                    maw={{
                        sm: 700,
                        base: 400,
                    }}
                    alt={"Plan " + serviceData.name}
                    mx={"auto"}
                    bdrs={12}
                    className="aspect-4/5"
                    src={
                        serviceData.image ??
                        "https://placehold.co/600x400"
                    }
                />
                <Stack id="detalles" gap={"lg"}>
                    <Title ta={"center"}>
                        {serviceData.name}
                    </Title>

                    <Divider />

                    <Group>
                        <div className="mr-auto">
                            <GoBackButton>
                                Volver
                            </GoBackButton>
                        </div>
                        <ShareServiceButton
                            serviceData={serviceData}
                        />

                        <ServiceCopyLinkButton
                            serviceData={serviceData}
                        />

                        <SeeDetailsButton />
                    </Group>

                    <Grid gap={"xl"}>
                        {serviceData.description && (
                            <GridCol span={{ xs: 12 }}>
                                <Stack>
                                    <Title order={2}>
                                        Descripción
                                    </Title>
                                    <Text>
                                        {
                                            serviceData.description
                                        }
                                    </Text>
                                </Stack>
                            </GridCol>
                        )}

                        <GridCol span={{ xs: 12 }}>
                            <Group justify="space-between">
                                <Title order={3}>
                                    Precio
                                </Title>

                                <Text>
                                    ${" "}
                                    {copFormat(
                                        serviceData.price,
                                    )}
                                </Text>
                            </Group>

                            <Group justify="space-between">
                                <Title order={3}>
                                    Horas
                                </Title>

                                <Text>
                                    {serviceData.hours}
                                </Text>
                            </Group>

                            <Group justify="space-between">
                                <Title order={3}>
                                    Recreadores
                                </Title>

                                <Text>
                                    {serviceData.workers}
                                </Text>
                            </Group>
                        </GridCol>

                        {serviceData.attributes && (
                            <GridCol span={{ xs: 12 }}>
                                <Stack>
                                    <Title order={2}>
                                        Detalles
                                    </Title>

                                    <List>
                                        {serviceData.attributes!.map(
                                            (item, i) => (
                                                <ListItem
                                                    key={i}
                                                >
                                                    {item}
                                                </ListItem>
                                            ),
                                        )}
                                    </List>
                                </Stack>
                            </GridCol>
                        )}

                        <GridCol span={12}>
                            <Group justify="center">
                                <BuyButton
                                    serviceData={
                                        serviceData
                                    }
                                />
                            </Group>
                        </GridCol>
                    </Grid>
                </Stack>
            </SimpleGrid>
        </CenteredSection>
    );
}
