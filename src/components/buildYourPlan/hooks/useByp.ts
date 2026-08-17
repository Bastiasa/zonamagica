import { useObject } from "@/src/hooks/useObject";
import { useMemo, useState } from "react";
import { BypChipData } from "../types";

const MINIMAL_PRICE = 160_000;

const ITEMS = [
    {
        label: "Pintucaritas",
        price: 40_000,
    },

    {
        label: "Show de Payasos",
        price: 40_000,
    },

    {
        label: "Show de Títeres",
        price: 60_000,
    },

    {
        label: "Globoflexia",
        price: 40_000,
    },

    {
        label: "Kit de Hora Loca",
        price: 40_000,
    },

    {
        label: "Personaje temático",
        price: [25_000, 200_000],
    },

    {
        label: "Sonido Básico",
        price: 80_000,
        group: "sonido",
    },

    {
        label: "Sonido profesional",
        price: 120_000,
        group: "sonido",
    },

    {
        label: "Decoración sencilla",
        price: 245_000,
        group: "decoración",
    },

    {
        label: "Decoración inmobiliaria",
        price: [300_000, 580_000],
        group: "decoración",
    },

    {
        label: "Inflable",
        price: 180_000,
    },

    {
        label: "Mago",
        price: 150_000,
    },
] as BypChipData[];

const calculatePossiblePrice = (
    items: BypChipData[],
    type: "min" | "max",
) => {
    const result = items.reduce((prev, curr) => {
        if (!curr.checked) {
            return prev;
        }

        if (curr.price instanceof Array) {
            if (type == "min") {
                return prev + curr.price[0];
            } else {
                return prev + curr.price[1];
            }
        }

        return prev + curr.price;
    }, 0);

    return Math.max(result, MINIMAL_PRICE);
};

export default () => {
    const [items, setItems] =
        useState<BypChipData[]>(ITEMS);

    const minPossiblePrice = useMemo(() => {
        return calculatePossiblePrice(items, "min");
    }, [items]);

    const maxPossiblePrice = useMemo(() => {
        return calculatePossiblePrice(items, "max");
    }, [items]);

    const setCheck = (index: number, checked: boolean) => {
        setItems((prevItems) => {
            if (!prevItems[index]) {
                return prevItems;
            }

            const itemData = prevItems[index];

            if (itemData.group) {
                Object.values(prevItems)
                    .filter(
                        ({ group }) =>
                            group === itemData.group,
                    )
                    .forEach((item) => {
                        item.checked = false;
                    });
            }

            itemData.checked = checked;

            return [...prevItems];
        });
    };

    const isOnePrice = useMemo(() => {
        const difference = Math.abs(
            maxPossiblePrice - minPossiblePrice,
        );
        return difference <= 0.1;
    }, [maxPossiblePrice, minPossiblePrice]);

    return {
        maxPossiblePrice,
        minPossiblePrice,
        items,
        setCheck,
        isOnePrice,
    };
};
