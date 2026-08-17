import {
    ActionIcon,
    Button,
    Divider,
    Grid,
    GridCol,
    Group,
    Image,
    List,
    ListItem,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { CenteredSection } from "../CenteredSection";
import { copFormat } from "@/src/utils/copFormat";
import { ContactButton } from "../ContactButton";
import { IconLink, IconShare } from "@tabler/icons-react";
import { GoBackButton } from "../GoBackButton";
import { ShareButton } from "../ShareButton";
import { ShareServiceButton } from "./ShareServiceButton";
import { ServiceCopyLinkButton } from "./ServiceCopyLinkButton";

export function ServiceInformation({
    serviceData,
}: {
    serviceData: EnterpriseServiceData;
}) {
    return (
        <CenteredSection maw={600}>
            <Stack gap={"lg"}>
                <Image
                    maw={400}
                    mx={"auto"}
                    bdrs={12}
                    className="aspect-4/5"
                    src={
                        serviceData.image ??
                        "https://placehold.co/600x400"
                    }
                />

                <Title ta={"center"}>
                    {serviceData.name}
                </Title>

                <Divider />

                <Group>
                    <div className="mr-auto">
                        <GoBackButton>Volver</GoBackButton>
                    </div>
                    <ShareServiceButton
                        serviceData={serviceData}
                    />

                    <ServiceCopyLinkButton
                        serviceData={serviceData}
                    />
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
                            <Title order={3}>Precio</Title>

                            <Text>
                                ${" "}
                                {copFormat(
                                    serviceData.price,
                                )}
                            </Text>
                        </Group>

                        <Group justify="space-between">
                            <Title order={3}>Horas</Title>

                            <Text>{serviceData.hours}</Text>
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
                            <ContactButton
                                label={<p>Cotizar</p>}
                                wsMessage={`¡Hola!, me gustaría cotizar el plan ${serviceData.name}`}
                            />
                        </Group>
                    </GridCol>
                </Grid>
            </Stack>
        </CenteredSection>
    );
}
