"use client";

import {
    Chip,
    ChipProps,
    Flex,
    GridCol,
    Stack,
    Text,
    Title,
    Grid,
    Card,
    Blockquote,
} from "@mantine/core";
import { CenteredSection } from "../CenteredSection";
import { useEffect, useMemo, useState } from "react";
import { BypProvider, useBypContext } from "./Context";
import { BypChipData } from "./types";
import { copFormat } from "@/src/utils/copFormat";
import { ContactButton } from "../ContactButton";

const Item = ({
    defaultChecked,
    index,
    itemData,
    ...props
}: {
    index: number;
    itemData: BypChipData;
} & ChipProps) => {
    const [checked, setChecked] = useState<boolean>(
        defaultChecked ?? false,
    );

    const { setCheck: updateCheck, items } =
        useBypContext();

    useEffect(() => {
        setChecked(items[index]?.checked ?? false);
    }, [items]);

    return (
        <Chip
            checked={checked}
            onChange={(value) => {
                setChecked(value);
                updateCheck(index, value);
            }}
            defaultChecked={defaultChecked}
            {...props}
        />
    );
};

const PriceResult = () => {
    const {
        maxPossiblePrice,
        minPossiblePrice,
        isOnePrice,
    } = useBypContext();

    if (isOnePrice) {
        return <Text>$ {copFormat(minPossiblePrice)}</Text>;
    } else {
        return (
            <Text>
                ${copFormat(minPossiblePrice)} - $
                {copFormat(maxPossiblePrice)}
            </Text>
        );
    }
};

const BuyButton = () => {
    const { items } = useBypContext();

    const parsedItems = useMemo(() => {
        return Object.values(items)
            .filter(({ checked }) => checked)
            .map(({ label }) => label)
            .join("\n");
    }, [items]);

    return (
        <>
            {parsedItems && (
                <ContactButton
                    label={
                        <Text className="text-wrap!">
                            Ordenar plan personalizado
                        </Text>
                    }
                    wsIcon={null}
                    wsMessage={`¡Hola! Quisiera cotizar un evento con lo siguiente:\n\n${parsedItems}`}
                />
            )}
        </>
    );
};

const BypContent = () => {
    const { items, isOnePrice } = useBypContext();

    return (
        <CenteredSection className="py-16">
            <Stack>
                <Title order={2}>
                    Personaliza tu plan aquí
                </Title>

                <Text>
                    Toca la opción que desees agregar a tu
                    plan personalizado. Nuestro precio
                    mínimo es de $160.000.
                </Text>

                <Flex gap={"md"} wrap={"wrap"}>
                    {items.map((itemData, i) => (
                        <Item
                            index={i}
                            variant="light"
                            itemData={itemData}
                            key={i}
                        >
                            {itemData.label}
                        </Item>
                    ))}
                </Flex>

                <Card
                    withBorder
                    bg={"purple"}
                    className="text-white!"
                >
                    <Grid>
                        <GridCol span={{ xs: 12, sm: 5 }}>
                            <Text>Precio de tu plan</Text>
                        </GridCol>

                        <GridCol
                            span={{
                                xs: 12,
                                sm: 12 - 5,
                            }}
                        >
                            <PriceResult />
                        </GridCol>
                    </Grid>
                </Card>

                {!isOnePrice && (
                    <Blockquote>
                        El precio puede variar por diversos
                        factores. Para conocer más detalles,
                        puedes contactarnos.
                    </Blockquote>
                )}

                <BuyButton />

                <Text>
                    Importante: si el lugar del evento es
                    muy lejos de Zona Mágica, se cobrará una
                    cuota extra por transporte.
                </Text>
            </Stack>
        </CenteredSection>
    );
};

export function BuildYourPlanSection() {
    return (
        <BypProvider>
            <BypContent></BypContent>
        </BypProvider>
    );
}
