import {
    Button,
    Card,
    CardSection,
    Flex,
    GridCol,
    Group,
    Image,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { LinkIcon } from "lucide-react";
import { NavigationButton } from "./NavigationButton";
import { copFormat } from "../utils/copFormat";

export type ServiceElementProps<
    Categories extends EnterpriseServiceCategories,
> = {
    serviceData: EnterpriseServiceData<Categories>;
};

export function ServiceElement<
    Categories extends EnterpriseServiceCategories,
>({ serviceData }: ServiceElementProps<Categories>) {
    return (
        <GridCol span={{ xs: 12, sm: 6, md: 4 }}>
            <Card withBorder>
                <Stack>
                    <Image
                        bdrs={8}
                        className="h-[300px] sm:h-[240px]"
                        src={
                            serviceData.image ??
                            "https://placehold.co/600x400"
                        }
                        width={600}
                        height={400}
                        alt={serviceData.name}
                    />

                    <Title order={3} ta={"center"}>
                        {serviceData.name}
                    </Title>

                    <Flex
                        wrap={"wrap"}
                        px={24}
                        justify="space-between"
                    >
                        <Text>Precio</Text>
                        <Text>
                            $ {copFormat(serviceData.price)}
                        </Text>

                        <div className="w-full"></div>

                        <Text>Horas</Text>
                        <Text>
                            {copFormat(serviceData.hours)}
                        </Text>

                        <div className="w-full"></div>

                        <Text>Recreadores</Text>
                        <Text>{serviceData.workers}</Text>
                    </Flex>

                    <NavigationButton
                        variant="filled"
                        to={`/servicios/${serviceData.slug}`}
                        className="w-full"
                        rightSection={<LinkIcon />}
                    >
                        Ver detalles
                    </NavigationButton>
                </Stack>
            </Card>
        </GridCol>
    );
}
