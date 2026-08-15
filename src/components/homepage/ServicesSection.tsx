import {
    AppShellSection,
    Flex,
    Grid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { CenteredSection } from "../CenteredSection";
import { ServiceElement } from "../ServiceElement";

export type ServicesSectionProps = {
    services: EnterpriseServiceData[];
};

export function ServicesSection({
    services,
}: ServicesSectionProps) {
    return (
        <CenteredSection>
            <Stack>
                <Title>Nuestros servicios</Title>

                <Text>
                    En Zona Mágica ofrecemos una calidad de
                    servicios amplia, para ajustarnos
                    perfectamente a tu evento.
                </Text>

                <Grid gap={"md"}>
                    {services.map((serviceData, i) => (
                        <ServiceElement
                            serviceData={serviceData}
                            key={i}
                        />
                    ))}
                </Grid>
            </Stack>
        </CenteredSection>
    );
}
