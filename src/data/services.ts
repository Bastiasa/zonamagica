const MINIMAL_ATTRIBUTES = [
    "Pintucaritas",
    "Show de títeres",
    "Show de payasos",
];

export const ENTERPRISE_DEFINED_SERVICES: EnterpriseServiceData[] =
    [
        {
            slug: "minipack",
            name: "Minipack Fiesta",
            description: "lorem ipsum",
            price: 160_000,
            hours: 3,
            workers: 1,
            attributes: [...MINIMAL_ATTRIBUTES],
            image: "/images/services/minipack.jpeg",
        },

        {
            name: "Combo Fiestero",
            slug: "combo-fiestero",
            price: 260_000,
            hours: 4,
            workers: 2,
            attributes: [
                ...MINIMAL_ATTRIBUTES,
                "Hora loca",
                "Personaje(s) especial(es)",
            ],
            image: "/images/services/fiestero.jpeg",
        },

        {
            name: "Combo Grandote",
            slug: "combo-grandote",
            price: 320_000,
            hours: 4,
            workers: 2,
            attributes: [
                ...MINIMAL_ATTRIBUTES,
                "Hora loca",
                "Inflable",
            ],
        },

        {
            name: "Combo Especial",
            slug: "combo-especial",
            price: 420_000,
            hours: 4,
            workers: 2,
            attributes: [
                ...MINIMAL_ATTRIBUTES,
                "Hora loca",
                "Inflable",
                "Personaje(s) especial(es)",
            ],
        },
    ] as const;
