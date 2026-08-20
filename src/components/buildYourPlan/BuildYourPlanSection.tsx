"use client";

import { copFormat } from "@/src/utils/copFormat";
import { gtmManager } from "@/src/utils/gtm";
import {
    Blockquote,
    Card,
    Chip,
    ChipProps,
    Flex,
    Grid,
    GridCol,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { CenteredSection } from "../CenteredSection";
import { ContactButton } from "../ContactButton";
import { BypProvider, useBypContext } from "./Context";
import { BypChipData } from "./types";

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
        const value = items[index]?.checked;
        setChecked(value ?? false);

        if (typeof value !== "undefined") {
            gtmManager.bypItemSet({
                item_name: itemData.label,
                value,
            });
        }
    }, [items, itemData]);

    return (
        <Chip
            checked={checked}
            onChange={(value) => {
                setChecked(value);
                updateCheck(index, value);

                if (value) {
                    gtmManager.bypItemSet({
                        item_name: itemData.label,
                        value,
                    });
                }
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
        items,
    } = useBypContext();

    if (items.filter((item) => item.checked).length < 1) {
        return <Text>(Toque una opción)</Text>;
    }

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
                <div className="mx-auto">
                    <ContactButton
                        gtmProperties={{
                            location: "build_your_plan",
                            byp_checked_items: items.filter(
                                (item) => item.checked,
                            ),
                        }}
                        label={
                            <Text className="text-wrap!">
                                Ordenar plan personalizado
                            </Text>
                        }
                        wsIcon={null}
                        wsMessage={`¡Hola! Quisiera cotizar un evento con lo siguiente:\n\n${parsedItems}`}
                    />
                </div>
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
                            size="xs"
                            style={{
                                filter: "brightness(1) contrast(.8)",
                            }}
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
