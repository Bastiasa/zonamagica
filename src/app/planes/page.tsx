import { ServicesSection } from "@/src/components/homepage/ServicesSection";
import { NavigationButton } from "@/src/components/NavigationButton";
import {
    ENTERPRISE_DEFINED_SERVICES,
    ENTERPRISE_DEFINED_SERVICES_CATEGORIES,
} from "@/src/data/services";
import { Stack, Text, Title } from "@mantine/core";

export default () => {
    return (
        <>
            <ServicesSection
                services={ENTERPRISE_DEFINED_SERVICES}
                categories={
                    ENTERPRISE_DEFINED_SERVICES_CATEGORIES
                }
            />
            <Stack maw={1200} mx={"auto"} px={24} py={128}>
                <Title order={1}>
                    Crea tu plan personalizado
                </Title>

                <Text>
                    ¿No encuentras un plan que se acomode a
                    tus necesidades? Puedes crear tu plan
                    personalizado.
                </Text>

                <NavigationButton
                    className="mx-auto! block! text-wrap! wrap-break-word!"
                    w={"100%"}
                    to="/evento-personalizado"
                >
                    Crear tu plan personalizado
                </NavigationButton>
            </Stack>
        </>
    );
};
